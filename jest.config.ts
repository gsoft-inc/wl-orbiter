import { defineJestConfig } from "@workleap/swc-configs";
import type { Config } from "jest";

export const swcConfig = defineJestConfig({
    react: true
});

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    testMatch: [
        "**/tests/jest/*.test.ts?(x)"
    ],
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy"
        // ...pathsToModuleNameMapper(compilerOptions.paths, {
        //     prefix: "<rootDir>"
        // })
    },
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.ts"
    ]
};

export default config;
