import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { externalizeDeps } from 'vite-plugin-externalize-deps'
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        externalizeDeps({ deps: true, devDeps: false, peerDeps: true }),
        dts({ tsconfigPath: "./tsconfig.build.json" })
    ],
    build: {
        minify: false,
        lib: {
            entry: ["./src/index.ts"],
            formats: ["es"],
        }
    } 
});