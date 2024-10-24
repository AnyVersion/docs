import type {BaseLayoutProps} from "fumadocs-ui/layouts/shared";
import {Book, Layout,} from 'lucide-react';
import Image from 'next/image';
import Preview from '@/public/banner.png';

export function getBaseOptions(lang: string): BaseLayoutProps {
	return {
		i18n: true,
		githubUrl: "https://github.com/AnyVersion",
		nav: {
			title: "Any Version",
			transparentMode: "top",
		},
		links: [
			{
				type: "menu",
				text: "Documentation",
				url: "/docs/anydi",
				items: [
					{
						menu: {
							banner: (
								<div className="-mx-3 -mt-3">
									<Image
										src={Preview}
										alt="Perview"
										className="rounded-t-lg object-cover"
										style={{
											maskImage:
												"linear-gradient(to bottom,white 60%,transparent)",
										}}
									/>
								</div>
							),
							className: "md:row-span-2",
						},
						icon: <Book />,
						description: "Learn to use Fumadocs on your docs site.",
						text: "Any DI",
						url: "/docs/anydi",
						active: "nested-url",
					},
					{
						icon: <Layout />,
						description: "See the available layouts of Fumadocs UI.",
						text: "Anydi React",
						url: "/docs/anydi/react",
						active: "nested-url",
						menu: {
							className: "lg:col-start-2",
						},
					},
					{
						icon: <Layout />,
						description: "See the available layouts of Fumadocs UI.",
						text: "Any Webpack",
						url: "/docs/any-webpack",
						active: "nested-url",
						menu: {
							className: "lg:col-start-2",
						},
					},
					{
						icon: <Layout />,
						description: "See the available layouts of Fumadocs UI.",
						text: "Elecpack",
						url: "/docs/elecpack",
						active: "nested-url",
						menu: {
							className: "lg:col-start-3 lg:row-start-1",
						},
					},
					{
						icon: <Layout />,
						description: "See the available layouts of Fumadocs UI.",
						text: "Elecpack RPC",
						url: "/docs/elecpack/rpc",
						active: "nested-url",
						menu: {
							className: "lg:col-start-3",
						},
					},
				],
			},
		],
	};
}
