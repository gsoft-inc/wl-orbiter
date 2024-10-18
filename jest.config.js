const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>"],
    testMatch: [
        "**/tests/jest/*.test.ts?(x)"
    ],
    preset: "ts-jest/presets/js-with-ts",
    transformIgnorePatterns: ["/node_modules/(?!(@hopper-ui)/)"], // make sure to transpile esm code to cjs
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
        ...pathsToModuleNameMapper(compilerOptions.paths)
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.ts"
    ],
    verbose: true
};

