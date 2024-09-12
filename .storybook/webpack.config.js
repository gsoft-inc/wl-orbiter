const path = require("path");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
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
    };
}

// Currently required for:
//   - https://github.com/reworkcss/css
function supportPackagesWithDependencyOnNodeFileSystem(config) {
    const existingNode = config.node || {};

    config.node = {
        ...existingNode,
        fs: "empty"
    };
}

function ignoreJarleWarning(config) {
    config.plugins.push(new FilterWarningsPlugin({
        exclude: /Module not found: Error: Can't resolve 'holderjs'/
    }));
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

/*
 * Webpack v4 and Storybook v6 use MD4 for hashing, which cannot be overriden.
 *
 * The MD4 algorithm is not available anymore in Node.js 17+ (because of library SSL 3).
 * So, we silently replace MD4 by the MD5 algorithm.
 */
function monkeyPatchHashFunction() {
    const crypto = require('crypto');

    const _createHash = crypto.createHash;

    crypto.createHash = (algorithm, options) => {
        return _createHash(
            algorithm === 'md4' ? 'md5' : algorithm,
            options
        );
      };
}

module.exports = {
    customizeWebpack: async config => {
        addWebpackAliases(config);
        supportPackagesWithDependencyOnNodeFileSystem(config);
        ignoreJarleWarning(config);
        ignorePrettierParsers(config);
        monkeyPatchHashFunction();

        return config;
    }
};