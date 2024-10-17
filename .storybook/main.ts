// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";
import type { Options } from "@storybook/types";
import type { Options as SwcOptions } from "@swc/core";
import path from "path";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

import { swcConfig as SwcBuildConfig } from "./swc.build";
import { swcConfig as SwcDevConfig } from "./swc.dev";

// We sometimes need to disable the lazyCompilation to properly run the test runner on stories
const isLazyCompilation = !(process.env.STORYBOOK_NO_LAZY === "true");

const storybookConfig: StorybookConfig = {
    stories: [
        // "../packages/**/*.stories.@(ts|tsx)"
        "../packages/components/**/tests/chromatic/**/*.stories.tsx"
    ],
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
    docs: {
        autodocs: "tag"
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: "automatic"
                }
            }
        }
    }),
    // swc: (_: SwcOptions, { configType }: Options): SwcOptions => {
    //     return configType === "PRODUCTION" ? SwcBuildConfig : SwcDevConfig;
    // },
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
        // TODO: set once in ESM
        // config.plugins = [
        //     ...(config.plugins ?? []),
        //     configType !== "PRODUCTION" && new ReactRefreshWebpackPlugin({
        //         overlay: {
        //             sockIntegration: "whm"
        //         }
        //     })
        // ].filter(Boolean);

        return config;
    }
};


export default storybookConfig;
