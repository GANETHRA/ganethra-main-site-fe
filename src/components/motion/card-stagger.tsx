"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface CardStaggerContainerProps {
	children: React.ReactNode;
	staggerDelay?: number;
}

export const CardStaggerContainer = ({
	children,
	staggerDelay = 0.1,
	...props
}: CardStaggerContainerProps & HTMLMotionProps<"div">) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.1 }}
		variants={{
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: { staggerChildren: staggerDelay },
			},
		}}
		{...props}
	>
		{children}
	</motion.div>
);
