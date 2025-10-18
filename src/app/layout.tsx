import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "Ganethra IT",
	description: "Ganethra IT Services Pvt. Ltd.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="antialiased">
				<Navbar />
				<Toaster />
				{children}
			</body>
		</html>
	);
}
