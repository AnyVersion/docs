import type {I18nProvider} from "fumadocs-ui/i18n";

declare type Props = Parameters<typeof I18nProvider>[0];
declare type Locales = NonNullable<Props["locales"]>;
declare type Translations = NonNullable<Props["translations"]>;

const baseTranslation = {
	doc: "Documentation",
	"any-webpack": "Any Webpack",
	"any-webpack.desc": "Any Webpack is a webpack configuration tool.",
	anydi: "Any DI",
	"anydi.desc": "Any DI is a dependency injection tool.",
	"anydi.react": "Any DI React",
	"anydi.react.desc": "Any DI React is a React integration of Any DI.",
	elecpack: "Elecpack",
	"elecpack.desc": "Elecpack is a Electron framework.",
	"elecpack.rpc": "Elecpack RPC",
	"elecpack.rpc.desc": "Elecpack RPC is a Electron RPC framework.",
};

declare type AppTranslations = typeof baseTranslation;

const translations = {
	en: baseTranslation,
	"zh-CN": {
		doc: "文档",
		"any-webpack": "Any Webpack",
		"any-webpack.desc": "Any Webpack 是一个 webpack 配置工具。",
		anydi: "Any DI",
		"anydi.desc": "Any DI 是一个依赖注入工具。",
		"anydi.react": "Any DI React",
		"anydi.react.desc": "Any DI React 是 Any DI 的 React 集成。",
		elecpack: "Elecpack",
		"elecpack.desc": "Elecpack 是一个 Electron 开发框架。",
		"elecpack.rpc": "Elecpack RPC",
		"elecpack.rpc.desc": "Elecpack RPC 是一个 Electron RPC 框架",
	},
};

declare type Languages = keyof typeof translations;
declare type TranslationKey = keyof AppTranslations;

export function $tr(key: TranslationKey, lang?: Languages | string): string {
	return translations[<Languages>(lang ?? "en")][key as TranslationKey] ?? key;
}
export function buildTr(lang: string | Languages) {
	return (key: TranslationKey) => {
		return $tr(key, lang);
	};
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
