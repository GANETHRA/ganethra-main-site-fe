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

const STATISTICS = [
	{ value: "500+", label: "Projects Delivered", icon: CheckCircleIcon },
	{ value: "150+", label: "Happy Clients", icon: UsersIcon },
	{ value: "50+", label: "Team Members", icon: BuildingIcon },
	{ value: "99.9%", label: "Uptime SLA", icon: ServerIcon },
	{ value: "24/7", label: "Support", icon: ClockIcon },
	{ value: "8+", label: "Years Experience", icon: AwardIcon },
];

const TECHNOLOGIES = [
	{ name: "React", percentage: 95 },
	{ name: "Node.js", percentage: 90 },
	{ name: "Python", percentage: 88 },
	{ name: "AWS", percentage: 92 },
	{ name: ".NET Core", percentage: 85 },
	{ name: "Docker", percentage: 90 },
	{ name: "Kubernetes", percentage: 87 },
	{ name: "MongoDB", percentage: 89 },
];

export default function About() {
	return (
		<section className="py-20">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
					{/* Left Column: About GANETHRA */}
					<div className="space-y-8">
						<div className="space-y-4">
							<Badge variant="outline" className="px-3 py-1">
								<BuildingIcon className="w-4 h-4 mr-1" />
								About GANETHRA
							</Badge>
							<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
								8+ Years of Excellence in IT Innovation
							</h2>
							<p className="text-lg text-muted-foreground leading-relaxed">
								Founded in 2016, GANETHRA IT Services has evolved from a
								boutique consultancy to a full-scale technology partner, serving
								150+ clients across retail, healthcare, finance, and
								manufacturing sectors.
							</p>
						</div>

						{/* Statistics Grid */}
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							{STATISTICS.map((stat) => {
								const IconComponent = stat.icon;
								return (
									<Card
										key={stat.label}
										className="text-center p-4 hover:shadow-md transition-shadow"
									>
										<CardContent className="p-0">
											<div className="w-8 h-8  rounded-full flex items-center justify-center mx-auto mb-2">
												<IconComponent className="size-6 text-muted-foreground" />
											</div>
											<div className="text-2xl font-bold text-primary mb-1">
												{stat.value}
											</div>
											<div className="text-sm text-muted-foreground">
												{stat.label}
											</div>
										</CardContent>
									</Card>
								);
							})}
						</div>

						<div className="flex items-center gap-2">
							<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
								{[1, 2, 3].map((i) => (
									<Avatar key={i} className="size-10">
										<AvatarFallback>
											<UserIcon className="size-6 text-muted-foreground" />
										</AvatarFallback>
									</Avatar>
								))}
							</div>
							<div>
								<h3 className="textsm font-medium">
									Trusted by 150+ companies
								</h3>
								<div className="flex items-center gap-1 text-muted-foreground text-sm">
									<StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
									<span>4.9/5 client satisfaction</span>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-8">
						<div>
							<h3 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-6">
								Technology Expertise
							</h3>

							<div className="space-y-4">
								{TECHNOLOGIES.map((tech) => (
									<div key={tech.name} className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="text-sm font-medium">{tech.name}</span>
											<span className="text-sm text-muted-foreground">
												{tech.percentage}%
											</span>
										</div>
										<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
											<div
												className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
												style={{ width: `${tech.percentage}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Technology Image */}
						<div className="relative">
							<div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
								<Image
									src="/assets/hero3.svg"
									alt="Technology expertise - hands typing on laptop with code in background"
									width={500}
									height={375}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
