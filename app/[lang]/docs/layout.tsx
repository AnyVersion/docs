import type {ReactNode} from "react";
import {source} from "@/lib/source";
import {DocsLayout} from "fumadocs-ui/layouts/docs";
import {getBaseOptions} from "@/app/layout.config";

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
	const { lang } = await params;
	return (
		<DocsLayout {...getBaseOptions(lang)} tree={source.pageTree[lang]}>
			{children}
		</DocsLayout>
	);
}
