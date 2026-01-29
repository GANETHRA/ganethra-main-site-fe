"use client";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { usePlausible } from "next-plausible";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "./container";
import { Button } from "./ui/button";

const NAV_LINKS = [
	{
		href: "#services",
		name: "Services",
		description:
			"IT Services in Hyderabad - Custom Software Development, Cloud Migration, DevOps",
	},
	{
		href: "#solutions",
		name: "Products",
		description:
			"SaaS Solutions - POS Analytics, TaskFlow Pro, HRMax Suite, SalesForce+, KnowledgeHub",
	},
	{
		href: "#about",
		name: "About",
		description:
			"About Ganethra IT Services - 8+ Years Excellence in IT Innovation",
	},
	{
		href: "#case-studies",
		name: "Case Studies",
		description: "Success Stories - Real Results and Client Testimonials",
	},
	{
		href: "#contact",
		name: "Contact",
		description: "Contact Us - Get Free IT Consultation and Project Quote",
	},
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const headerRef = useRef<HTMLHeadingElement>(null);
	const plausible = usePlausible();
	// Close mobile menu when clicking outside or on escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	// Scroll spy effect to detect active section
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100; // Offset for navbar height

			// Check each section
			for (const link of NAV_LINKS) {
				const sectionId = link.href.substring(1); // Remove #
				const section = document.getElementById(sectionId);

				if (section) {
					const sectionTop = section.offsetTop;
					const sectionBottom = sectionTop + section.offsetHeight;

					if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
						setActiveSection(link.href);
						break;
					}
				}
			}

			// Handle navbar background on scroll
			const classes = [
				"bg-white/90",
				"border-b",
				"dark:bg-gray-950/90",
				"backdrop-blur-md",
				"shadow-sm",
			];
			if (window.scrollY > 20) {
				headerRef.current?.classList.add(...classes);
			} else {
				headerRef.current?.classList.remove(...classes);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleSmoothScroll = (href: string) => {
		const targetId = href.substring(1); // Remove #
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			// Track navigation clicks
			plausible("Navigation Click", {
				props: { section: targetId },
			});

			// Focus management for accessibility
			targetElement.focus({ preventScroll: true });

			window.scrollTo({
				top: targetElement.offsetTop - 10,
				behavior: "smooth",
			});
		}

		setIsMobileMenuOpen(false);
	};
	return (
		<header
			ref={headerRef}
			className={cn(
				"transition-colors duration-300 sticky top-0 z-50 mt-4 lg:mt-8",
				isMobileMenuOpen && "backdrop-blur-none",
			)}
			role="banner"
		>
			<nav
				className="group w-full"
				data-state={isMobileMenuOpen ? "active" : "inactive"}
				role="navigation"
				aria-label="Main navigation"
			>
				<Container>
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0">
						<div className="relative z-20 flex w-full justify-between items-center md:px-0 lg:w-fit">
							<a
								href="/"
								aria-label="Ganethra IT Services - Leading IT services company in Hyderabad, India"
								className="flex items-center gap-2"
								title="Ganethra IT Services - Custom Software Development & SaaS Solutions"
							>
								{/* <Logo className="rounded-md w-8 fill-[var(--logo-bg)]" /> */}
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
									<span
										className="text-white font-black text-2xl"
										aria-hidden="true"
									>
										G
									</span>
								</div>
								<div className="flex flex-col ">
									<span className="text-xl font-bold tracking-tighter">
										Ganethra IT
									</span>
									<span className="text-sm text-muted-foreground">
										Services Pvt. Ltd.
									</span>
								</div>
							</a>

							<div className="relative flex max-h-10 items-center lg:hidden">
								<Button
									variant="ghost"
									size="icon"
									onClick={toggleMobileMenu}
									aria-label={
										isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
									}
									aria-expanded={isMobileMenuOpen}
									aria-controls="mobile-menu"
								>
									{isMobileMenuOpen ? (
										<XIcon className="w-4 h-4" aria-hidden="true" />
									) : (
										<MenuIcon className="w-4 h-4" aria-hidden="true" />
									)}
								</Button>
							</div>
						</div>
						<div
							aria-hidden="true"
							className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/20 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 dark:bg-gray-950/20 lg:hidden"
						></div>
						<div
							id="mobile-menu"
							className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl bg-white p-8 opacity-0 transition-all duration-300 dark:bg-gray-800 lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:group-data-[state=active]:translate-y-0"
							aria-hidden={!isMobileMenuOpen}
						>
							<div className="w-full lg:w-auto lg:pr-4 lg:pt-0">
								<ul
									className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
									role="menubar"
								>
									{NAV_LINKS.map((link) => (
										<li key={link.href} role="none">
											<button
												type="button"
												onClick={() => handleSmoothScroll(link.href)}
												className={cn(
													"overflow-hidden block transition-all px-4 py-2 rounded-md text-sm text-left lg:hover:bg-muted w-full lg:w-fit",
													activeSection === link.href &&
														"bg-primary text-white font-medium md:bg-transparent md:text-primary",
												)}
												aria-label={link.description}
												title={link.description}
												aria-current={
													activeSection === link.href ? "page" : undefined
												}
												role="menuitem"
											>
												<span>{link.name}</span>
												<div
													className={cn(
														"w-full h-px bg-primary",
														"transition-transform duration-300",
														activeSection === link.href
															? "scale-x-100"
															: "scale-x-0",
													)}
													aria-hidden="true"
												/>
											</button>
										</li>
									))}
								</ul>
							</div>

							<div className="mt-6 lg:mt-0">
								<Link
									href="https://iam.ganethra.com"
									aria-label="Login to Ganethra IT Services portal"
									title="Access client portal and project management tools"
									onClick={() => {
										plausible("Login Click", {
											props: { button: "Login" },
										});
										closeMobileMenu();
									}}
								>
									<Button className="w-full lg:w-auto">
										Login{" "}
										<ArrowRightIcon
											className="w-4 h-4 ml-1"
											aria-hidden="true"
										/>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</Container>
			</nav>
		</header>
	);
}
