import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	// Generate /en/index.html instead of /en.html for clean URLs on static hosts
	trailingSlash: true,
};

export default withNextIntl(nextConfig);
