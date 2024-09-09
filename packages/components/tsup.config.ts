import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/index.ts"],
    format: "esm",
    bundle: true,
    noExternal: [
        "@popperjs/core",
        "text-mask-core",
        "use-debounce"
    ]
});