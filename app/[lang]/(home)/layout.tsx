import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { getBaseOptions } from "@/app/layout.config";

export default async function Layout({
	children,
	params,
}: { children: ReactNode; params: Promise<{ lang: string }> }) {
	const { lang } = await params;
	return <HomeLayout {...getBaseOptions(lang)}>{children}</HomeLayout>;
}
