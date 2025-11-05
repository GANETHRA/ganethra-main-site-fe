"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "./container";
import { StarIcon, UserIcon, ClockIcon, TrophyIcon } from "lucide-react";
import { ShineBorder } from "./ui/shine-border";
import { FadeUpMotion, StaggerContainer, StaggerItem } from "./motion";

const CASE_STUDIES = [
	{
		title: "E-commerce Platform Scale-up",
		duration: "6 months",
		client: "MegaMart Online",
		challenge: "Handle 10x traffic during festival sales",
		solution: "Microservices architecture with auto-scaling",
		result: "99.9% uptime during peak traffic, 300% performance improvement",
		technologies: ["React", "Node.js", "AWS", "Docker"],
	},
	{
		title: "Legacy System Modernization",
		duration: "12 months",
		client: "Manufacturing Corp",
		challenge: "Replace 20-year-old ERP system",
		solution: "Phased migration with zero downtime",
		result: "50% cost reduction, 200% faster operations",
		technologies: [".NET Core", "Azure", "SQL Server", "Angular"],
	},
];

const TESTIMONIALS = [
	{
		rating: 5,
		quote:
			"GANETHRA transformed our legacy systems into a modern, scalable architecture. Their POS Analytics increased our revenue insights by 40%.",
		author: {
			name: "Rajesh Kumar",
			title: "CTO, TechStart Solutions",
			avatar: "/api/placeholder/40/40",
		},
	},
	{
		rating: 5,
		quote:
			"The HRMS system streamlined our entire HR process. Payroll time reduced from 3 days to 3 hours. Exceptional support team!",
		author: {
			name: "Priya Sharma",
			title: "Operations Director, RetailMax Chain",
			avatar: "/api/placeholder/40/40",
		},
	},
	{
		rating: 5,
		quote:
			"TaskFlow Pro replaced 3 different tools for us. The custom workflows and reporting features are game-changers for our agile process.",
		author: {
			name: "Amit Patel",
			title: "Founder, StartupHub",
			avatar: "/api/placeholder/40/40",
		},
	},
];

export default function CaseStudies() {
	const reviewsSchema = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Client Reviews and Testimonials",
		description:
			"Real client feedback and success stories from Ganethra IT Services",
		itemListElement: TESTIMONIALS.map((testimonial, index) => ({
			"@type": "Review",
			position: index + 1,
			reviewRating: {
				"@type": "Rating",
				ratingValue: testimonial.rating,
				bestRating: 5,
				worstRating: 1,
			},
			reviewBody: testimonial.quote,
			author: {
				"@type": "Person",
				name: testimonial.author.name,
				jobTitle: testimonial.author.title,
			},
			datePublished: "2024-12-01",
			publisher: {
				"@type": "Organization",
				name: "Ganethra IT Services Pvt. Ltd.",
			},
		})),
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "150",
			bestRating: "5",
			worstRating: "1",
		},
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
			<Container>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(reviewsSchema),
					}}
				/>
				{/* Real Results, Real Impact Section */}
				<header className="text-center mb-16 space-y-4">
					<FadeUpMotion>
						<Badge variant="outline" className="relative text-sm">
							<ShineBorder />
							<TrophyIcon className="mr-1" aria-hidden="true" />
							Success Stories
						</Badge>
					</FadeUpMotion>
					<FadeUpMotion delay={0.1}>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter">
							Real Results, Real Impact
						</h2>
					</FadeUpMotion>
				</header>

				{/* Case Studies Grid */}
				<StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
					{CASE_STUDIES.map((study) => (
						<StaggerItem key={study.title}>
							<article className="hover:shadow-lg transition-shadow">
								<Card>
									<CardHeader>
										<div className="flex justify-between items-start mb-2">
											<CardTitle className="text-xl font-bold">
												{study.title}
											</CardTitle>
											<Badge variant="secondary" className="text-xs">
												<ClockIcon
													className="w-3 h-3 mr-1"
													aria-hidden="true"
												/>
												{study.duration}
											</Badge>
										</div>
										<CardDescription className="text-sm font-medium text-primary">
											{study.client}
										</CardDescription>
									</CardHeader>

									<CardContent className="space-y-4">
										<section>
											<h4 className="text-sm font-semibold mb-1">Challenge</h4>
											<p className="text-sm text-muted-foreground">
												{study.challenge}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-1">Solution</h4>
											<p className="text-sm text-muted-foreground">
												{study.solution}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-1">Result</h4>
											<p className="text-sm font-semibold text-green-600">
												{study.result}
											</p>
										</section>

										<section>
											<h4 className="text-sm font-semibold mb-2">
												Technologies Used
											</h4>
											<div
												className="flex flex-wrap gap-2"
												role="list"
												aria-label="Technologies used in this project"
											>
												{study.technologies.map((tech) => (
													<Badge
														key={tech}
														variant="outline"
														className="text-xs"
														role="listitem"
													>
														{tech}
													</Badge>
												))}
											</div>
										</section>
									</CardContent>
								</Card>
							</article>
						</StaggerItem>
					))}
				</StaggerContainer>

				{/* What Our Clients Say Section */}
				<FadeUpMotion delay={0.2}>
					<header className="text-center mb-12">
						<h2 className="text-xl sm:text-2xl font-bold tracking-tighter">
							What Our Clients Say
						</h2>
					</header>
				</FadeUpMotion>

				{/* Testimonials Grid */}
				<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{TESTIMONIALS.map((testimonial) => (
						<StaggerItem key={testimonial.author.name}>
							<article className="hover:shadow-lg transition-shadow">
								<Card>
									<CardContent className="space-y-4">
										<div
											className="flex items-center gap-1"
											aria-label={`${testimonial.rating} out of 5 stars`}
										>
											{Array.from({ length: testimonial.rating }, (_, i) => (
												<StarIcon
													key={`${testimonial.author.name}-star-${i}`}
													className="w-4 h-4 text-yellow-500 fill-current"
													aria-hidden="true"
												/>
											))}
										</div>

										<blockquote className="text-sm text-muted-foreground leading-relaxed">
											"{testimonial.quote}"
										</blockquote>

										<footer className="flex items-center gap-3">
											<Avatar className="w-10 h-10">
												<AvatarImage
													src={testimonial.author.avatar}
													alt={`${testimonial.author.name} profile picture`}
												/>
												<AvatarFallback>
													<UserIcon className="w-5 h-5" aria-hidden="true" />
												</AvatarFallback>
											</Avatar>
											<div>
												<div className="font-semibold text-sm">
													{testimonial.author.name}
												</div>
												<div className="text-xs text-muted-foreground">
													{testimonial.author.title}
												</div>
											</div>
										</footer>
									</CardContent>
								</Card>
							</article>
						</StaggerItem>
					))}
				</StaggerContainer>
			</Container>
		</section>
	);
}
