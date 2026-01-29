"use client";

import { type Locale, localeMetadata, locales } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { GlobeIcon, XIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { setLocaleCookie } from "./language-switcher";

const HINT_DISMISSED_KEY = "language-hint-dismissed";

export function LanguageHint() {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const [browserLocale, setBrowserLocale] = useState<Locale | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState(true);

	// Detect browser locale on mount
	useEffect(() => {
		// Check if already dismissed
		const dismissed = localStorage.getItem(HINT_DISMISSED_KEY);
		if (dismissed) {
			setIsDismissed(true);
			return;
		}
		setIsDismissed(false);

		// Get browser language
		const browserLang = navigator.language.split("-")[0];

		// Check if it's a supported locale and different from current
		if (locales.includes(browserLang as Locale) && browserLang !== locale) {
			setBrowserLocale(browserLang as Locale);
			// Small delay for better UX
			setTimeout(() => setIsVisible(true), 1000);
		}
	}, [locale]);

	const handleSwitch = () => {
		if (!browserLocale) return;

		// Save preference to cookie (cross-subdomain) and localStorage
		setLocaleCookie(browserLocale);

		// Navigate to the detected locale
		const segments = pathname.split("/");
		segments[1] = browserLocale;
		const newPath = segments.join("/") || `/${browserLocale}`;

		router.push(newPath);
		setIsVisible(false);
	};

	const handleDismiss = () => {
		localStorage.setItem(HINT_DISMISSED_KEY, "true");
		setIsVisible(false);
		setIsDismissed(true);
	};

	if (!browserLocale || !isVisible || isDismissed) {
		return null;
	}

	const suggestedLocale = localeMetadata[browserLocale];

	return (
		<div
			className={cn(
				"fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80",
				"bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700",
				"p-4 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300",
			)}
			role="alert"
			aria-live="polite"
		>
			<div className="flex items-start gap-3">
				<div className="p-2 bg-primary/10 rounded-full">
					<GlobeIcon className="w-5 h-5 text-primary" aria-hidden="true" />
				</div>
				<div className="flex-1">
					<p className="text-sm text-gray-700 dark:text-gray-300">
						This page is available in{" "}
						<span className="font-semibold">
							{suggestedLocale.flag} {suggestedLocale.nativeName}
						</span>
					</p>
					<div className="flex items-center gap-2 mt-3">
						<Button size="sm" onClick={handleSwitch} className="text-xs">
							Switch to {suggestedLocale.nativeName}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							onClick={handleDismiss}
							className="text-xs text-gray-500"
						>
							Dismiss
						</Button>
					</div>
				</div>
				<button
					type="button"
					onClick={handleDismiss}
					className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
					aria-label="Dismiss language suggestion"
				>
					<XIcon className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
}
