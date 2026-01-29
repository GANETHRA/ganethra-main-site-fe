"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "./container";
import {
	BuildingIcon,
	StarIcon,
	UsersIcon,
	CheckCircleIcon,
	ClockIcon,
	AwardIcon,
	ServerIcon,
	UserIcon,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { TechnologyItem } from "./ui/technology-item";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { ShineBorder } from "./ui/shine-border";

const STATISTICS = [
	{ value: "500+", label: "Projects Delivered", icon: CheckCircleIcon },
	{ value: "150+", label: "Happy Clients", icon: UsersIcon },
	{ value: "50+", label: "Team Members", icon: BuildingIcon },
	{ value: "99.9%", label: "Uptime SLA", icon: ServerIcon },
	{ value: "24/7", label: "Support", icon: ClockIcon },
	{ value: "8+", label: "Years Experience", icon: AwardIcon },
];

const TECHNOLOGIES = [
	{
		name: "React",
		service: "Frontend Development",
		iconUrl: "https://api.iconify.design/logos:react.svg",
	},
	{
		name: "Node.js",
		service: "Backend Development",
		iconUrl: "https://api.iconify.design/logos:nodejs-icon.svg",
	},
	{
		name: "Python",
		service: "Data Science & AI",
		iconUrl: "https://api.iconify.design/logos:python.svg",
	},
	{
		name: "TypeScript",
		service: "Type-Safe Development",
		iconUrl: "https://api.iconify.design/logos:typescript-icon.svg",
	},
	{
		name: "AWS",
		service: "Cloud Infrastructure",
		iconUrl: "https://api.iconify.design/logos:aws.svg",
	},
	{
		name: ".NET Core",
		service: "Enterprise Applications",
		iconUrl: "https://api.iconify.design/logos:dotnet.svg",
	},
	{
		name: "Docker",
		service: "Containerization",
		iconUrl: "https://api.iconify.design/logos:docker-icon.svg",
	},
	{
		name: "Kubernetes",
		service: "Orchestration",
		iconUrl: "https://api.iconify.design/logos:kubernetes.svg",
	},

	{
		name: "MongoDB",
		service: "Database Management",
		iconUrl: "https://api.iconify.design/logos:mongodb-icon.svg",
	},
	{
		name: "PostgreSQL",
		service: "Relational Database",
		iconUrl: "https://api.iconify.design/logos:postgresql.svg",
	},
	{
		name: "SQL Server",
		service: "Database Management",
		iconUrl: "https://api.iconify.design/devicon:microsoftsqlserver.svg",
	},
	{
		name: "Redis",
		service: "Caching & Sessions",
		iconUrl: "https://api.iconify.design/logos:redis.svg",
	},
];

export default function About() {
	return (
		<section className="py-20">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					<article className="space-y-8 mt-12">
						<header className="space-y-4">
							<FadeUpMotion>
								<Badge variant="outline" className="relative px-3 py-1">
									<ShineBorder />
									<BuildingIcon className="w-4 h-4 mr-1" aria-hidden="true" />
									About GANETHRA
								</Badge>
							</FadeUpMotion>
							<FadeUpMotion delay={0.1}>
								<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
									8+ Years of Excellence in IT Innovation
								</h2>
							</FadeUpMotion>
							<FadeUpMotion delay={0.2}>
								<p className="text-lg text-muted-foreground leading-relaxed">
									Founded in 2016, GANETHRA IT Services has evolved from a
									boutique consultancy to a full-scale technology partner,
									serving 150+ clients across retail, healthcare, finance, and
									manufacturing sectors. Based in Hyderabad, India, we deliver
									enterprise-grade IT solutions globally.
								</p>
							</FadeUpMotion>
						</header>

						<aside aria-label="Company achievements and statistics">
							<StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4">
								{STATISTICS.map((stat) => {
									const IconComponent = stat.icon;
									return (
										<StaggerItem key={stat.label}>
											<Card className="text-center p-4 hover:shadow-md transition-shadow">
												<CardContent className="p-0">
													<div className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
														<IconComponent
															className="size-6 text-muted-foreground"
															aria-hidden="true"
														/>
													</div>
													<div className="text-2xl font-bold text-primary mb-1">
														{stat.value}
													</div>
													<div className="text-sm text-muted-foreground">
														{stat.label}
													</div>
												</CardContent>
											</Card>
										</StaggerItem>
									);
								})}
							</StaggerContainer>
						</aside>

						<FadeUpMotion delay={0.3}>
							<div className="flex items-center gap-2">
								<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
									{[1, 2, 3].map((i) => (
										<Avatar key={i} className="size-10">
											<AvatarFallback>
												<UserIcon
													className="size-6 text-muted-foreground"
													aria-hidden="true"
												/>
											</AvatarFallback>
										</Avatar>
									))}
								</div>
								<div>
									<h3 className="text-sm font-medium">
										Trusted by 150+ companies worldwide
									</h3>
									<div className="flex items-center gap-1 text-muted-foreground text-sm">
										<StarIcon
											className="w-4 h-4 text-yellow-500 fill-current"
											aria-hidden="true"
										/>
										<span>4.9/5 client satisfaction rating</span>
									</div>
								</div>
							</div>
						</FadeUpMotion>
					</article>

					<aside className="space-y-8">
						<section aria-label="Technology stack and expertise areas">
							<FadeUpMotion>
								<h3 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6">
									Technology Expertise
								</h3>
							</FadeUpMotion>

							<StaggerContainer
								className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
								staggerDelay={0.05}
							>
								{TECHNOLOGIES.map((tech) => (
									<StaggerItem key={tech.name}>
										<TechnologyItem
											name={tech.name}
											service={tech.service}
											iconUrl={tech.iconUrl}
										/>
									</StaggerItem>
								))}
							</StaggerContainer>
						</section>

						<FadeUpMotion delay={0.2}>
							<div className="relative">
								<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
									<Image
										src="/assets/hero3.svg"
										alt="Technology stack expertise - developers working with React, Node.js, Python and cloud platforms at Ganethra IT Services Hyderabad office"
										width={500}
										height={375}
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>
						</FadeUpMotion>
					</aside>
				</div>
			</Container>
		</section>
	);
}
