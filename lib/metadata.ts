import type { Metadata } from "next/types";
import * as process from "node:process";

export function createMetadata(override: Metadata): Metadata {
	return {
		...override,
		openGraph: {
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			url: "https://fumadocs.vercel.app",
			images: "/banner.png",
			siteName: "Fumadocs",
			...override.openGraph,
		},
		twitter: {
			card: "summary_large_image",
			creator: "@money_is_shark",
			title: override.title ?? undefined,
			description: override.description ?? undefined,
			images: "/banner.png",
			...override.twitter,
		},
	};
}

export const baseUrl =
	process.env.NODE_ENV === "development" || !process.env.ZEABUR_WEB_URL
		? new URL("http://localhost:3000")
		: new URL(process.env.ZEABUR_WEB_URL);
