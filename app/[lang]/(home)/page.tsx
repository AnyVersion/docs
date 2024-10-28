import {HomeHeroSelection} from "@/components/ui/home-hero-selection";

export default async function HomePage({
	params,
}: { params: Promise<{ lang: string }> }) {
	const { lang } = await params;
	return <HomeHeroSelection lang={lang} />;
}
