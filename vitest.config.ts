import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        setupFiles: "./tooling/test-utils/vitest-setup.ts",
        environment: "jsdom",
        include: ["**/tests/jest/*.test.ts?(x)"],
        globals: true
    }
});