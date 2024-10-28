import type { I18nProvider } from "fumadocs-ui/i18n";

declare type Props = Parameters<typeof I18nProvider>[0];
declare type Locales = NonNullable<Props["locales"]>;
declare type Translations = NonNullable<Props["translations"]>;

const baseTranslation = {
	doc: "Documentation",
	"any-webpack": "Any Webpack",
	"any-webpack.desc": "faster Webpack configuration tool.",
	anydi: "Any DI",
	"anydi.desc": "dependency injection tool.",
	"anydi.react": "Any DI React",
	"anydi.react.desc": "React integration of Any DI.",
	elecpack: "Elecpack",
	"elecpack.desc": "Electron framework.",
	"elecpack.rpc": "Elecpack RPC",
	"elecpack.rpc.desc": "Electron RPC framework.",
	// 利用 x 快速构建 y 应用
	"home.title.1": "Use",
	"home.title.2": "fast build",
	"home.title.3": "your application",
	"home.go-doc": "Go to documentation",
	"home.tech-stack": "Tech Stack",
};

declare type AppTranslations = typeof baseTranslation;

const translations = {
	en: baseTranslation,
	"zh-CN": {
		doc: "文档",
		"any-webpack": "Any Webpack",
		"any-webpack.desc": "快速 Webpack 配置工具。",
		anydi: "Any DI",
		"anydi.desc": "依赖注入实现。",
		"anydi.react": "Any DI React",
		"anydi.react.desc": "Any DI 的 React 集成。",
		elecpack: "Elecpack",
		"elecpack.desc": "Electron 开发框架。",
		"elecpack.rpc": "Elecpack RPC",
		"elecpack.rpc.desc": "Electron RPC 框架",
		"home.title.1": "利用",
		"home.title.2": "快速构建",
		"home.title.3": "应用",
		"home.go-doc": "查看文档",
		"home.tech-stack": "技术栈",
	},
};

declare type Languages = keyof typeof translations;
declare type TranslationKey = keyof AppTranslations;

export function $tr(key: TranslationKey, lang?: Languages | string): string {
	const ts = translations[<Languages>(lang ?? "en")] || translations.en;
	if (key in ts) {
		return ts[key as TranslationKey];
	}
	return key;
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
