"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitForm } from "@/lib/form";
import {
	ArrowRightIcon,
	CalendarIcon,
	ClockIcon,
	DownloadIcon,
	Loader2Icon,
	MailIcon,
	MapPinIcon,
	MessageCircle,
	PhoneIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { usePlausible } from "next-plausible";
import { useId, useState } from "react";
import toast from "react-hot-toast";
import Container from "./container";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { Badge } from "./ui/badge";
import { ShineBorder } from "./ui/shine-border";

const SERVICE_KEYS = [
	"customDev",
	"cloudMigration",
	"dataEngineering",
	"cybersecurity",
	"digitalTransformation",
	"devops",
	"saasProducts",
	"itConsulting",
];

const BUDGET_RANGES = ["₹50K - ₹1L", "₹1L - ₹5L", "₹5L - ₹10L", "₹10L+"];

const TIMELINES = ["ASAP", "1-3 months", "3-6 months", "6+ months", "Flexible"];

export default function Contact() {
	const descriptionId = useId();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const plausible = usePlausible();
	const t = useTranslations("contact");

	// Build translated services list
	const services = SERVICE_KEYS.map((key) => ({
		key,
		label: t(`services.${key}`),
	}));

	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"@id": "https://ganethra.com/#localbusiness",
		name: "Ganethra IT Services Pvt. Ltd.",
		description: t("description"),
		url: "https://ganethra.com",
		telephone: "+91-80-4152-1234",
		email: "contact@ganethra.com",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Hyderabad",
			addressRegion: "Karnataka",
			addressCountry: "IN",
			postalCode: "560034",
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "12.9716",
			longitude: "77.5946",
		},
		openingHours: "Mo-Fr 09:00-18:00",
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "09:00",
			closes: "18:00",
		},
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91-80-4152-1234",
			contactType: "customer service",
			areaServed: "IN",
			availableLanguage: "en",
			email: "contact@ganethra.com",
		},
		sameAs: [
			"https://linkedin.com/company/ganethra",
			"https://twitter.com/ganethrait",
		],
		hasCredential: {
			"@type": "EducationalOccupationalCredential",
			name: "ISO 27001 Certified",
		},
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const formData = new FormData(e.currentTarget);
			const data = Object.fromEntries(formData.entries());

			await submitForm("generic", data);

			// Track form submission
			plausible("Contact Form Submission", {
				props: { service: data.service },
			});

			toast.success(t("form.successMessage"), {
				duration: 6000,
				position: "top-center",
			});

			e.currentTarget?.reset();
		} catch (error) {
			console.error("Form submission error:", error);
			toast.error(t("form.errorMessage"), {
				duration: 5000,
				position: "top-center",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="py-20">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessSchema),
					}}
				/>
				{/* Main Heading */}
				<header className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<MessageCircle className="mr-1" aria-hidden="true" />
							{t("badge")}
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							{t("title")}
						</h2>
					</FadeUpMotion>
					<FadeUpMotion delay={0.2}>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							{t("description")}
						</p>
					</FadeUpMotion>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column: Project Requirements Form */}
					<FadeUpMotion className="lg:col-span-2">
						<article>
							<Card className="shadow-lg">
								<CardHeader>
									<CardTitle className="text-2xl font-bold">
										{t("projectRequirements")}
									</CardTitle>
									<CardDescription>
										{t("projectRequirementsDesc")}
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<form
										className="space-y-6"
										onSubmit={handleSubmit}
										aria-label="Project requirements form"
									>
										{/* Row 1: Name and Email */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input
												label={t("form.name")}
												name="name"
												placeholder={t("form.namePlaceholder")}
												required
												aria-describedby="name-help"
											/>
											<Input
												label={t("form.email")}
												name="email"
												type="email"
												placeholder={t("form.emailPlaceholder")}
												required
												aria-describedby="email-help"
											/>
										</div>

										{/* Row 2: Company and Service */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<Input
												label={t("form.company")}
												name="company"
												placeholder={t("form.companyPlaceholder")}
												aria-describedby="company-help"
											/>
											<div className="space-y-2">
												<Label>
													{t("form.service")}{" "}
													<span className="text-red-500" aria-label="required">
														{t("required")}
													</span>
												</Label>
												<Select
													name="service"
													required
													aria-describedby="service-help"
												>
													<SelectTrigger className="w-full">
														<SelectValue
															placeholder={t("form.servicePlaceholder")}
														/>
													</SelectTrigger>
													<SelectContent>
														{services.map(({ key, label }) => (
															<SelectItem key={key} value={label}>
																{label}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</div>
										</div>

										{/* Row 3: Budget and Timeline */}
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div className="space-y-2">
												<Label>{t("form.budget")}</Label>
												<Select name="budget">
													<SelectTrigger className="w-full">
														<SelectValue
															placeholder={t("form.budgetPlaceholder")}
														/>
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
												<Label>{t("form.timeline")}</Label>
												<Select name="timeline">
													<SelectTrigger className="w-full">
														<SelectValue
															placeholder={t("form.timelinePlaceholder")}
														/>
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
												{t("form.description")}{" "}
												<span className="text-red-500">{t("required")}</span>
											</Label>
											<Textarea
												id={descriptionId}
												name="description"
												placeholder={t("form.descriptionPlaceholder")}
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
											aria-label="Submit project requirements form"
										>
											{isSubmitting && (
												<Loader2Icon
													className="animate-spin"
													aria-hidden="true"
												/>
											)}
											{t("form.submit")}
											<ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
										</Button>
									</form>
								</CardContent>
							</Card>
						</article>
					</FadeUpMotion>

					{/* Right Column: Contact Info, Quick Actions, Response Time */}
					<StaggerContainer className="space-y-6">
						<StaggerItem>
							{/* Contact Information Card */}
							<Card className="shadow-lg gap-3">
								<CardHeader>
									<CardTitle className="text-lg font-bold">
										{t("contactInfo")}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center gap-3">
										<MailIcon
											className="w-5 h-5 text-primary"
											aria-hidden="true"
										/>
										<a
											className="text-sm hover:underline"
											href="mailto:contact@ganethra.com"
											aria-label="Send email to contact@ganethra.com"
										>
											contact@ganethra.com
										</a>
									</div>
									<div className="flex items-center gap-3">
										<PhoneIcon
											className="w-5 h-5 text-primary"
											aria-hidden="true"
										/>
										<a
											className="text-sm hover:underline"
											href="tel:+917095959508"
											aria-label="Call us at +91 70 9595 9508"
										>
											+91 70 9595 9508
										</a>
									</div>
									<div className="flex items-center gap-3">
										<MapPinIcon
											className="w-5 h-5 text-primary"
											aria-hidden="true"
										/>
										<a
											href="https://maps.google.com/?q=Saroornagar,Hyderabad,India"
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm hover:underline"
											aria-label="View our office location in Saroornagar, Hyderabad on Google Maps"
										>
											Saroornagar, Hyderabad, India
										</a>
									</div>
									<div className="flex items-center gap-3">
										<ClockIcon
											className="w-5 h-5 text-primary"
											aria-hidden="true"
										/>
										<span className="text-sm">{t("businessHours")}</span>
									</div>
								</CardContent>
							</Card>
						</StaggerItem>
						<StaggerItem>
							{/* Quick Actions Card */}
							<Card className="shadow-lg gap-3">
								<CardHeader>
									<CardTitle className="text-lg font-bold">
										{t("quickActions")}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-3">
									<Button
										variant="outline"
										className="w-full justify-start"
										aria-label="Download company profile PDF"
										onClick={() => {
											plausible("Download Company Profile");
										}}
									>
										<DownloadIcon className="w-4 h-4 mr-2" aria-hidden="true" />
										{t("downloadProfile")}
									</Button>
									<Button
										variant="outline"
										className="w-full justify-start"
										aria-label="Schedule a video call consultation"
										onClick={() => {
											plausible("Schedule Video Call");
										}}
									>
										<CalendarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
										{t("scheduleCall")}
									</Button>
									<Button
										className="w-full justify-start"
										aria-label="Access product demos and trials"
										onClick={() => {
											plausible("Access Product Demos");
										}}
									>
										<ArrowRightIcon
											className="w-4 h-4 mr-2"
											aria-hidden="true"
										/>
										{t("accessDemos")}
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
											{t("responseTime")}
										</h4>
										<Badge className="rounded-full text-green-800 bg-green-100 text-sm">
											<div
												className="size-2 rounded-full bg-green-500 mr-1"
												aria-hidden="true"
											/>
											{t("hours")}
										</Badge>
									</div>
									<p className="text-sm text-muted-foreground">
										{t("responseTimeDesc")}
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
