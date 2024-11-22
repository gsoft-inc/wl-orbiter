import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: [
        "./src/index.(ts|tsx|css)",
        "./src/core.css",
        "./src/**/src/**/*.(ts|tsx|css)"]
});
