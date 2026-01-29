"use client";
import { ActivityItem } from "@/components/ui/activity-item";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { ArrowRightIcon, PlayIcon, ZapIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePlausible } from "next-plausible";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { AuroraText } from "./ui/aurora-text";
import { ShineBorder } from "./ui/shine-border";

export default function Hero() {
	const plausible = usePlausible();
	const t = useTranslations("hero");
	const tCommon = useTranslations("common");

	return (
		<Container className="py-20 center">
			<article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
				<header className="space-y-6 text-center lg:text-left">
					<FadeUpMotion>
						<div className="mx-auto lg:mx-0">
							<Badge
								variant="outline"
								className="relative px-3 py-1 text-sm font-medium"
								aria-label="Service category badge"
							>
								<ShineBorder />
								<ZapIcon className="w-4 h-4 mr-1" aria-hidden="true" />
								{t("badge")}
							</Badge>
						</div>
					</FadeUpMotion>

					<FadeUpMotion delay={0.1}>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
							{t("title")} <AuroraText>{t("titleHighlight")}</AuroraText>
						</h1>
					</FadeUpMotion>

					<FadeUpMotion delay={0.2}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
							{t("description")}
						</p>
					</FadeUpMotion>

					{/* CTA Buttons */}
					<FadeUpMotion delay={0.3}>
						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
							<Link
								href="https://iam.ganethra.com"
								title="Start free trial for IT services consultation"
								onClick={() => {
									plausible("CTA Click", {
										props: { button: "Start Free Trial" },
									});
								}}
							>
								<Button
									size="lg"
									className="gap-4 w-full"
									aria-label="Start free trial for IT services consultation"
								>
									{tCommon("startFreeTrial")}
									<ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
								</Button>
							</Link>
							<Link
								href="#solutions"
								title="View our SaaS products and solutions"
								onClick={() => {
									plausible("CTA Click", {
										props: { button: "View Products" },
									});
								}}
							>
								<Button
									variant="outline"
									size="lg"
									className="gap-4 w-full"
									aria-label="View our SaaS products and solutions"
								>
									<PlayIcon className="w-5 h-5" aria-hidden="true" />
									{tCommon("viewProducts")}
								</Button>
							</Link>
						</div>
					</FadeUpMotion>

					{/* Statistics */}
					<aside aria-label="Company achievements and statistics">
						<StaggerContainer className="grid grid-cols-3 divide-x lg:pt-12 pt-8 text-center">
							<StaggerItem>
								<div>
									<div className="text-3xl sm:text-4xl font-bold">500+</div>
									<div className="text-sm text-muted-foreground mt-1">
										{t("projectsDelivered")}
									</div>
								</div>
							</StaggerItem>
							<StaggerItem>
								<div>
									<div className="text-3xl sm:text-4xl font-bold">150+</div>
									<div className="text-sm text-muted-foreground mt-1">
										{t("happyClients")}
									</div>
								</div>
							</StaggerItem>
							<StaggerItem>
								<div>
									<div className="text-3xl sm:text-4xl font-bold">50+</div>
									<div className="text-sm text-muted-foreground mt-1">
										{t("teamMembers")}
									</div>
								</div>
							</StaggerItem>
						</StaggerContainer>
					</aside>
				</header>

				<aside className="h-full flex flex-col justify-between gap-6">
					<FadeUpMotion delay={0.2} className="flex-1 center-y">
						<Image
							src="/assets/hero2.svg"
							alt="Modern office workspace showing team collaboration on digital transformation projects - Ganethra IT Services team working with cloud technologies, data analytics, and software development"
							width={500}
							height={600}
							className="w-full h-full object-contain"
							priority
						/>
					</FadeUpMotion>
					<FadeUpMotion delay={0.3}>
						<h2 className="flex items-center text-sm font-bold text-muted-foreground gap-2 shrink-0">
							<div
								className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
								aria-hidden="true"
							></div>
							{t("liveActivity")}
						</h2>
						<div
							className="flex-1 overflow-hidden relative"
							role="marquee"
							aria-label="Live activity feed showing real-time usage of our SaaS products"
						>
							<div
								className="absolute z-10 left-0 h-full bg-gradient-to-r from-background to-transparent w-8"
								aria-hidden="true"
							/>
							<div
								className="absolute z-10 right-0 h-full bg-gradient-to-l from-background to-transparent w-8"
								aria-hidden="true"
							/>

							<Marquee pauseOnHover className="[--duration:20s] flex gap-4">
								<ActivityItem
									product="POS Analytics"
									action="processed 2.3M transactions"
								/>
								<ActivityItem
									product="TaskFlow"
									action="managed 45K tasks today"
								/>

								<ActivityItem
									product="HRMax"
									action="processed 12K payroll entries"
								/>
								<ActivityItem
									product="SalesForce+"
									action="closed 156 deals today"
								/>
								<ActivityItem
									product="KnowledgeHub"
									action="served 89K queries"
								/>
							</Marquee>
						</div>
					</FadeUpMotion>
				</aside>
			</article>
		</Container>
	);
}
