import type {BaseLayoutProps} from "fumadocs-ui/layouts/shared";
import {Book, Layout,} from 'lucide-react';
import Image from 'next/image';
import Preview from '@/public/banner.png';
import {buildTr} from "@/lib/i18n-locales";

export function getBaseOptions(lang: string): BaseLayoutProps {
	const $tr = buildTr(lang);
	const $url = (url: string) => `/${lang}${url}`;
	const $docsUrl = (url: string) => $url(`/docs${url}`);
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
				text: $tr("doc"),
				url: $docsUrl("/anydi"),
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
						description: $tr("anydi.desc"),
						text: $tr("anydi"),
						url: $docsUrl("/anydi"),
						active: "nested-url",
					},
					{
						icon: <Layout />,
						text: $tr("anydi.react"),
						description: $tr("anydi.react.desc"),
						url: $docsUrl("/anydi/react"),
						active: "nested-url",
						menu: {
							className: "lg:col-start-2",
						},
					},
					{
						icon: <Layout />,
						text: $tr("any-webpack"),
						description: $tr("any-webpack.desc"),
						url: $docsUrl("/any-webpack"),
						active: "nested-url",
						menu: {
							className: "lg:col-start-2",
						},
					},
					{
						icon: <Layout />,
						text: $tr("elecpack"),
						description: $tr("elecpack.desc"),
						url: $docsUrl("/elecpack"),
						active: "nested-url",
						menu: {
							className: "lg:col-start-3 lg:row-start-1",
						},
					},
					{
						icon: <Layout />,
						text: $tr("elecpack.rpc"),
						description: $tr("elecpack.rpc.desc"),
						url: $docsUrl("/elecpack/rpc"),
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
