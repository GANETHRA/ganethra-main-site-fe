"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface TechnologyItemProps {
	name: string;
	service: string;
	iconUrl: string;
	className?: string;
}

export function TechnologyItem({
	name,
	service,
	iconUrl,
	className,
}: TechnologyItemProps) {
	return (
		<div
			className={cn(
				"group flex flex-col items-center p-2 rounded-lg border hover:shadow-md transition-all duration-300 hover:border-primary/20",
				className,
			)}
		>
			<div className="w-12 h-12 mb-2 flex items-center justify-center">
				<Image
					src={iconUrl}
					alt={`${name} icon`}
					width={32}
					height={32}
					className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
				/>
			</div>
			<h4 className="font-semibold text-sm text-center mb-1">{name}</h4>
			<p className="text-xs text-muted-foreground text-center">{service}</p>
		</div>
	);
}
