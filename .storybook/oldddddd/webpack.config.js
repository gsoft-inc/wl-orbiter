const path = require("path");
const webpack = require("webpack");

function addWebpackAliases(config) {
    const existingAlias = config.resolve.alias || {};

    config.resolve.alias = {
        ...existingAlias,
        "@root": path.resolve(__dirname, ".."),
        "@css": path.resolve(__dirname, "../packages/css/src"),
        "@components": path.resolve(__dirname, "../packages/components/src"),
        "@orbit-ui/transition-components": path.resolve(__dirname, "../packages/components/src"),
        "@workleap/orbiter-ui": path.resolve(__dirname, "../packages/bundle/src"),
        "@stories/components": path.resolve(__dirname, "./components"),
        "@stories/mdx": path.resolve(__dirname, "./mdx"),
        "@stories/utils": path.resolve(__dirname, "./utils"),
        // In order to properly load css files from node_modules, we need to add aliases for each package.
        // we could use the ~, but this only works for webpack, and vite doesn't support it.
        // also, since we are not using ~, it's considered a relative path, so we add the ./ to the alias.
        "./@hopper-ui/icons/index.css": path.resolve(__dirname, "../node_modules/@hopper-ui/icons/dist/index.css"),
        "./@hopper-ui/tokens/fonts.css": path.resolve(__dirname, "../node_modules/@hopper-ui/tokens/dist/fonts.css"),
        "./@hopper-ui/styled-system/index.css": path.resolve(__dirname, "../node_modules/@hopper-ui/styled-system/dist/index.css"),
        "./@hopper-ui/components/index.css": path.resolve(__dirname, "../node_modules/@hopper-ui/components/dist/index.css"),
    };
}

function ignorePrettierParsers(config) {
    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/parser-standalone$/,
        contextRegExp: /prettier$/
    }));

    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/parser-flow$/,
        contextRegExp: /prettier$/
    }));

    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/parser-typescript$/,
        contextRegExp: /prettier$/
    }));
}

module.exports = {
    customizeWebpack: async config => {
        addWebpackAliases(config);
        ignorePrettierParsers(config);

        return config;
    }
};
