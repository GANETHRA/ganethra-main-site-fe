"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Container from "./container";
import {
	CodeIcon,
	CloudIcon,
	DatabaseIcon,
	ShieldIcon,
	BoxIcon,
	ChevronRight,
	ServerCogIcon,
	MonitorUpIcon,
	CheckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { numUtils } from "@/lib/utils";
import { ShineBorder } from "./ui/shine-border";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";

const SERVICES = [
	{
		icon: CodeIcon,
		title: "Custom Software Development",
		priceINR: 2_50_000,
		description:
			"Enterprise-grade applications built with modern tech stacks including React, Node.js, Python, and .NET",
		features: [
			"Web Applications",
			"API Development",
			"Microservices",
			"Legacy Modernization",
		],
	},
	{
		icon: CloudIcon,
		title: "Cloud Migration & Architecture",
		priceINR: 1_50_000,

		description:
			"Seamless migration to AWS, Azure, or GCP with optimized architectures for scalability",
		features: [
			"AWS/Azure/GCP",
			"Cloud Architecture",
			"DevOps & CI/CD",
			"Cost Optimization",
		],
	},
	{
		icon: DatabaseIcon,
		title: "Data Engineering & Analytics",
		priceINR: 3_00_000,

		description:
			"Transform raw data into actionable insights with modern data warehousing and ML pipelines",
		features: [
			"Data Warehousing",
			"ETL Pipelines",
			"Dashboard Creation",
			"Predictive Analytics",
		],
	},

	{
		icon: ShieldIcon,
		title: "Cybersecurity Solutions",
		priceINR: 2_00_000,
		description:
			"Comprehensive security audits, penetration testing, and compliance implementations",
		features: [
			"Security Audits",
			"Penetration Testing",
			"Compliance",
			"Incident Response",
		],
	},
	{
		icon: MonitorUpIcon,
		title: "Digital Transformation",
		priceINR: 5_00_000,
		description:
			"End-to-end digital transformation with process automation and workflow optimization",
		features: [
			"Process Automation",
			"Legacy System Modernization",
			"Change Management",
			"Training Programs",
		],
	},
	{
		icon: ServerCogIcon,
		title: "DevOps & Infrastructure",
		priceINR: 5_00_000,
		description:
			"CI/CD pipelines, container orchestration, and infrastructure automation",
		features: [
			"Process Automation",
			"Legacy System Modernization",
			"Change Management",
			"Training Programs",
		],
	},
];

export default function Services() {
	return (
		<section className="py-20">
			<Container>
				<div className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<BoxIcon className="mr-1" />
							Our Services
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							Enterprise-Grade IT Solutions
						</h2>
					</FadeUpMotion>
					<FadeUpMotion delay={0.2}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
							Comprehensive IT solutions designed to accelerate your business
							growth and digital transformation journey.
						</p>
					</FadeUpMotion>
				</div>

				<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map((service) => {
						const IconComponent = service.icon;
						return (
							<StaggerItem key={service.title}>
								<Card className="group hover:shadow-lg transition-all duration-300 shadow-sm">
									<CardHeader>
										<div className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow transition-shadow">
											<ShineBorder shineColor="var(--primary)" />
											<IconComponent className="w-6 h-6 text-primary" />
										</div>
										<CardTitle className="text-xl font-semibold">
											{service.title}
										</CardTitle>
										<p className="text-sm font-medium mb-2">
											Starting at{" "}
											{numUtils.formatToINR(service.priceINR, { precision: 0 })}
										</p>
										<CardDescription className="text-muted-foreground leading-relaxed">
											{service.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="space-y-2">
											{service.features.map((feature) => (
												<li
													key={feature}
													className="flex items-center gap-3 text-sm"
												>
													<div className="p-1 bg-emerald-100 rounded-full">
														<CheckIcon
															className="flex-shrink-0 text-emerald-800"
															size={12}
														/>
													</div>
													{feature}
												</li>
											))}
										</ul>
									</CardContent>
									<CardFooter>
										<Button
											variant="outline"
											className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
										>
											Get Quote
											<ChevronRight />
										</Button>
									</CardFooter>
								</Card>
							</StaggerItem>
						);
					})}
				</StaggerContainer>

				{/* <div className="text-center mt-16">
					<Button size="lg" className="gap-2">
						View All Services
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</div> */}
			</Container>
		</section>
	);
}
