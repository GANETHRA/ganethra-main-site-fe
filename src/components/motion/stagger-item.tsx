"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Animation variants for staggered items
const staggerItemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

interface StaggerItemProps {
	children: React.ReactNode;
}

export const StaggerItem = ({
	children,
	...props
}: StaggerItemProps & HTMLMotionProps<"div">) => (
	<motion.div variants={staggerItemVariants} {...props}>
		{children}
	</motion.div>
);
