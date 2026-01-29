"use client";
import type { LucideIcon } from "lucide-react";
import {
	BoxIcon,
	CheckIcon,
	ChevronRight,
	CloudIcon,
	CodeIcon,
	DatabaseIcon,
	MonitorUpIcon,
	ServerCogIcon,
	ShieldIcon,
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

// Service configuration with correct feature keys for each service
const SERVICE_CONFIG: Array<{
	key: string;
	icon: LucideIcon;
	priceINR: number;
	featureKeys: string[];
}> = [
	{
		key: "customSoftware",
		icon: CodeIcon,
		priceINR: 2_50_000,
		featureKeys: ["webApps", "apiDev", "microservices", "legacyMod"],
	},
	{
		key: "cloudMigration",
		icon: CloudIcon,
		priceINR: 1_50_000,
		featureKeys: ["awsAzureGcp", "cloudArch", "devopsCicd", "costOpt"],
	},
	{
		key: "dataEngineering",
		icon: DatabaseIcon,
		priceINR: 3_00_000,
		featureKeys: ["dataWarehouse", "etlPipelines", "dashboards", "predictive"],
	},
	{
		key: "cybersecurity",
		icon: ShieldIcon,
		priceINR: 2_00_000,
		featureKeys: [
			"securityAudits",
			"penTesting",
			"compliance",
			"incidentResponse",
		],
	},
	{
		key: "digitalTransformation",
		icon: MonitorUpIcon,
		priceINR: 5_00_000,
		featureKeys: ["processAuto", "legacyMod", "changeMgmt", "training"],
	},
	{
		key: "devops",
		icon: ServerCogIcon,
		priceINR: 5_00_000,
		featureKeys: ["processAuto", "legacyMod", "changeMgmt", "training"],
	},
];

export default function Services() {
	const plausible = usePlausible();
	const t = useTranslations("services");
	const tCommon = useTranslations("common");

	// Build services with translations using correct feature keys for each service
	const services = SERVICE_CONFIG.map(
		({ key, icon, priceINR, featureKeys }) => ({
			icon,
			priceINR,
			title: t(`${key}.title`),
			description: t(`${key}.description`),
			features: featureKeys.map((fKey) => t(`${key}.features.${fKey}`)),
		}),
	);

	const servicesSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "IT Services Offered by Ganethra",
		description: t("description"),
		itemListElement: services.map((service, index) => ({
			"@type": "Service",
			position: index + 1,
			name: service.title,
			description: service.description,
			provider: {
				"@type": "Organization",
				name: "Ganethra IT Services Pvt. Ltd.",
				url: "https://ganethra.com",
			},
			areaServed: {
				"@type": "Country",
				name: "India",
			},
			offers: {
				"@type": "Offer",
				price: service.priceINR,
				priceCurrency: "INR",
				description: `${tCommon("startingAt")} ${numUtils.formatToINR(service.priceINR, { precision: 0 })}`,
			},
			serviceType: service.features,
		})),
	};

	return (
		<section className="py-20">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(servicesSchema),
					}}
				/>
				<header className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<BoxIcon className="mr-1" aria-hidden="true" />
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

				<CardStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service) => {
						const IconComponent = service.icon;
						return (
							<StaggerItem key={service.title}>
								<article>
									<Card className="group hover:shadow-lg transition-all duration-300 shadow-sm">
										<CardHeader>
											<div className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:shadow transition-shadow">
												<ShineBorder shineColor="var(--primary)" />
												<IconComponent
													className="w-6 h-6 text-primary"
													aria-hidden="true"
												/>
											</div>
											<CardTitle className="text-xl font-semibold">
												{service.title}
											</CardTitle>
											<p className="text-sm font-medium mb-2">
												{/*{tCommon("startingAt")}{" "}
												<span className="font-bold text-primary">
													{numUtils.formatToINR(service.priceINR, {
														precision: 0,
													})}
												</span>*/}
												<span className="font-bold text-primary">
													Contact for Pricing
												</span>
											</p>
											<CardDescription className="text-muted-foreground leading-relaxed">
												{service.description}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<h3 className="text-sm font-semibold mb-3">
												{t("keyFeatures")}
											</h3>
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
																aria-hidden="true"
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
												aria-label={`Get quote for ${service.title}`}
												onClick={() => {
													plausible("Service Quote Request", {
														props: { service: service.title },
													});
												}}
											>
												{tCommon("getFreeQuote")}
												<ChevronRight aria-hidden="true" />
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
