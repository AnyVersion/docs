import { source } from "@/lib/source";
import { createI18nSearchAPI } from "fumadocs-core/search/server";
import { i18n } from "@/lib/i18n";
// @ts-expect-error -- untyped
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

export const { GET } = createI18nSearchAPI("advanced", {
	i18n,
	indexes: source.getLanguages().flatMap((entry) =>
		entry.pages.map((page) => ({
			title: page.data.title,
			description: page.data.description,
			structuredData: page.data.structuredData,
			id: page.url,
			url: page.url,
			locale: entry.language,
		})),
	),
	localeMap: {
		"zh-CN": {
			tokenizer: createTokenizer({
				stopWords: mandarinStopwords,
			}),
		},
	},
});
