"use client";
import Container from "./container";
import { ShieldIcon, DotIcon } from "lucide-react";

const SERVICES = [
	"Custom Software Development",
	"Cloud Migration & Architecture",
	"Data Engineering & Analytics",
	"Cybersecurity Solutions",
	"Digital Transformation",
	"DevOps & Infrastructure",
];

const SAAS_PRODUCTS = [
	"POS Analytics Pro",
	"TaskFlow Pro",
	"HRMax Suite",
	"SalesForce+",
	"KnowledgeHub",
];

const COMPANY_LINKS = [
	"About Us",
	"Careers",
	"Case Studies",
	"Blog",
	"Privacy Policy",
	"Terms of Service",
];

export default function Footer() {
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
								Transforming businesses through innovative technology solutions
								and cutting-edge SaaS products since 2016. Leading IT services
								company in Hyderabad, India.
							</p>

							<div className="flex items-center gap-2">
								<ShieldIcon
									className="w-4 h-4 text-green-600"
									aria-hidden="true"
								/>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									ISO 27001 Certified
								</span>
							</div>
						</section>

						{/* Services */}
						<section className="space-y-4">
							<h3 className="font-bold text-gray-900 dark:text-white">
								IT Services in Hyderabad
							</h3>
							<nav aria-label="IT services navigation">
								<ul className="space-y-2" role="list">
									{SERVICES.map((service) => (
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
								SaaS Solutions
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
								Company
							</h3>
							<nav aria-label="Company information navigation">
								<ul className="space-y-2" role="list">
									{COMPANY_LINKS.map((link) => (
										<li key={link} role="listitem">
											<a
												href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
												className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
												aria-label={`View ${link} information`}
											>
												{link}
											</a>
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
							© {new Date().getFullYear()} GANETHRA IT Services Pvt. Ltd. All
							rights reserved.
						</div>
						<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
							<span>Made in India</span>
							<DotIcon className="w-4 h-4" aria-hidden="true" />
							<span>Serving Globally</span>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
}
