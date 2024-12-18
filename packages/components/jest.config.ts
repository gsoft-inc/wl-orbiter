import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { swcConfig } from "./swc.jest.ts";
import { compilerOptions } from "./tsconfig.json";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy", // https://jestjs.io/docs/webpack#mocking-css-modules
        ...pathsToModuleNameMapper(compilerOptions.paths, {
            prefix: "<rootDir>"
        })
    },
    testRegex: "/tests/jest/*/.*\\.test\\.(ts|tsx)$",
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    transformIgnorePatterns: []
};

export default config;
