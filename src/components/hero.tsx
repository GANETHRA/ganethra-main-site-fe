"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, PlayIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Container from "./container";
import Marquee from "@/components/ui/marquee";
import { ActivityItem } from "@/components/ui/activity-item";
import { ShineBorder } from "./ui/shine-border";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";
import { AuroraText } from "./ui/aurora-text";

export default function Hero() {
	return (
		<Container className="py-20 center">
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
				<div className="space-y-6 text-center lg:text-left">
					<FadeUpMotion>
						<div className="mx-auto lg:mx-0">
							<Badge
								variant="outline"
								className="relative px-3 py-1 text-sm font-medium"
							>
								<ShineBorder />
								<ZapIcon className="w-4 h-4 mr-1" />
								IT Services & SaaS Solutions
							</Badge>
						</div>
					</FadeUpMotion>

					<FadeUpMotion delay={0.1}>
						<header>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
								Transform Your Business with{" "}
								<AuroraText>Modern Tech</AuroraText>
							</h1>
						</header>
					</FadeUpMotion>

					<FadeUpMotion delay={0.2}>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
							From legacy system modernization to cutting-edge SaaS products. We
							deliver scalable solutions that drive growth and efficiency for
							500+ companies worldwide.
						</p>
					</FadeUpMotion>

					{/* CTA Buttons */}
					<FadeUpMotion delay={0.3}>
						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
							<Button size="lg" className="gap-4">
								Start Free Trial
								<ArrowRightIcon className="w-5 h-5" />
							</Button>
							<Button variant="outline" size="lg" className="gap-4">
								<PlayIcon className="w-5 h-5" />
								View Products
							</Button>
						</div>
					</FadeUpMotion>

					{/* Statistics */}
					<StaggerContainer className="grid grid-cols-3 divide-x lg:pt-12 pt-8 text-center">
						<StaggerItem>
							<div className="text-3xl sm:text-4xl font-bold">500+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Projects Delivered
							</div>
						</StaggerItem>
						<StaggerItem>
							<div className="text-3xl sm:text-4xl font-bold">150+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Happy Clients
							</div>
						</StaggerItem>
						<StaggerItem>
							<div className="text-3xl sm:text-4xl font-bold">50+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Team Members
							</div>
						</StaggerItem>
					</StaggerContainer>
				</div>

				<div className="h-full flex flex-col justify-between gp-6">
					<FadeUpMotion delay={0.2} className="flex-1 center-y">
						<Image
							src="/assets/hero2.svg"
							alt="Modern office workspace showing team collaboration"
							width={500}
							height={600}
							className="w-full h-full object-contain"
							priority
						/>
					</FadeUpMotion>
					<FadeUpMotion delay={0.3}>
						<h2 className="flex items-center text-sm font-bold text-muted-foreground gap-2 shrink-0">
							<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
							Live Activity
						</h2>
						<div className="flex-1 overflow-hidden relative">
							<div className="absolute z-10 left-0 h-full bg-gradient-to-r from-background to-transparent w-8" />
							<div className="absolute z-10 right-0 h-full bg-gradient-to-l from-background to-transparent w-8" />

							<Marquee pauseOnHover className="[--duration:20s]">
								<ActivityItem
									product="POS Analytics"
									action="processed 2.3M transactions"
								/>
								<ActivityItem
									product="TaskFlow"
									action="managed 45K tasks today"
								/>
								<ActivityItem
									product="HRMax"
									action="processed 12K payroll entries"
								/>
								<ActivityItem
									product="SalesForce+"
									action="closed 156 deals today"
								/>
								<ActivityItem
									product="KnowledgeHub"
									action="served 89K queries"
								/>
							</Marquee>
						</div>
					</FadeUpMotion>
				</div>
			</div>
		</Container>
	);
}
