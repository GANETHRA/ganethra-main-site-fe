"use client";

import { getStoredLocale } from "@/components/ui/language-switcher";
import { defaultLocale, isValidLocale } from "@/i18n/config";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function RedirectHandler() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const langParam = searchParams.get("lang");

		// Check if ?lang= query param exists and is valid
		if (langParam && isValidLocale(langParam)) {
			router.replace(`/${langParam}`);
			return;
		}

		// Check cookie/localStorage for preferred locale (shared across subdomains)
		const preferredLocale = getStoredLocale();
		if (preferredLocale) {
			router.replace(`/${preferredLocale}`);
			return;
		}

		// Default: redirect to English
		router.replace(`/${defaultLocale}`);
	}, [router, searchParams]);

	return null;
}

export default function RootPage() {
	return (
		<Suspense fallback={null}>
			<RedirectHandler />
		</Suspense>
	);
}
