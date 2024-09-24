import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/**/*.(ts|tsx)", "!./src/**/(tests|docs)/**/*"],
    format: "esm",
    noExternal: [
        "@popperjs/core",
        "text-mask-core",
        "use-debounce"
    ]
});