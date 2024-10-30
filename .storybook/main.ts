// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

import { includeDocs, includeChromatic } from "./env";

// We sometimes need to disable the lazyCompilation to properly run the test runner on stories
const isLazyCompilation = !(process.env.STORYBOOK_NO_LAZY === "true");

let stories: string[] = [];

if (includeDocs) {
    stories = [
        // TODO simplify imports for any pkgs /docs/**/*.stories.mdx
        // "../docs/**/*.stories.mdx",
        // "../packages/**/docs/**/*.mdx",
        // "!../packages/**/docs/**/*.stories.mdx",
        "../packages/**/docs/*(!.stories).mdx",
        "../packages/**/docs/*.stories.tsx"
    ];
}

if (includeChromatic) {
    stories = [
        ...stories,
        // TODO remove chroma and simplify imports
        // "../packages/components/**/tests/chromatic/**/*.chroma.jsx",
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
            shouldExtractLiteralValuesFromEnum: true,
            // 👇 Default prop filter, which excludes props from node_modules
            propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
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
    webpackFinal(config) {
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
