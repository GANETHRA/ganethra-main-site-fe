import Navbar from "@/components/navbar";
import { LanguageHint } from "@/components/ui/language-hint";
import { type Locale, localeMetadata, locales } from "@/i18n/config";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "react-hot-toast";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;

	// Validate locale
	if (!locales.includes(locale as Locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	// Load messages for this locale
	const messages = await getMessages();

	const metadata = localeMetadata[locale as Locale];

	return (
		<div dir={metadata.dir}>
			<NextIntlClientProvider messages={messages}>
				<Navbar />
				<Toaster />
				{children}
				<LanguageHint />
			</NextIntlClientProvider>
		</div>
	);
}
