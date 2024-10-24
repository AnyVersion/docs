import type {I18nProvider} from "fumadocs-ui/i18n";

declare type Props = Parameters<typeof I18nProvider>[0];
declare type Locales = NonNullable<Props["locales"]>;
declare type Translations = NonNullable<Props["translations"]>;

declare type AppTranslations = {
	"any-webpack": string;
	anydi: string;
	elecpack: string;
};

const translations: Record<string, AppTranslations> = {
	"zh-CN": {
		"any-webpack": "Any Webpack",
		anydi: "Any DI",
		elecpack: "Elecpack",
	},
	en: {
		"any-webpack": "Any Webpack",
		anydi: "Any DI",
		elecpack: "Elecpack",
	},
};

declare type Languages = keyof typeof translations;
declare type TranslationKey = keyof AppTranslations;

export function $tr(key: TranslationKey, lang?: Languages): string {
	return translations[lang ?? "en"][key as TranslationKey] ?? key;
}

export function i18nConfig(lang: string): {
	locales: Locales;
	translations: Translations | undefined;
} {
	return {
		locales: [
			{
				name: "English",
				locale: "en",
			},
			{
				name: "简体中文",
				locale: "zh-CN",
			},
		],
		translations: {
			"zh-CN": {
				toc: "目录",
				search: "搜索文档",
				lastUpdate: "最后更新于",
				searchNoResult: "没有结果",
				previousPage: "上一页",
				nextPage: "下一页",
				chooseLanguage: "请选择语言",
			},
		}[lang],
	};
}
