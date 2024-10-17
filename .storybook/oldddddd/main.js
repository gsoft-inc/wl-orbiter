import { dirname, join } from "path";
const { customizeWebpack } = require("./webpack.config");
const { includeChromatic, includeDocs, printEnvironment, isChromatic, isDebug } = require("./env");

printEnvironment();

let stories = [];

if (includeDocs) {
    stories = [
        // TODO simplify imports for any pkgs /docs/**/*.stories.mdx
        // "../docs/**/*.stories.mdx",
        // "../packages/components/src/**/docs/**/*.stories.mdx"
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

const config = {
    stories: [
        // "../docs/**/*.mdx",
        // "../packages/components/src/**/docs/**/*.mdx",
        // "../packages/components/**/tests/chromatic/**/*.chroma.jsx",
        "../packages/components/**/tests/chromatic/**/*.stories.tsx"
    ],

    addons: [{
        name: "@storybook/addon-essentials",
        options: {
            actions: false,
            backgrounds: false,
            controls: false,
            measure: false,
            outline: false
        }
    }, {
        name: "@storybook/addon-a11y",
        options: {
            runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa"]
            }
        }
    }, getAbsolutePath("@storybook/addon-mdx-gfm"), getAbsolutePath("@storybook/addon-webpack5-compiler-swc")],

    webpackFinal: customizeWebpack,

    reactOptions: {
        strictMode: true
    },

    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),

        options: {
            strictMode: true
        }
    },

    docs: {},

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
};

// Disable Typescript during Chromatic tests, otherwise we use too much RAM in our CI
if (isChromatic) {
    config.typescript = {
        check: false,
        reactDocgen: false
    };
}

// An optimized version of the components props will be visibile in the production build. It's available for debug & chromatic because the performance cost is too big.
if (!isChromatic && !isDebug) {
    config.typescript = {
        reactDocgenTypescriptOptions: {
        // Slow down Storybook initial rendering by 3x but his essential to render a union values instead of a named export (e.g. will render "top" | "bottom" instead of PositionProp).
            shouldExtractValuesFromUnion: true,
            shouldExtractLiteralValuesFromEnum: true,
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
    };
}

module.exports = config;

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
