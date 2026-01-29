import { cn } from "@/lib/utils";

export default function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("max-w-screen-2xl mx-auto px-6 md:px-12", className)}>
			{children}
		</div>
	);
}
