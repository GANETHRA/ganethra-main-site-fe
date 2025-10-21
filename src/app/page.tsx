/* eslint-disable react/no-static-element-interactions */
import Hero from "@/components/hero";
import Services from "@/components/services";
import Solutions from "@/components/solutions";
import About from "@/components/about";
import CaseStudies from "@/components/case-studies";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Chatbot } from "@/components/chatbot/chatbot";
import { Bubble } from "@typebot.io/nextjs";

export default function Home() {
	return (
		<>
			<main>
				<section id="hero">
					<Hero />
				</section>
				<section id="services">
					<Services />
				</section>
				<section id="solutions">
					<Solutions />
				</section>
				<section id="about">
					<About />
				</section>
				<section id="case-studies">
					<CaseStudies />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</main>
			<Footer />
			{/* <Chatbot /> */}
			<Bubble
				typebot="ganethra-assistant-5d5b6w1"
				apiHost={process.env.NEXT_PUBLIC_TYPEBOT_HOST}
				theme={{
					button: { backgroundColor: "var(--primary)" },
					chatWindow: {
						backgroundColor: "var(--background)",
					},
				}}
			/>
		</>
	);
}
