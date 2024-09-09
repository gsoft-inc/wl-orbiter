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

// This plugin is used to import `.ts` files from `.js` specifiers.
function addResolvePlugin(config) {
    config.resolve ??= {};
    config.resolve.plugins ??= [];
    config.resolve.plugins.push(new ExtensionAliasPlugin({
        ".js": [".js", ".jsx", ".ts", ".tsx"],
    }));
}

module.exports = {
    customizeWebpack: async config => {
        addWebpackAliases(config);
        supportPackagesWithDependencyOnNodeFileSystem(config);
        ignoreJarleWarning(config);
        ignorePrettierParsers(config);
        addResolvePlugin(config);

        return config;
    }
};

class ExtensionAliasPlugin {
    constructor(aliases = {}) {
        this.aliases = aliases;
    }
    apply(resolver) {
        const target = resolver.ensureHook("file");
        for (const [extension, alias] of Object.entries(this.aliases)) {
            for (const aliasExtension of alias) {
                resolver
                    .getHook("raw-file")
                    .tapAsync("ExtensionAliasPlugin", (request, resolveContext, callback) => {
                        if ( typeof request.path !== "string" || request.path.match(/(^|[\\/])node_modules($|[\\/])/u) != null) {
                            callback();
                            return;
                        }

                        const path = request.path.replace(extension, aliasExtension);
                        if (path === request.path) {
                            callback();
                        } else {
                            resolver.doResolve(
                                target,
                                {
                                    ...request,
                                    path,
                                    relativePath: request.relativePath?.replace(extension, aliasExtension)
                                },
                                `using path: ${path}`,
                                resolveContext,
                                callback
                            );
                        }
                    });
            }
        }
    }
}