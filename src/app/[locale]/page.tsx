/* eslint-disable react/no-static-element-interactions */

import About from "@/components/about";
import CaseStudies from "@/components/case-studies";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import { locales } from "@/i18n/config";
import { Bubble } from "@typebot.io/nextjs";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

interface PageProps {
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale } = await params;

	// For now, metadata is in English. Can be translated later.
	return {
		title:
			"Ganethra IT Services - Custom Software Development & SaaS Solutions | Hyderabad",
		description:
			"Leading IT services company in Hyderabad offering custom software development, cloud migration, SaaS solutions, and digital transformation. 500+ projects delivered, 150+ happy clients. Get free consultation today!",
		keywords: [
			"IT services Hyderabad",
			"custom software development India",
			"cloud migration services",
			"SaaS solutions for business",
			"digital transformation consulting",
			"POS analytics software",
			"project management tool",
			"HR management system",
			"data engineering services",
			"DevOps consulting",
			"best IT company in Hyderabad",
			"legacy system modernization India",
			"enterprise software development",
			"retail analytics platform",
		],
		openGraph: {
			title:
				"Ganethra IT Services - Custom Software Development & SaaS Solutions | Hyderabad",
			description:
				"Leading IT services company in Hyderabad offering custom software development, cloud migration, SaaS solutions, and digital transformation. 500+ projects delivered, 150+ happy clients.",
			url: `https://ganethra.com/${locale === "en" ? "" : locale}`,
			type: "website",
			locale: locale,
			images: [
				{
					url: "/assets/hero2.svg",
					width: 1200,
					height: 630,
					alt: "Ganethra IT Services - Modern office workspace showing team collaboration on digital transformation projects",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title:
				"Ganethra IT Services - Custom Software Development & SaaS Solutions | Hyderabad",
			description:
				"Leading IT services company in Hyderabad offering custom software development, cloud migration, SaaS solutions, and digital transformation. 500+ projects delivered, 150+ happy clients.",
			images: ["/assets/hero2.svg"],
		},
		alternates: {
			canonical: `https://ganethra.com/${locale === "en" ? "" : locale}`,
			languages: {
				en: "/",
				es: "/es",
				ar: "/ar",
				ja: "/ja",
				de: "/de",
				fr: "/fr",
				pt: "/pt",
				hi: "/hi",
				zh: "/zh",
				ko: "/ko",
			},
		},
	};
}

export default async function Home({ params }: PageProps) {
	const { locale } = await params;

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<>
			<main>
				<section
					id="hero"
					aria-label="Hero section - Transform Your Business with Modern Tech"
				>
					<Hero />
				</section>
				<section
					id="services"
					aria-label="Our Services - Enterprise-Grade IT Solutions"
				>
					<Services />
				</section>
				<section
					id="solutions"
					aria-label="SaaS Products - Ready-to-Deploy Solutions"
				>
					<Solutions />
				</section>
				<section
					id="about"
					aria-label="About Ganethra - 8+ Years of Excellence in IT Innovation"
				>
					<About />
				</section>
				<section
					id="case-studies"
					aria-label="Success Stories - Real Results, Real Impact"
				>
					<CaseStudies />
				</section>
				<section
					id="contact"
					aria-label="Contact Us - Ready to Transform Your Business"
				>
					<Contact />
				</section>
			</main>
			<Footer />
			{/* <Chatbot /> */}
			<Bubble
				typebot="ganethra-assistant-5d5b6w1"
				apiHost={process.env.NEXT_PUBLIC_TYPEBOT_HOST}
				theme={{
					button: { backgroundColor: "var(--primary)" },
				}}
			/>
		</>
	);
}
