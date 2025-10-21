"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Container from "./container";
import {
	MailIcon,
	PhoneIcon,
	MapPinIcon,
	ClockIcon,
	DownloadIcon,
	CalendarIcon,
	ArrowRightIcon,
	MessageCircle,
	Loader2Icon,
} from "lucide-react";
import { useId, useState } from "react";
import { Badge } from "./ui/badge";
import { submitForm } from "@/lib/form";
import toast from "react-hot-toast";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { ShineBorder } from "./ui/shine-border";

const SERVICES = [
	"Custom Development",
	"Cloud Migration & Architecture",
	"Data Engineering & Analytics",
	"Cybersecurity Solutions",
	"Digital Transformation",
	"DevOps & Infrastructure",
	"SaaS Products",
	"IT Consulting",
];

const BUDGET_RANGES = ["₹50 - ₹1L", "₹1L - ₹5L", "₹5L - ₹10L", "₹10L+"];

const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "6+ months", "Flexible"];

export default function Contact() {
	const descriptionId = useId();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formData = new FormData(e.currentTarget);
			const data = Object.fromEntries(formData.entries());

			await submitForm("generic", data);

			toast.success(
				"Thank you! Your project request has been submitted successfully. We'll get back to you within 24 hours.",
				{
					duration: 6000,
					position: "top-center",
				},
			);

			e.currentTarget?.reset();
		} catch (error) {
			console.error("Form submission error:", error);
			toast.error(
				"Sorry, there was an error submitting your request. Please try again or contact us directly.",
				{
					duration: 5000,
					position: "top-center",
				},
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="py-20">
			<Container>
				{/* Main Heading */}
				<div className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<MessageCircle className="mr-1" />
							Get Started
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							Ready to Transform Your Business?
						</h2>
					</FadeUpMotion>
					<FadeUpMotion delay={0.2}>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Schedule a free consultation to discuss your project requirements
							and get a custom proposal
						</p>
					</FadeUpMotion>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column: Project Requirements Form */}
					<FadeUpMotion className="lg:col-span-2">
						<div>
							<Card className="shadow-lg">
								<CardHeader>
									<CardTitle className="text-2xl font-bold">
										Project Requirements
									</CardTitle>
									<CardDescription>
										Tell us about your project and we'll get back to you within
										24 hours
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<form className="space-y-6" onSubmit={handleSubmit}>
										{/* Row 1: Name and Email */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input
												label="Your Name"
												name="name"
												placeholder="Enter your full name"
												required
											/>
											<Input
												label="Email Address"
												name="email"
												type="email"
												placeholder="Enter your email"
												required
											/>
										</div>

										{/* Row 2: Company and Service */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input
												label="Company Name"
												name="company"
												placeholder="Enter company name"
											/>
											<div className="space-y-2">
												<Label>
													Select Service <span className="text-red-500">*</span>
												</Label>
												<Select name="service" required>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Choose a service" />
													</SelectTrigger>
													<SelectContent>
														{SERVICES.map((service) => (
															<SelectItem key={service} value={service}>
																{service}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>
										</div>

										{/* Row 3: Budget and Timeline */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>Budget Range</Label>
												<Select name="budget">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select budget range" />
													</SelectTrigger>
													<SelectContent>
														{BUDGET_RANGES.map((range) => (
															<SelectItem key={range} value={range}>
																{range}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>
											<div className="space-y-2">
												<Label>Timeline</Label>
												<Select name="timeline">
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select timeline" />
													</SelectTrigger>
													<SelectContent>
														{TIMELINES.map((timeline) => (
															<SelectItem key={timeline} value={timeline}>
																{timeline}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>
										</div>

										{/* Row 4: Project Description */}
										<div className="space-y-2">
											<Label htmlFor={descriptionId}>
												Project Description{" "}
												<span className="text-red-500">*</span>
											</Label>
											<Textarea
												id={descriptionId}
												name="description"
												placeholder="Describe your project requirements, goals, and any specific features you need..."
												className="min-h-[120px]"
												required
											/>
										</div>

										{/* Submit Button */}
										<Button
											type="submit"
											className="w-full"
											size="lg"
											disabled={isSubmitting}
										>
											{isSubmitting && <Loader2Icon className="animate-spin" />}
											Send Project Request
											<ArrowRightIcon className="w-4 h-4" />
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</FadeUpMotion>

					{/* Right Column: Contact Info, Quick Actions, Response Time */}
					<StaggerContainer className="space-y-6">
						<StaggerItem>
							{/* Contact Information Card */}
							<Card className="shadow-lg gap-3">
								<CardHeader>
									<CardTitle className="text-lg font-bold">
										Contact Information
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center gap-3">
										<MailIcon className="w-5 h-5 text-primary" />
										<a
											className="text-sm hover:underline"
											href="mailto:contact@ganethra.com"
										>
											contact@ganethra.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<PhoneIcon className="w-5 h-5 text-primary" />
										<a
											className="text-sm hover:underline"
											href="tel:+918041521234"
										>
											+91 80 4152 1234
										</a>
									</div>
									<div className="flex items-center gap-3">
										<MapPinIcon className="w-5 h-5 text-primary" />
										<a
											href="https://maps.google.com/?q=Koramangala,Bangalore,India"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm hover:underline"
										>
											Koramangala, Bangalore, India
										</a>
									</div>
									<div className="flex items-center gap-3">
										<ClockIcon className="w-5 h-5 text-primary" />
										<span className="text-sm">Mon-Fri: 9 AM - 6 PM IST</span>
									</div>
								</CardContent>
							</Card>
						</StaggerItem>
						<StaggerItem>
							{/* Quick Actions Card */}
							<Card className="shadow-lg gap-3">
								<CardHeader>
									<CardTitle className="text-lg font-bold">
										Quick Actions
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-3">
									<Button variant="outline" className="w-full justify-start">
										<DownloadIcon className="w-4 h-4 mr-2" />
										Download Company Profile
									</Button>
									<Button variant="outline" className="w-full justify-start">
										<CalendarIcon className="w-4 h-4 mr-2" />
										Schedule Video Call
									</Button>
									<Button className="w-full justify-start">
										<ArrowRightIcon className="w-4 h-4 mr-2" />
										Access Product Demos
									</Button>
								</CardContent>
							</Card>
						</StaggerItem>
						<StaggerItem>
							{/* Response Time Card */}
							<Card className="shadow-lg p-2">
								<CardContent className="p-2 space-y-2">
									<div className="flex gap-2 items-center">
										<h4 className="font-semibold text-lg">
											Average Response Time
										</h4>
										<Badge className="rounded-full text-green-800 bg-green-100 text-sm">
											<div className="size-2 rounded-full bg-green-500 mr-1" />
											24 Hours
										</Badge>
									</div>
									<p className="text-sm text-muted-foreground">
										We respond to all inquiries within 24 hours during business
										days
									</p>
								</CardContent>
							</Card>
						</StaggerItem>
					</StaggerContainer>
				</div>
			</Container>
		</section>
	);
}
