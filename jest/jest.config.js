const path = require("path");

module.exports = {
    rootDir: path.resolve(__dirname, ".."),
    roots: [
        "<rootDir>/packages/components",
        "<rootDir>/packages/experimental"
    ],
    testMatch: ["**/tests/jest/*.test.ts?(x)"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": path.resolve("jest/babel-transform.js")
    },
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
        "\\.svg": "<rootDir>/jest/svgr-mock.js",
        "@jest-utils$": "<rootDir>/jest/utils/index.ts",
        "@components/(.*)$": "<rootDir>/packages/components/src/$1",
        "@experimental/(.*)$": "<rootDir>/packages/experimental/src/$1",
        "@orbit-ui/components$": "<rootDir>/packages/components/src/index.ts"
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "<rootDir>/jest/setup-jest.js"
    ],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: [
        "<rootDir>/packages/components/dist",
        "<rootDir>/packages/experimental/dist"
    ],
    verbose: true
};

