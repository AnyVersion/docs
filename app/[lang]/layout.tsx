import "./global.css";
import {RootProvider} from "fumadocs-ui/provider";
import {Inter} from "next/font/google";
import type {PropsWithChildren} from "react";
import {I18nProvider} from "fumadocs-ui/i18n";
import {i18nConfig} from "@/lib/i18n-locales";
import {baseUrl, createMetadata} from "@/lib/metadata";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = createMetadata({
	title: {
		template: "%s | Any Version",
		default: "Home",
	},
	description: "The xx",
	metadataBase: baseUrl,
});

export default async function RootLayout({
	params,
	children,
}: PropsWithChildren<{
	params: Promise<{ lang: string }>;
}>) {
	const { lang } = await params;
	return (
		<html lang={lang} className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<I18nProvider locale={lang} {...i18nConfig(lang)}>
					<RootProvider>{children}</RootProvider>
				</I18nProvider>
			</body>
		</html>
	);
}
