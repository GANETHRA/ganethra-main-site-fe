import Container from "@/components/container";
import Footer from "@/components/footer";
import { locales } from "@/i18n/config";
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

	const base = locale === "en" ? "" : `/${locale}`;
	return {
		title: "Privacy Policy",
		description:
			"Privacy Policy for Ganethra IT Services Pvt. Ltd. Learn how we collect, use, and protect personal information.",
		alternates: {
			canonical: `${base}/privacy`,
		},
	};
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
	const { locale } = await params;
	setRequestLocale(locale);

	const effectiveDate = "2 January 2026";

	return (
		<>
			<main className="min-h-[60vh]">
				<Container>
					<div className="py-16 md:py-20 max-w-3xl">
						<header className="space-y-3">
							<h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
								Privacy Policy
							</h1>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Effective date: {effectiveDate}
							</p>
							<p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
								This Privacy Policy explains how Ganethra IT Services Pvt. Ltd.
								("Ganethra", "we", "us") collects, uses, shares, and protects
								personal information when you visit our website and when you
								contact us about our IT services and SaaS solutions.
							</p>
						</header>

						<section className="mt-10 space-y-8">
							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									1. Information We Collect
								</h2>
								<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									<li>
										<b>Information you provide:</b> name, email address, company
										name, phone number (if provided), project details, and any
										information you submit through our contact forms or via
										email.
									</li>
									<li>
										<b>Automatically collected information:</b> device and
										browser information, approximate location (e.g.,
										city/country), pages viewed, and usage data.
									</li>
									<li>
										<b>Cookies and analytics:</b> we may use cookies and similar
										technologies for site functionality, security, and
										analytics.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									2. How We Use Information
								</h2>
								<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									<li>
										To respond to inquiries and provide quotes or proposals.
									</li>
									<li>
										To provide, maintain, and improve our website and services.
									</li>
									<li>
										To communicate about service updates, security, and support.
									</li>
									<li>
										To monitor, prevent, and detect fraud, abuse, and security
										incidents.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									3. Legal Bases (Where Applicable)
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Depending on your location and applicable law, we process
									personal information based on one or more of the following:
									your consent, performance of a contract or steps requested by
									you, compliance with legal obligations, and our legitimate
									interests (such as security and service improvement).
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									4. How We Share Information
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									We do not sell personal information. We may share information
									with:
								</p>
								<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									<li>
										<b>Service providers</b> who help operate our website and
										business (e.g., hosting, analytics, email, support tooling)
										under confidentiality and data protection obligations.
									</li>
									<li>
										<b>Professional advisors</b> (e.g., legal, accounting) where
										necessary.
									</li>
									<li>
										<b>Authorities</b> if required to comply with law or to
										protect rights, safety, and security.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									5. Data Retention
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									We retain personal information only for as long as necessary
									for the purposes described in this policy, unless a longer
									retention period is required or permitted by law (for example,
									for accounting, security, and dispute resolution).
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									6. Security
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									We use reasonable administrative, technical, and
									organizational measures to protect personal information. No
									method of transmission over the internet or method of
									electronic storage is 100% secure, so we cannot guarantee
									absolute security.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									7. International Transfers
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									If you access our website from outside India, your information
									may be processed in countries where our service providers
									operate. Where required, we use appropriate safeguards for
									such transfers.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									8. Your Rights and Choices
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Depending on your location, you may have rights to access,
									correct, delete, or object to certain processing of your
									personal information, or to request portability. To exercise
									these rights, contact us using the details below.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									9. Third-Party Links
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Our website may contain links to third-party websites. We are
									not responsible for their privacy practices. We encourage you
									to review their privacy policies.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									10. Contact Us
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									If you have questions about this Privacy Policy or our privacy
									practices, contact us at:
								</p>
								<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-sm text-gray-700 dark:text-gray-300">
									<div className="font-semibold text-gray-900 dark:text-white">
										Ganethra IT Services Pvt. Ltd.
									</div>
									<div>Saroornagar, Hyderabad, India</div>
									<div>Email: connect@ganethra.com</div>
								</div>
							</div>

							<div className="space-y-2">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									11. Updates to This Policy
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									We may update this Privacy Policy from time to time. We will
									post the updated version on this page and update the effective
									date.
								</p>
							</div>

							<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-secondary p-4 text-sm text-gray-700 dark:text-gray-300">
								<b>Note:</b> This page provides general information and is not
								legal advice. Consider consulting qualified counsel to tailor
								this policy to your specific business and regulatory
								obligations.
							</div>
						</section>
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
