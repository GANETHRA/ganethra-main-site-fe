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
		title: "Terms of Service",
		description:
			"Terms of Service for Ganethra IT Services Pvt. Ltd. Read the rules and conditions for using our website and services.",
		alternates: {
			canonical: `${base}/terms`,
		},
	};
}

export default async function TermsOfServicePage({ params }: PageProps) {
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
								Terms of Service
							</h1>
							<p className="text-sm text-gray-600 dark:text-gray-400">
								Effective date: {effectiveDate}
							</p>
							<p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
								These Terms of Service ("Terms") govern your access to and use
								of the Ganethra website and any related services provided by
								Ganethra IT Services Pvt. Ltd. ("Ganethra", "we", "us"). By
								accessing or using the website, you agree to these Terms.
							</p>
						</header>

						<section className="mt-10 space-y-8">
							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									1. Who We Are
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Ganethra is an IT services company offering consulting, custom
									software development, and related solutions. We may also
									provide access to SaaS products ("Services").
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									2. Eligibility and Authority
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									You must be able to form a binding contract to use the
									website. If you use the website on behalf of a company, you
									represent that you have authority to bind that company to
									these Terms.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									3. Use of the Website
								</h2>
								<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									<li>
										You may use the website for lawful purposes and in
										accordance with these Terms.
									</li>
									<li>
										You agree not to attempt to disrupt, damage, or gain
										unauthorized access to the website or related systems.
									</li>
									<li>
										You agree not to use the website to transmit unlawful,
										infringing, or harmful content.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									4. Quotes, Proposals, and Engagements
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Any information on the website is for general informational
									purposes and does not constitute a binding offer. Commercial
									terms for paid services (including scope, timelines,
									deliverables, SLAs, pricing, and payment terms) will be set
									out in a separate written agreement or statement of work.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									5. Intellectual Property
								</h2>
								<ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									<li>
										<b>Our content:</b> the website, its design, text, graphics,
										logos, and software are owned by or licensed to Ganethra and
										are protected by applicable laws.
									</li>
									<li>
										<b>Your materials:</b> you retain ownership of information
										and materials you provide. You grant us a limited license to
										use them to respond to your request and provide services.
									</li>
									<li>
										<b>Deliverables:</b> ownership and licensing of project
										deliverables will be defined in the applicable agreement.
									</li>
								</ul>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									6. Third-Party Services and Links
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									The website may reference third-party tools, platforms, or
									links. We do not control third-party services and are not
									responsible for their content or practices.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									7. Disclaimers
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									The website is provided on an "as is" and "as available"
									basis. To the fullest extent permitted by law, we disclaim all
									warranties of any kind, including implied warranties of
									merchantability, fitness for a particular purpose, and
									non-infringement.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									8. Limitation of Liability
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									To the fullest extent permitted by law, Ganethra will not be
									liable for any indirect, incidental, special, consequential,
									or punitive damages, or any loss of profits, revenue, data, or
									goodwill, arising out of or related to your use of the
									website.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									9. Indemnity
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									You agree to defend, indemnify, and hold harmless Ganethra
									from and against claims, liabilities, damages, losses, and
									expenses arising from your violation of these Terms or misuse
									of the website.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									10. Changes to These Terms
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									We may update these Terms from time to time. The updated
									version will be posted on this page and the effective date
									will be updated. Your continued use of the website after
									changes become effective means you accept the updated Terms.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									11. Governing Law and Venue
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									These Terms are governed by the laws of India, without regard
									to conflict of law principles. Courts located in Hyderabad,
									India will have exclusive jurisdiction, subject to applicable
									law.
								</p>
							</div>

							<div className="space-y-3">
								<h2 className="text-xl font-bold text-gray-900 dark:text-white">
									12. Contact
								</h2>
								<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
									Questions about these Terms can be sent to:
								</p>
								<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 text-sm text-gray-700 dark:text-gray-300">
									<div className="font-semibold text-gray-900 dark:text-white">
										Ganethra IT Services Pvt. Ltd.
									</div>
									<div>Saroornagar, Hyderabad, India</div>
									<div>Email: connect@ganethra.com</div>
								</div>
							</div>

							<div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-secondary p-4 text-sm text-gray-700 dark:text-gray-300">
								<b>Note:</b> This page provides general information and is not
								legal advice. Consider consulting qualified counsel to tailor
								your terms to your specific offerings and jurisdictions.
							</div>
						</section>
					</div>
				</Container>
			</main>
			<Footer />
		</>
	);
}
