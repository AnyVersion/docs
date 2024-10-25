import type {ReactNode} from "react";
import {source} from "@/lib/source";
import {DocsLayout} from "fumadocs-ui/layouts/docs";
import {getBaseOptions} from "@/app/layout.config";
import {Slot} from "@radix-ui/react-slot";

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
	const { lang } = await params;
	return (
		<DocsLayout
			{...getBaseOptions(lang)}
			tree={source.pageTree[lang]}
			sidebar={{
				tabs: {
					transform(option, node) {
						const meta = source.getNodeMeta(node);
						if (!meta) return option;

						return {
							...option,
							icon: (
								<Slot
									className="mb-auto bg-gradient-to-t from-fd-background/80 p-1 [&_svg]:size-5"
									style={{
										color: `hsl(var(--${meta.file.dirname}-color))`,
										backgroundColor: `hsl(var(--${meta.file.dirname}-color)/.3)`,
									}}
								>
									{node.icon}
								</Slot>
							),
						};
					},
				},
			}}
		>
			{children}
		</DocsLayout>
	);
}
