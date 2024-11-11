import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import type { Options } from "@storybook/types";
import type { Options as SwcOptions } from "@swc/core";
import { includeDocs, includeChromatic } from "./env.ts";
import { swcConfig as SwcBuildConfig } from "./swc.build.ts";
import { swcConfig as SwcDevConfig } from "./swc.dev.ts";

// We sometimes need to disable the lazyCompilation to properly run the test runner on stories
const isLazyCompilation = !(process.env.STORYBOOK_NO_LAZY === "true");

let stories: string[] = [];

if (includeDocs) {
    stories = [
        "../docs/**/!(*.stories).mdx",
        "../docs/**/*.stories.tsx",
        "../packages/**/docs/*.mdx",
        "../packages/**/docs/*.stories.tsx"
    ];
}

if (includeChromatic) {
    stories = [
        ...stories,
        "../packages/components/**/tests/chromatic/**/*.stories.tsx"
    ];
}

const storybookConfig: StorybookConfig = {
    stories: stories,
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-webpack5-compiler-swc",
        "@chromatic-com/storybook"
    ],
    framework: "@storybook/react-webpack5",
    core: {
        builder: {
            name: "@storybook/builder-webpack5",
            options: {
                lazyCompilation: isLazyCompilation
            }
        }
    },
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            skipChildrenPropWithoutDoc: false,
            shouldExtractLiteralValuesFromEnum: true,
            shouldExtractValuesFromUnion: true,
            shouldRemoveUndefinedFromOptional: true,
            exclude: ["node_modules"],
            propFilter: (prop, component) => {
                if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
                    return false;
                }

                if (component && component.name && !component.name.startsWith("Inner")) {
                    return false;
                }

                return true;
            }
        }
    },
    docs: {
        autodocs: "tag"
    },
    swc: (_: SwcOptions, { configType }: Options): SwcOptions => {
        return configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;
    },
    webpackFinal(config, { configType }) {
        config.resolve = {
            ...config.resolve,
            plugins: [
                ...(config.resolve?.plugins || []),
                new TsconfigPathsPlugin({
                    configFile: "./tsconfig.json",
                    extensions: config.resolve?.extensions
                })
            ]
        };
        config.optimization.minimize = false;

        config.plugins = [
            ...(config.plugins ?? []),
            configType !== "PRODUCTION" && new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: "whm"
                }
            })
        ].filter(Boolean);

        return config;
    }
};


export default storybookConfig;
