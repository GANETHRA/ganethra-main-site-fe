import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		default:
			"Ganethra IT Services - Custom Software Development & SaaS Solutions | Hyderabad",
		template: "%s | Ganethra IT Services",
	},
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
	authors: [{ name: "Ganethra IT Services Pvt. Ltd." }],
	creator: "Ganethra IT Services Pvt. Ltd.",
	publisher: "Ganethra IT Services Pvt. Ltd.",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://ganethra.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-IN": "/",
			"en-US": "/",
			en: "/",
		},
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://ganethra.com",
		title:
			"Ganethra IT Services - Custom Software Development & SaaS Solutions | Hyderabad",
		description:
			"Leading IT services company in Hyderabad offering custom software development, cloud migration, SaaS solutions, and digital transformation. 500+ projects delivered, 150+ happy clients.",
		siteName: "Ganethra IT Services",
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
		creator: "@ganethrait",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code", // Replace with actual verification code
	},
	category: "technology",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": ["Organization", "Corporation"],
		name: "Ganethra IT Services Pvt. Ltd.",
		legalName: "Ganethra IT Services Private Limited",
		url: "https://ganethra.com",
		logo: "https://ganethra.com/logo.png",
		foundingDate: "2016",
		description:
			"Leading IT services company in Hyderabad offering custom software development, cloud migration, SaaS solutions, and digital transformation.",
		contactPoint: {
			"@type": "ContactPoint",
			telephone: "+91-80-4152-1234",
			contactType: "customer service",
			areaServed: "IN",
			availableLanguage: "en",
			email: "contact@ganethra.com",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Hyderabad",
			addressRegion: "Karnataka",
			addressCountry: "IN",
			postalCode: "560034",
		},
		sameAs: [
			"https://linkedin.com/company/ganethra",
			"https://twitter.com/ganethrait",
		],
		knowsAbout: [
			"Custom Software Development",
			"Cloud Migration",
			"SaaS Solutions",
			"Digital Transformation",
			"Data Engineering",
			"DevOps",
			"Cybersecurity",
		],
		hasCredential: {
			"@type": "EducationalOccupationalCredential",
			name: "ISO 27001 Certified",
		},
	};

	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
					rel="stylesheet"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link rel="dns-prefetch" href="https://api.iconify.design" />
				<link rel="dns-prefetch" href="https://typebot.io" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Ganethra IT" />
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<PlausibleProvider
					domain="ganethra.com"
					selfHosted
					customDomain="https://plausible.ganethra.com"
					// trackLocalhost
					enabled
				/>
			</head>
			<body className="antialiased">
				<Navbar />
				<Toaster />
				{children}
				{/* </PlausibleProvider> */}
			</body>
		</html>
	);
}
