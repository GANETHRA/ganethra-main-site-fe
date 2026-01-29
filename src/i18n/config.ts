export const locales = [
	"en",
	"es",
	"ar",
	"ja",
	"de",
	"fr",
	"pt",
	"hi",
	"zh",
	"ko",
] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMetadata: Record<
	Locale,
	{ name: string; nativeName: string; flag: string; dir: "ltr" | "rtl" }
> = {
	en: { name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
	es: { name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
	ar: { name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl" },
	ja: { name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr" },
	de: { name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr" },
	fr: { name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
	pt: { name: "Portuguese", nativeName: "Português", flag: "🇧🇷", dir: "ltr" },
	hi: { name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr" },
	zh: { name: "Chinese", nativeName: "中文", flag: "🇨🇳", dir: "ltr" },
	ko: { name: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr" },
};

export function isValidLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}
