"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import Container from "./container";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
	{
		href: "#services",
		name: "Services",
	},
	{
		href: "#solutions",
		name: "Products",
	},
	{
		href: "#about",
		name: "About",
	},
	{
		href: "#case-studies",
		name: "Case Studies",
	},
	{
		href: "#contact",
		name: "Contact",
	},
];

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const headerRef = useRef<HTMLHeadingElement>(null);
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
			className="transition-colors duration-300 sticky top-0 z-50 mt-4"
		>
			<nav
				className="group w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
				data-state={isMobileMenuOpen ? "active" : "inactive"}
			>
				<Container>
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0">
						<div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
							<a href="/" aria-label="logo" className="flex items-center gap-2">
								{/* <Logo className="rounded-md w-8 fill-[var(--logo-bg)]" /> */}
								<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
									<span className="text-white font-black text-2xl">G</span>
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
									aria-label="Toggle mobile menu"
								>
									{isMobileMenuOpen ? (
										<XIcon className="w-4 h-4" />
									) : (
										<MenuIcon className="w-4 h-4" />
									)}
								</Button>
							</div>
						</div>
						<div
							aria-hidden="true"
							className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 dark:bg-gray-950/70 lg:hidden"
						></div>
						<div className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl bg-white p-8 opacity-0 transition-all duration-300 dark:bg-gray-800 lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:group-data-[state=active]:translate-y-0">
							<div className="w-full lg:w-auto lg:pr-4 lg:pt-0">
								<div className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
									{NAV_LINKS.map((link) => (
										<button
											key={link.href}
											type="button"
											onClick={() => handleSmoothScroll(link.href)}
											className={cn(
												"block transition-colors duration-300 md:px-4 rounded-md py-2 text-sm font-medium text-left",
												activeSection === link.href
													? "text-white bg-primary "
													: "hover:text-foreground",
											)}
										>
											<span>{link.name}</span>
										</button>
									))}
								</div>
							</div>

							<div className="mt-6 lg:mt-0">
								<Link href="https://iam.ganethra.com" onClick={closeMobileMenu}>
									<Button className="w-full lg:w-auto">
										Login <ArrowRightIcon />
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
