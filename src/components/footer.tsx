"use client";
import { DotIcon, ShieldIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Container from "./container";

// Service keys for translation (product names don't need translation)
const SAAS_PRODUCTS = [
	"POS Analytics Pro",
	"TaskFlow Pro",
	"HRMax Suite",
	"SalesForce+",
	"KnowledgeHub",
];

// Company link keys for translation
const COMPANY_LINK_KEYS = [
	"aboutUs",
	"careers",
	"caseStudies",
	"blog",
	"privacy",
	"terms",
];

export default function Footer() {
	const locale = useLocale();
	const t = useTranslations("footer");
	const tServices = useTranslations("services");

	// Build services list from service translations
	const SERVICE_KEYS = [
		"customSoftware",
		"cloudMigration",
		"dataEngineering",
		"cybersecurity",
		"digitalTransformation",
		"devops",
	];

	const services = SERVICE_KEYS.map((key) => tServices(`${key}.title`));
	const companyLinks = COMPANY_LINK_KEYS.map((key) => ({
		key,
		label: t(`links.${key}`),
	}));

	return (
		<footer
			className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12"
			role="contentinfo"
		>
			<Container>
				<div className="py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<section className="space-y-4">
							<div className="flex items-center gap-2">
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
									<span
										className="text-white font-black text-2xl"
										aria-hidden="true"
									>
										G
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-xl font-bold tracking-tighter">
										Ganethra IT
									</span>
									<span className="text-sm text-muted-foreground">
										Services Pvt. Ltd.
									</span>
								</div>
							</div>

							<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
								{t("tagline")}
							</p>

							<div className="flex items-center gap-2">
								<ShieldIcon
									className="w-4 h-4 text-green-600"
									aria-hidden="true"
								/>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									{t("isoCertified")}
								</span>
							</div>
						</section>

						{/* Services */}
						<section className="space-y-4">
							<h3 className="font-bold text-gray-900 dark:text-white">
								{t("itServicesTitle")}
							</h3>
							<nav aria-label="IT services navigation">
								<ul className="space-y-2" role="list">
									{services.map((service) => (
										<li key={service} role="listitem">
											<a
												href="#services"
												className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
												aria-label={`Learn more about ${service}`}
											>
												{service}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</section>

						{/* SaaS Products */}
						<section className="space-y-4">
							<h3 className="font-bold text-gray-900 dark:text-white">
								{t("saasTitle")}
							</h3>
							<nav aria-label="SaaS products navigation">
								<ul className="space-y-2" role="list">
									{SAAS_PRODUCTS.map((product) => (
										<li key={product} role="listitem">
											<a
												href="#solutions"
												className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
												aria-label={`Explore ${product} SaaS solution`}
											>
												{product}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</section>

						{/* Company */}
						<section className="space-y-4">
							<h3 className="font-bold text-gray-900 dark:text-white">
								{t("companyTitle")}
							</h3>
							<nav aria-label="Company information navigation">
								<ul className="space-y-2" role="list">
									{companyLinks.map(({ key, label }) => (
										<li key={key} role="listitem">
											{key === "privacy" ? (
												<Link
													href={`/${locale}/privacy`}
													className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
													aria-label={`View ${label}`}
												>
													{label}
												</Link>
											) : key === "terms" ? (
												<Link
													href={`/${locale}/terms`}
													className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
													aria-label={`View ${label}`}
												>
													{label}
												</Link>
											) : (
												<a
													href={`#${key.toLowerCase().replace(/\s+/g, "-")}`}
													className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
													aria-label={`View ${label} information`}
												>
													{label}
												</a>
											)}
										</li>
									))}
								</ul>
							</nav>
						</section>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="py-6 border-t border-gray-200 dark:border-gray-800">
					<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
						<div className="text-sm text-gray-500 dark:text-gray-400">
							{t("copyright", { year: new Date().getFullYear() })}
						</div>
						<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<span>{t("madeIn")}</span>
							<DotIcon className="w-4 h-4" aria-hidden="true" />
							<span>{t("servingGlobally")}</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
