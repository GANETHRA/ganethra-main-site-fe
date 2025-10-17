"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "./container";
import {
	UsersIcon,
	PlayIcon,
	CheckIcon,
	Layers,
	ChartAreaIcon,
	CalendarCheck,
	BookMarkedIcon,
	ChartNoAxesCombinedIcon,
} from "lucide-react";
import { numUtils } from "@/lib/utils";

const SOLUTIONS = [
	{
		icon: ChartAreaIcon,
		title: "POS Analytics Pro",
		categories: ["Analytics & BI"],
		subscriptionPriceINR: 15_000,
		description:
			"Advanced retail analytics platform with real-time insights, inventory optimization, and predictive analytics",
		metrics: {
			users: "5,000+ active users",
			uptime: "99.9% Uptime",
			integrations: "50+ Integrations",
		},
		features: [
			"Real-time Dashboard",
			"Inventory Management",
			"Mobile App",
			"Predictive Analytics",
			"Multi-store Support",
			"API Integration",
		],
	},
	{
		icon: CalendarCheck,
		title: "TaskFlow Pro",
		categories: ["Project Management"],
		subscriptionPriceINR: 8_000,
		description:
			"Next-gen project management combining Jira's power with ClickUp's simplicity for agile teams",
		metrics: {
			users: "10,000+ teams",
			uptime: "99.8% Uptime",
			integrations: "75+ Integrations",
		},
		features: [
			"Agile Boards",
			"Time Tracking",
			"Team Collaboration",
			"Custom Workflows",
			"Advanced Reporting",
			"API Access",
		],
	},
	{
		icon: UsersIcon,
		title: "HRMax Suite",
		categories: ["Human Resources"],
		subscriptionPriceINR: 12_000,
		description:
			"Complete HRMS with payroll, performance management, and employee self-service portal",
		metrics: {
			users: "2,000+ companies",
			uptime: "99.9% Uptime",
			integrations: "40+ Integrations",
		},
		features: [
			"Payroll Automation",
			"Leave Management",
			"Recruitment",
			"Performance Reviews",
			"Employee Portal",
			"Analytics",
		],
	},
	{
		icon: ChartNoAxesCombinedIcon,
		title: "SalesForce+",
		categories: ["Sales & Marketing"],
		subscriptionPriceINR: 10_000,
		description:
			"AI-powered CRM with advanced lead scoring, sales automation, and customer journey mapping",
		metrics: {
			users: "3,000+ sales teams",
			uptime: "99.9% Uptime",
			integrations: "60+ Integrations",
		},
		features: [
			"Lead Scoring",
			"Pipeline Management",
			"Mobile CRM",
			"Sales Automation",
			"Email Integration",
			"AI Insights",
		],
	},
	{
		icon: BookMarkedIcon,
		title: "KnowledgeHub",
		categories: ["Documentation"],
		subscriptionPriceINR: 10_000,
		description:
			"Collaborative documentation platform with version control, API docs, and team wikis",
		metrics: {
			users: "1,500+ Organizations",
			uptime: "99.7% Uptime",
			integrations: "30+ Integrations",
		},
		features: [
			"Version Control",
			"Team Wikis",
			"Collaboration",
			"API Documentation",
			"Search & Discovery",
			"Export Options",
		],
	},
];

export default function Solutions() {
	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
			<Container>
				<div className="text-center mb-16 space-y-4">
					<Badge variant="outline" className="px-3 py-1">
						<Layers className="w-4 h-4 mr-1" />
						SaaS Products
					</Badge>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
						Ready-to-Deploy Solutions
					</h2>
					<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
						Production-ready SaaS applications trusted by thousands of
						businesses worldwide
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{SOLUTIONS.map((solution) => {
						const IconComponent = solution.icon;
						return (
							<Card
								key={solution.title}
								className="group hover:shadow-xl transition-all duration-300 shadow-lg"
							>
								<CardHeader>
									<div className="flex items-start justify-between">
										<div className="flex gap-4 items-center">
											<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
												<IconComponent className="w-6 h-6 text-primary" />
											</div>
											<div>
												<CardTitle className="text-xl font-semibold">
													{solution.title}
												</CardTitle>
												<div className="flex gap-2">
													{solution.categories.map((category) => (
														<Badge
															variant="secondary"
															className="mb-2"
															key={category}
														>
															{category}
														</Badge>
													))}
												</div>
											</div>
										</div>
										<div className="text-right -space-y-1">
											<p className="text-lg font-semibold text-primary">
												{numUtils.formatToINR(solution.subscriptionPriceINR, {
													precision: 0,
												})}
											</p>
											<span className="text-xs text-muted-foreground">
												per month
											</span>
										</div>
									</div>

									<CardDescription className="text-muted-foreground mt-4">
										{solution.description}
									</CardDescription>
								</CardHeader>

								<CardContent className="space-y-6">
									{/* Key Metrics */}
									<div className="grid grid-cols-3 gap-4 text-center border-y py-4">
										<div>
											<div className="text-sm font-semibold text-primary">
												{solution.metrics.users}
											</div>
											<div className="text-xs text-muted-foreground">
												Active Users
											</div>
										</div>
										<div>
											<div className="text-sm font-semibold text-green-600">
												{solution.metrics.uptime}
											</div>
											<div className="text-xs text-muted-foreground">
												Reliability
											</div>
										</div>
										<div>
											<div className="text-sm font-semibold text-blue-600">
												{solution.metrics.integrations}
											</div>
											<div className="text-xs text-muted-foreground">
												Integrations
											</div>
										</div>
									</div>

									{/* Features */}
									<div>
										<h4 className="text-sm font-semibold mb-3">Key Features</h4>
										<div className="grid grid-cols-2 gap-2">
											{solution.features.map((feature) => (
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
										</div>
									</div>
								</CardContent>
								<CardFooter className="flex-1 items-end">
									<Button className="w-full group-hover:bg-primary/90 transition-colors">
										Start Free Trial
										<PlayIcon className="w-4 h-4 ml-2" />
									</Button>
								</CardFooter>
							</Card>
						);
					})}
				</div>
			</Container>
		</section>
	);
}
