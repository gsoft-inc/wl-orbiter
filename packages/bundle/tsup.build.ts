import { defineBuildConfig } from "@workleap/tsup-configs";

export default defineBuildConfig({
    entry: ["./src/**/*.(ts|tsx|css)"]
});
