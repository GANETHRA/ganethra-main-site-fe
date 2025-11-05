"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { numUtils } from "@/lib/utils";
import {
	BookMarkedIcon,
	CalendarCheck,
	ChartAreaIcon,
	ChartNoAxesCombinedIcon,
	CheckIcon,
	Layers,
	PlayIcon,
	UsersIcon,
} from "lucide-react";
import { usePlausible } from "next-plausible";
import Container from "./container";
import { CardStaggerContainer, FadeUpMotion, StaggerItem } from "./motion";
import { ShineBorder } from "./ui/shine-border";

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
	const plausible = usePlausible();
	const softwareApplicationsSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "SaaS Products by Ganethra",
		description:
			"Production-ready SaaS applications trusted by thousands of businesses worldwide",
		itemListElement: SOLUTIONS.map((solution, index) => ({
			"@type": "SoftwareApplication",
			position: index + 1,
			name: solution.title,
			description: solution.description,
			applicationCategory: solution.categories[0],
			operatingSystem: "Web-based",
			offers: {
				"@type": "Offer",
				price: solution.subscriptionPriceINR,
				priceCurrency: "INR",
				priceSpecification: {
					"@type": "UnitPriceSpecification",
					price: solution.subscriptionPriceINR,
					priceCurrency: "INR",
					unitText: "per month",
				},
				availability: "https://schema.org/InStock",
			},
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.9",
				reviewCount: "150",
				bestRating: "5",
				worstRating: "1",
			},
			featureList: solution.features,
			publisher: {
				"@type": "Organization",
				name: "Ganethra IT Services Pvt. Ltd.",
				url: "https://ganethra.com",
			},
			url: `https://ganethra.com/solutions#${solution.title.toLowerCase().replace(/\s+/g, "-")}`,
			screenshot: "/assets/hero2.svg",
		})),
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(softwareApplicationsSchema),
					}}
				/>
				<header className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative px-3 py-1">
							<ShineBorder />
							<Layers className="w-4 h-4 mr-1" aria-hidden="true" />
							SaaS Products
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							Ready-to-Deploy Solutions
						</h2>
					</FadeUpMotion>
					<FadeUpMotion delay={0.2}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
							Production-ready SaaS applications trusted by thousands of
							businesses worldwide. Built by leading software development
							company in Hyderabad, India.
						</p>
					</FadeUpMotion>
				</header>

				<CardStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{SOLUTIONS.map((solution) => {
						const IconComponent = solution.icon;
						return (
							<StaggerItem key={solution.title}>
								<article>
									<Card className="group hover:shadow-xl transition-all duration-300 shadow-lg">
										<CardHeader>
											<div className="flex items-start justify-between">
												<div className="flex gap-4 items-center">
													<div className="w-12 h-12 relative transition-shadow rounded-lg flex items-center justify-center group-hover:shadow-sm">
														<ShineBorder shineColor="var(--primary)" />
														<IconComponent
															className="w-6 h-6 text-primary"
															aria-hidden="true"
														/>
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
																	aria-label={`Category: ${category}`}
																>
																	{category}
																</Badge>
															))}
														</div>
													</div>
												</div>
												<div className="text-right -space-y-1">
													<p className="text-lg font-semibold text-primary">
														{numUtils.formatToINR(
															solution.subscriptionPriceINR,
															{
																precision: 0,
															},
														)}
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
											<section className="grid grid-cols-3 gap-4 text-center border-y py-4">
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
											</section>

											{/* Features */}
											<section>
												<h3 className="text-sm font-semibold mb-3">
													Key Features
												</h3>
												<ul className="grid grid-cols-2 gap-2">
													{solution.features.map((feature) => (
														<li
															key={feature}
															className="flex items-center gap-3 text-sm"
														>
															<div className="p-1 bg-emerald-100 rounded-full">
																<CheckIcon
																	className="flex-shrink-0 text-emerald-800"
																	size={12}
																	aria-hidden="true"
																/>
															</div>
															{feature}
														</li>
													))}
												</ul>
											</section>
										</CardContent>
										<CardFooter className="flex-1 items-end">
											<Button
												className="w-full group-hover:bg-primary/90 transition-colors"
												aria-label={`Start free trial for ${solution.title}`}
												onClick={() => {
													plausible("Product Trial Request", {
														props: { product: solution.title },
													});
												}}
											>
												Start Free Trial
												<PlayIcon className="w-4 h-4 ml-2" aria-hidden="true" />
											</Button>
										</CardFooter>
									</Card>
								</article>
							</StaggerItem>
						);
					})}
				</CardStaggerContainer>
			</Container>
		</section>
	);
}
