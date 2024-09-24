import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/index.ts"],
    format: "esm",
    noExternal: [
        "@popperjs/core",
        "text-mask-core",
        "use-debounce"
    ]
});