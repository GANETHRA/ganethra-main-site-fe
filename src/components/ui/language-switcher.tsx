"use client";

import { type Locale, localeMetadata, locales } from "@/i18n/config";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./select";

// Cookie name for cross-subdomain locale sharing
const LOCALE_COOKIE_NAME = "preferred-locale";

/**
 * Sets a cookie that's accessible across all subdomains
 * @param locale - The locale to store
 */
export function setLocaleCookie(locale: Locale) {
	// Get the root domain (e.g., "ganethra.com" from "www.ganethra.com")
	const hostname = window.location.hostname;
	const parts = hostname.split(".");
	// For localhost, don't set domain; for production, use root domain
	const domain =
		parts.length >= 2
			? `.${parts.slice(-2).join(".")}` // e.g., ".ganethra.com"
			: undefined;

	// Set cookie with 1 year expiry, accessible across subdomains
	const expires = new Date();
	expires.setFullYear(expires.getFullYear() + 1);

	let cookieString = `${LOCALE_COOKIE_NAME}=${locale}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
	if (domain && !hostname.includes("localhost")) {
		cookieString += `; domain=${domain}`;
	}

	document.cookie = cookieString;

	// Also keep localStorage as fallback
	localStorage.setItem("preferred-locale", locale);
}

/**
 * Gets the locale from cookie (or localStorage as fallback)
 */
export function getStoredLocale(): Locale | null {
	// Try cookie first
	const cookies = document.cookie.split(";");
	for (const cookie of cookies) {
		const [name, value] = cookie.trim().split("=");
		if (name === LOCALE_COOKIE_NAME && locales.includes(value as Locale)) {
			return value as Locale;
		}
	}

	// Fallback to localStorage
	const stored = localStorage.getItem("preferred-locale");
	if (stored && locales.includes(stored as Locale)) {
		return stored as Locale;
	}

	return null;
}

export function LanguageSwitcher() {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();

	const currentLocale = localeMetadata[locale];

	const handleLocaleChange = (newLocale: string) => {
		const validLocale = newLocale as Locale;

		// Save preference to cookie (cross-subdomain) and localStorage
		setLocaleCookie(validLocale);

		// Replace the locale segment in the pathname
		const segments = pathname.split("/");
		segments[1] = validLocale;
		const newPath = segments.join("/") || `/${validLocale}`;

		router.push(newPath);
	};

	return (
		<Select value={locale} onValueChange={handleLocaleChange}>
			<SelectTrigger
				size="sm"
				className="gap-2 border-none shadow-none bg-transparent hover:bg-muted"
				aria-label="Select language"
			>
				<GlobeIcon className="w-4 h-4" aria-hidden="true" />
				<SelectValue>
					<span className="hidden sm:inline">{currentLocale.flag}</span>
					<span className="hidden lg:inline">{currentLocale.nativeName}</span>
				</SelectValue>
			</SelectTrigger>
			<SelectContent align="end">
				{locales.map((loc) => {
					const meta = localeMetadata[loc];
					return (
						<SelectItem key={loc} value={loc}>
							<span className="text-lg mr-2">{meta.flag}</span>
							<span>{meta.nativeName}</span>
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
}
