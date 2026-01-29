"use client";
import type { LucideIcon } from "lucide-react";
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
import { useTranslations } from "next-intl";
import { usePlausible } from "next-plausible";
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
import Container from "./container";
import { CardStaggerContainer, FadeUpMotion, StaggerItem } from "./motion";
import { ShineBorder } from "./ui/shine-border";

// Product configuration with translation keys
const PRODUCT_CONFIG: Array<{
	key: string;
	icon: LucideIcon;
	priceINR: number;
	categoryKey: string;
	metricsUsers: string;
	metricsUptime: string;
	metricsIntegrations: string;
	featureKeys: string[];
}> = [
	{
		key: "posAnalytics",
		icon: ChartAreaIcon,
		priceINR: 15_000,
		categoryKey: "analyticsBI",
		metricsUsers: "5,000+",
		metricsUptime: "99.9%",
		metricsIntegrations: "50+",
		featureKeys: [
			"realTimeDashboard",
			"inventoryMgmt",
			"mobileApp",
			"predictiveAnalytics",
			"multiStore",
			"apiIntegration",
		],
	},
	{
		key: "taskFlow",
		icon: CalendarCheck,
		priceINR: 8_000,
		categoryKey: "projectMgmt",
		metricsUsers: "10,000+",
		metricsUptime: "99.8%",
		metricsIntegrations: "75+",
		featureKeys: [
			"agileBoards",
			"timeTracking",
			"teamCollab",
			"customWorkflows",
			"advancedReporting",
			"apiAccess",
		],
	},
	{
		key: "hrMax",
		icon: UsersIcon,
		priceINR: 12_000,
		categoryKey: "humanResources",
		metricsUsers: "2,000+",
		metricsUptime: "99.9%",
		metricsIntegrations: "40+",
		featureKeys: [
			"payrollAuto",
			"leaveMgmt",
			"recruitment",
			"performanceReviews",
			"employeePortal",
			"analytics",
		],
	},
	{
		key: "salesForce",
		icon: ChartNoAxesCombinedIcon,
		priceINR: 10_000,
		categoryKey: "salesMarketing",
		metricsUsers: "3,000+",
		metricsUptime: "99.9%",
		metricsIntegrations: "60+",
		featureKeys: [
			"leadScoring",
			"pipelineMgmt",
			"mobileCrm",
			"salesAuto",
			"emailIntegration",
			"aiInsights",
		],
	},
	{
		key: "knowledgeHub",
		icon: BookMarkedIcon,
		priceINR: 10_000,
		categoryKey: "documentation",
		metricsUsers: "1,500+",
		metricsUptime: "99.7%",
		metricsIntegrations: "30+",
		featureKeys: [
			"versionControl",
			"teamWikis",
			"collaboration",
			"apiDocs",
			"searchDiscovery",
			"exportOptions",
		],
	},
];

export default function Solutions() {
	const plausible = usePlausible();
	const t = useTranslations("solutions");
	const tCommon = useTranslations("common");

	// Build products with translations
	const products = PRODUCT_CONFIG.map((product) => ({
		...product,
		title: t(`products.${product.key}.title`),
		description: t(`products.${product.key}.description`),
		category: t(`categories.${product.categoryKey}`),
		features: product.featureKeys.map((fKey) =>
			t(`products.${product.key}.features.${fKey}`),
		),
	}));

	const softwareApplicationsSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "SaaS Products by Ganethra",
		description: t("description"),
		itemListElement: products.map((product, index) => ({
			"@type": "SoftwareApplication",
			position: index + 1,
			name: product.title,
			description: product.description,
			applicationCategory: product.category,
			operatingSystem: "Web-based",
			offers: {
				"@type": "Offer",
				price: product.priceINR,
				priceCurrency: "INR",
				priceSpecification: {
					"@type": "UnitPriceSpecification",
					price: product.priceINR,
					priceCurrency: "INR",
					unitText: "per month",
				},
				availability: "https://schema.org/InStock",
			},
			featureList: product.features,
			publisher: {
				"@type": "Organization",
				name: "Ganethra IT Services Pvt. Ltd.",
				url: "https://ganethra.com",
			},
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
							{t("badge")}
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							{t("title")}
						</h2>
					</FadeUpMotion>
					<FadeUpMotion delay={0.2}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
							{t("description")}
						</p>
					</FadeUpMotion>
				</header>

				<CardStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{products.map((product) => {
						const IconComponent = product.icon;
						return (
							<StaggerItem key={product.key}>
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
															{product.title}
														</CardTitle>
														<Badge
															variant="secondary"
															className="mb-2"
															aria-label={`Category: ${product.category}`}
														>
															{product.category}
														</Badge>
													</div>
												</div>
												<div className="text-right -space-y-1">
													{/*<p className="text-lg font-semibold text-primary">
														{numUtils.formatToINR(product.priceINR, {
															precision: 0,
														})}
													</p>
													<span className="text-xs text-muted-foreground">
														{tCommon("perMonth")}
													</span>*/}
													<Badge variant="outline">Contact For Pricing</Badge>
												</div>
											</div>

											<CardDescription className="text-muted-foreground mt-4">
												{product.description}
											</CardDescription>
										</CardHeader>

										<CardContent className="space-y-6">
											{/* Key Metrics */}
											<section className="grid grid-cols-3 gap-4 text-center border-y py-4">
												<div>
													<div className="text-sm font-semibold text-primary">
														{product.metricsUsers}
													</div>
													<div className="text-xs text-muted-foreground">
														{t("activeUsers")}
													</div>
												</div>
												<div>
													<div className="text-sm font-semibold text-green-600">
														{product.metricsUptime}
													</div>
													<div className="text-xs text-muted-foreground">
														{t("reliability")}
													</div>
												</div>
												<div>
													<div className="text-sm font-semibold text-blue-600">
														{product.metricsIntegrations}
													</div>
													<div className="text-xs text-muted-foreground">
														{t("integrations")}
													</div>
												</div>
											</section>

											{/* Features */}
											<section>
												<h3 className="text-sm font-semibold mb-3">
													{t("keyFeatures")}
												</h3>
												<ul className="grid grid-cols-2 gap-2">
													{product.features.map((feature, idx) => (
														<li
															key={idx}
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
												aria-label={`Start free trial for ${product.title}`}
												onClick={() => {
													plausible("Product Trial Request", {
														props: { product: product.title },
													});
												}}
											>
												{tCommon("startFreeTrial")}
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
