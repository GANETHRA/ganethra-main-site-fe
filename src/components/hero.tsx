"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, PlayIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import Container from "./container";

export default function Hero() {
	return (
		<Container className="py-20">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<div className="space-y-6">
					<div className="flex items-center gap-2">
						<Badge variant="outline" className="px-3 py-1 text-sm font-medium">
							<ZapIcon className="w-4 h-4 mr-1" />
							IT Services & SaaS Solutions
						</Badge>
					</div>

					<header>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
							Transform Your Business with{" "}
							<span className="text-primary">Modern Tech</span>
						</h1>
					</header>

					<p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
						From legacy system modernization to cutting-edge SaaS products. We
						deliver scalable solutions that drive growth and efficiency for 500+
						companies worldwide.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<Button size="lg" className="gap-4">
							Start Free Trial
							<ArrowRightIcon className="w-5 h-5" />
						</Button>
						<Button variant="outline" size="lg" className="gap-4">
							<PlayIcon className="w-5 h-5" />
							View Products
						</Button>
					</div>

					{/* Statistics */}
					<ul className="grid grid-cols-3 gap-8 pt-8 text-center">
						<li>
							<div className="text-3xl sm:text-4xl font-bold">500+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Projects Delivered
							</div>
						</li>
						<li>
							<div className="text-3xl sm:text-4xl font-bold ">150+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Happy Clients
							</div>
						</li>
						<li>
							<div className="text-3xl sm:text-4xl font-bold ">50+</div>
							<div className="text-sm text-muted-foreground mt-1">
								Team Members
							</div>
						</li>
					</ul>
				</div>

				<div className="space-y-6">
					{/* Main Visual */}
					<div className="relative">
						{/* <div className="aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"> */}
						<Image
							src="/assets/hero2.svg"
							alt="Modern office workspace showing team collaboration"
							width={500}
							height={600}
							className="w-full h-full object-cover"
							priority
						/>
						{/* </div> */}
					</div>

					{/* Live Activity Card */}
					<Card className="shadow-lg">
						<CardHeader className="pb-3">
							<CardTitle className="flex items-center gap-2 text-lg">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
								Live Activity
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									POS Analytics processed
								</span>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">
									2.3M transactions
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									TaskFlow managed
								</span>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">
									45K tasks today
								</span>
							</div>
							<div className="flex justify-between items-center">
								<span className="text-sm text-gray-600 dark:text-gray-400">
									HRMax processed
								</span>
								<span className="text-sm font-semibold text-gray-900 dark:text-white">
									12K payroll entries
								</span>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</Container>
	);
}
