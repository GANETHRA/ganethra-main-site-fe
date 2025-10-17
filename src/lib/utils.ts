import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const numUtils = {
	formatToUSD: (amount: number, { precision = 2 } = {}) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: precision,
			maximumFractionDigits: precision,
		}).format(amount);
	},
	formatToINR: (amount: number, { precision = 2 } = {}) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			minimumFractionDigits: precision,
			maximumFractionDigits: precision,
		}).format(amount);
	},
	formatToCompact: Intl.NumberFormat("en", { notation: "compact" }).format,
};
