"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Send, Bot, User, X } from "lucide-react";
import { FormRenderer } from "./form";
import type { ConversationData, Message } from "./data";

interface ChatbotProps {
	conversationData?: ConversationData;
	onFormSubmit?: (
		formId: string,
		data: Record<string, string>,
	) => Promise<void>;
	placeholder?: string;
}

export function Chatbot({
	conversationData,
	onFormSubmit,
	placeholder = "Type your message...",
}: ChatbotProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [currentForm, setCurrentForm] = useState<string | null>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Use provided data or default
	const data = conversationData || defaultConversationData;

	// Initialize messages
	useEffect(() => {
		setMessages([data.initialMessage]);
	}, [data.initialMessage]);

	// Auto-scroll to bottom
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	});

	const simulateTyping = (text: string, delay: number = 1000) => {
		setIsTyping(true);
		setTimeout(() => {
			const newMessage: Message = {
				id: `msg-${Date.now()}`,
				text,
				sender: "bot",
				timestamp: new Date(),
				type: "text",
			};
			setMessages((prev) => [...prev, newMessage]);
			setIsTyping(false);
		}, delay);
	};

	const handleQuickReply = (action: string) => {
		const reply = data.quickReplies.find((r) => r.action === action);
		if (reply) {
			// Add user message
			const userMessage: Message = {
				id: `msg-${Date.now()}`,
				text: reply.text,
				sender: "user",
				timestamp: new Date(),
				type: "text",
			};
			setMessages((prev) => [...prev, userMessage]);
		}

		// Handle the action based on data
		const response = data.responses[action];
		if (response) {
			if (response.delay) {
				simulateTyping(response.message, response.delay);
			} else {
				const botMessage: Message = {
					id: `msg-${Date.now()}`,
					text: response.message,
					sender: "bot",
					timestamp: new Date(),
					type: response.formId ? "form" : "text",
					formData: response.formId ? { formId: response.formId } : undefined,
				};
				setMessages((prev) => [...prev, botMessage]);
			}

			// Handle special cases
			if (action === "services") {
				// Show services after delay
				setTimeout(() => {
					data.serviceCategories.forEach((service, index) => {
						setTimeout(
							() => {
								const serviceMessage: Message = {
									id: `msg-${Date.now()}-${index}`,
									text: `**${service.title}**\n${service.description}\n\nKey features:\n${service.features.map((f) => `• ${f}`).join("\n")}`,
									sender: "bot",
									timestamp: new Date(),
									type: "text",
								};
								setMessages((prev) => [...prev, serviceMessage]);
							},
							(index + 1) * 1000,
						);
					});

					// Show final options
					setTimeout(
						() => {
							const optionsMessage: Message = {
								id: `msg-${Date.now()}-options`,
								text: "Which service interests you most? I can provide more details or help you get a quote!",
								sender: "bot",
								timestamp: new Date(),
								type: "quick_reply",
								options: [
									{ text: "Get a Quote", action: "quote" },
									{ text: "Contact Us", action: "contact" },
								],
							};
							setMessages((prev) => [...prev, optionsMessage]);
						},
						data.serviceCategories.length * 1000 + 500,
					);
				}, response.delay || 1000);
			}

			// Set form if needed
			if (response.formId) {
				setTimeout(() => {
					setCurrentForm(response.formId || null);
				}, response.delay || 500);
			}
		}
	};

	const handleSendMessage = () => {
		if (!inputValue.trim()) return;

		// Add user message
		const userMessage: Message = {
			id: `msg-${Date.now()}`,
			text: inputValue,
			sender: "user",
			timestamp: new Date(),
			type: "text",
		};
		setMessages((prev) => [...prev, userMessage]);

		const message = inputValue.trim();
		setInputValue("");

		// Enhanced bot responses based on keywords
		const userMessageLower = message.toLowerCase();
		let response = "";

		if (
			userMessageLower.includes("price") ||
			userMessageLower.includes("cost") ||
			userMessageLower.includes("budget")
		) {
			response =
				"I'd be happy to help you with pricing! Let me start our budget estimator to give you accurate pricing for your project.";
			setTimeout(() => handleQuickReply("budget"), 1000);
		} else if (
			userMessageLower.includes("service") ||
			userMessageLower.includes("what do you do")
		) {
			response =
				"We offer comprehensive technology solutions! Let me show you our services.";
			setTimeout(() => handleQuickReply("services"), 1000);
		} else if (
			userMessageLower.includes("contact") ||
			userMessageLower.includes("speak") ||
			userMessageLower.includes("call")
		) {
			response =
				"I'd be happy to connect you with our team! Let me get your contact information.";
			setTimeout(() => handleQuickReply("contact"), 1000);
		} else if (
			userMessageLower.includes("quote") ||
			userMessageLower.includes("proposal")
		) {
			response =
				"Great! Let me help you get a personalized quote for your project.";
			setTimeout(() => handleQuickReply("quote"), 1000);
		} else {
			const responses = [
				"That's interesting! Tell me more about your requirements and I'll help you find the right solution.",
				"I understand. Let me connect you with our expert team who can provide detailed information.",
				"Great question! Our specialists can provide comprehensive information about that.",
				"I'd be happy to help you with that. What's your timeline for this project?",
				"Excellent! Let's discuss how we can help you achieve your goals. What specific challenges are you facing?",
				"That sounds like an exciting project! I can help you get a quote or connect with our team for more details.",
			];
			response = responses[Math.floor(Math.random() * responses.length)];
		}

		simulateTyping(response, 1000);
	};

	const handleFormSubmit = async (
		formId: string,
		formData: Record<string, string>,
	) => {
		setIsSubmitting(true);
		try {
			// Use custom form handler or default
			if (onFormSubmit) {
				await onFormSubmit(formId, formData);
			} else {
				// Default form submission
				const formConfig = data.formConfigs[formId];
				if (formConfig) {
					await formConfig.submitAction(formData);
				}
			}

			// Add success message
			let successMessage =
				"Thank you! Your information has been submitted successfully.";
			if (formId === "budget") {
				const budget = formData.budget || "Not specified";
				const project = formData.project || "Not specified";
				successMessage = `Based on your selection: **${project}** with budget **${budget}**. Our team will provide a detailed estimate within 24 hours!`;
			} else if (formId === "quote") {
				successMessage =
					"Perfect! I've received your quote request. Our team will review your requirements and send you a detailed proposal within 24 hours.";
			} else if (formId === "contact") {
				successMessage =
					"Thank you! I've saved your contact information. Our team will reach out to you within 24 hours to discuss your needs.";
			}

			const successMsg: Message = {
				id: `msg-${Date.now()}`,
				text: successMessage,
				sender: "bot",
				timestamp: new Date(),
				type: "success",
			};
			setMessages((prev) => [...prev, successMsg]);

			setCurrentForm(null);

			// Show options after success
			setTimeout(() => {
				const optionsMessage: Message = {
					id: `msg-${Date.now()}-options`,
					text: "Is there anything else I can help you with?",
					sender: "bot",
					timestamp: new Date(),
					type: "quick_reply",
					options: data.quickReplies,
				};
				setMessages((prev) => [...prev, optionsMessage]);
			}, 2000);
		} catch (error) {
			console.error("Form submission error:", error);
			const errorMsg: Message = {
				id: `msg-${Date.now()}`,
				text: "Failed to send message. Please try again later.",
				sender: "bot",
				timestamp: new Date(),
				type: "text",
			};
			setMessages((prev) => [...prev, errorMsg]);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleFormCancel = () => {
		setCurrentForm(null);
	};

	return (
		<div>
			{/* Chat Button */}
			<Button
				onClick={() => setIsOpen(!isOpen)}
				size="icon"
				className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full"
			>
				<MessageCircle className="h-5 w-5" />
			</Button>

			{/* Chat Window */}
			{isOpen && (
				<Card className="fixed bottom-16 right-4 z-50 h-[600px] w-96 shadow-lg gap-0 py-4">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 border-b !pb-2">
						<div className="flex items-center space-x-2">
							<Avatar className="h-8 w-8">
								<AvatarFallback>
									<Bot className="h-4 w-4" />
								</AvatarFallback>
							</Avatar>
							<div>
								<CardTitle className="text-sm">GANETHRA Assistant</CardTitle>
								<Badge variant="secondary" className="text-xs">
									Online
								</Badge>
							</div>
						</div>
						<Button
							onClick={() => setIsOpen(false)}
							variant="ghost"
							size="icon"
							className="h-8 w-8"
						>
							<X className="h-4 w-4" />
						</Button>
					</CardHeader>
					<CardContent className="flex flex-col p-0">
						{/* Messages */}
						<ScrollArea className="px-4 h-[440px]">
							<div className="mt-4 space-y-4">
								{messages.map((message) => (
									<div
										key={message.id}
										className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
									>
										<div
											className={`flex max-w-[85%] items-start space-x-2 ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
										>
											<Avatar className="h-8 w-8">
												<AvatarFallback>
													{message.sender === "user" ? (
														<User className="h-4 w-4" />
													) : (
														<Bot className="h-4 w-4" />
													)}
												</AvatarFallback>
											</Avatar>
											<div
												className={`rounded-lg px-3 py-2 ${
													message.sender === "user"
														? "bg-primary text-primary-foreground"
														: "bg-muted"
												}`}
											>
												<p className="text-sm whitespace-pre-line">
													{message.text}
												</p>
												{message.type === "quick_reply" && message.options && (
													<div className="mt-2 flex flex-wrap gap-2">
														{message.options.map((option, optionIndex) => (
															<Button
																key={`${option.action}-${optionIndex}`}
																variant="outline"
																size="sm"
																onClick={() => handleQuickReply(option.action)}
																className="h-auto p-2 text-xs"
															>
																{option.text}
															</Button>
														))}
													</div>
												)}
											</div>
										</div>
									</div>
								))}
								{isTyping && (
									<div className="flex justify-start">
										<div className="flex items-start space-x-2">
											<Avatar className="h-8 w-8">
												<AvatarFallback>
													<Bot className="h-4 w-4" />
												</AvatarFallback>
											</Avatar>
											<div className="rounded-lg bg-muted px-3 py-2">
												<div className="flex space-x-1">
													<div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
													<div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
													<div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
												</div>
											</div>
										</div>
									</div>
								)}
								<div ref={messagesEndRef} />
							</div>
							{/* Form */}
							{currentForm && data.formConfigs[currentForm] && (
								<div className="border-t p-4">
									<FormRenderer
										formConfig={data.formConfigs[currentForm]}
										onSubmit={(formData) =>
											handleFormSubmit(currentForm, formData)
										}
										onCancel={handleFormCancel}
										isSubmitting={isSubmitting}
									/>
								</div>
							)}
						</ScrollArea>

						<CardFooter className="border-t">
							<div className="flex-1 flex space-x-2">
								<Input
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
									placeholder={placeholder}
									disabled={isTyping || isSubmitting || !!currentForm}
								/>
								<Button
									onClick={handleSendMessage}
									disabled={
										!inputValue.trim() ||
										isTyping ||
										isSubmitting ||
										!!currentForm
									}
									size="icon"
								>
									<Send className="h-4 w-4" />
								</Button>
							</div>
						</CardFooter>
					</CardContent>
				</Card>
			)}
		</div>
	);
}

// Import default data
import { defaultConversationData } from "./data";
