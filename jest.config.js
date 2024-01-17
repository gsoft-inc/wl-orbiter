const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
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
        "@testing-library/jest-dom/extend-expect",
        "<rootDir>/setupTests.js"
    ],
    testEnvironment: "jsdom",
    verbose: true
};

