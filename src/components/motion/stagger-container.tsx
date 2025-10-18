"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface StaggerContainerProps {
	children: React.ReactNode;
	staggerDelay?: number;
}

export const StaggerContainer = ({
	children,
	staggerDelay = 0.1,
	...props
}: StaggerContainerProps & HTMLMotionProps<"div">) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
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
