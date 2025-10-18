"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Animation variants for DRY code
const fadeUpVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

interface FadeUpMotionProps {
	children: React.ReactNode;
	delay?: number;
}

export const FadeUpMotion = ({
	children,
	delay = 0,
	...props
}: FadeUpMotionProps & HTMLMotionProps<"div">) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={fadeUpVariants}
		transition={{ duration: 0.6, delay }}
		{...props}
	>
		{children}
	</motion.div>
);
