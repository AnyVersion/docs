import { source } from "@/lib/source";
import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { metadataImage } from "@/lib/metadata-image";

export default async function Page(props: {
	params: Promise<{ lang: string; slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug, params.lang);
	if (!page) notFound();

	const MDX = page.data.body;

	return (
		<DocsPage toc={page.data.toc}>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDX components={{ ...defaultMdxComponents }} />
			</DocsBody>
		</DocsPage>
	);
}

export async function generateStaticParams() {
	return source.generateParams();
}

export async function generateMetadata(props: {
	params: Promise<{ lang: string; slug?: string[] }>;
}) {
	const params = await props.params;
	const page = source.getPage(params.slug, params.lang);
	if (!page) notFound();

	return metadataImage.withImage(page.slugs, {
		title: page.data.title,
		description: page.data.description,
	});
}
