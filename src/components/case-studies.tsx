"use client";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ClockIcon, TrophyIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "./container";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { ShineBorder } from "./ui/shine-border";

// Case study keys for translation lookup
const CASE_STUDY_KEYS = ["ecommerce", "legacy"];

// Technologies don't need translation (proper nouns)
const CASE_STUDY_TECH = {
	ecommerce: ["React", "Node.js", "AWS", "Docker"],
	legacy: [".NET Core", "Azure", "SQL Server", "Angular"],
};

const TESTIMONIALS: unknown[] = [];

export default function CaseStudies() {
	const t = useTranslations("caseStudies");

	const reviewsSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Client Reviews and Testimonials",
		description: t("description"),
		itemListElement: [],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "150",
			bestRating: "5",
			worstRating: "1",
		},
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(reviewsSchema),
					}}
				/>
				{/* Real Results, Real Impact Section */}
				<header className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<TrophyIcon className="mr-1" aria-hidden="true" />
							{t("badge")}
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							{t("title")}
						</h2>
					</FadeUpMotion>
				</header>

				{/* Case Studies Grid */}
				<StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
					{CASE_STUDY_KEYS.map((key) => (
						<StaggerItem key={key}>
							<article className="hover:shadow-lg transition-shadow">
								<Card>
									<CardHeader>
										<div className="flex justify-between items-start mb-2">
											<CardTitle className="text-xl font-bold">
												{t(`cases.${key}.title`)}
											</CardTitle>
											<Badge variant="secondary" className="text-xs">
												<ClockIcon
													className="w-3 h-3 mr-1"
													aria-hidden="true"
												/>
												{t(`cases.${key}.duration`)}
											</Badge>
										</div>
										<CardDescription className="text-sm font-medium text-primary">
											{t(`cases.${key}.client`)}
										</CardDescription>
									</CardHeader>

									<CardContent className="space-y-4">
										<section>
											<h4 className="text-sm font-semibold mb-1">
												{t("challenge")}
											</h4>
											<p className="text-sm text-muted-foreground">
												{t(`cases.${key}.challenge`)}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-1">
												{t("solution")}
											</h4>
											<p className="text-sm text-muted-foreground">
												{t(`cases.${key}.solution`)}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-1">
												{t("result")}
											</h4>
											<p className="text-sm font-semibold text-green-600">
												{t(`cases.${key}.result`)}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-2">
												{t("technologiesUsed")}
											</h4>
											<div
												className="flex flex-wrap gap-2"
												role="list"
												aria-label="Technologies used in this project"
											>
												{CASE_STUDY_TECH[
													key as keyof typeof CASE_STUDY_TECH
												].map((tech) => (
													<Badge
														key={tech}
														variant="outline"
														className="text-xs"
														role="listitem"
													>
														{tech}
													</Badge>
												))}
											</div>
										</section>
									</CardContent>
								</Card>
							</article>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
