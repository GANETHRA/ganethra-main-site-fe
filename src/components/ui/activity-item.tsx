"use client";

import { cn } from "@/lib/utils";

interface ActivityItemProps {
	product: string;
	action: string;
	className?: string;
}

export function ActivityItem({
	product,
	action,
	className,
}: ActivityItemProps) {
	return (
		<div
			className={cn(
				"flex items-center border rounded-full text-sm whitespace-nowrap",
				className,
			)}
		>
			<span className="font-medium bg-primary rounded-full px-4 py-1.5 text-primary-foreground">
				{product}
			</span>
			<span className="text-primary pl-3 pr-4 py-1.5">{action}</span>
		</div>
	);
}
