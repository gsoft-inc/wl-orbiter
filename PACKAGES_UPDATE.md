# Packages Update

## Bump NPM packages versions

To udpate our packages use a package called ![npm-check-updates](https://www.npmjs.com/package/npm-check-updates). Dont install it locally, use `npx`.

In a terminal, use the followings commands

- To list the available updates, type `npx --yes npm-check-updates`
- If you want to proceed with the updates, your must first delete `pnpm-lock.yaml`
- Then type `npx --yes npm-check-updates -u` to bump the versions in the `package.json` file
- Install the new packages with `pnpm update`

## ESLint

Cannot update `eslint` to version 8. We get the following error when opening an MDX file.

[Error - 4:06:53 PM] Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/rules/no-unused-expressions' is not defined by "exports" in C:\Dev\gsoft\sg-orbiter\node_modules\eslint\package.json
    at throwExportsNotFound (internal/modules/esm/resolve.js:290:9)
    at packageExportsResolve (internal/modules/esm/resolve.js:513:3)
    at resolveExports (internal/modules/cjs/loader.js:439:36)
    at Function.Module._findPath (internal/modules/cjs/loader.js:479:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:921:27)
    at Module._load (internal/modules/cjs/loader.js:779:27)
    at Function.f._load (electron/js2c/asar_bundle.js:5:12913)
    at Module.require (internal/modules/cjs/loader.js:1006:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (C:\Dev\gsoft\sg-orbiter\node_modules\eslint-plugin-mdx\lib\rules\no-unused-expressions.js:7:57)

## Meow & Chalk

Cannot update `meow` to version 10.
Cannot update `charlk` to version 5.

FYI: I think this problem is solvable on our side and should be investigated.

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: C:\Dev\gsoft\sg-orbiter\node_modules\meow\index.js
require() of ES modules is not supported.
require() of C:\Dev\gsoft\sg-orbiter\node_modules\meow\index.js from C:\Dev\gsoft\sg-orbiter\scripts\copy-root-license.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
Instead rename index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from C:\Dev\gsoft\sg-orbiter\node_modules\meow\package.json.
