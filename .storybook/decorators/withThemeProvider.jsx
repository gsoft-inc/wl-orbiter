import { ThemeProvider } from "@components/styling";

import { isChromatic } from "../env";

export function withThemeProvider(story, context) {
    const { viewMode } = context;
    // const globals = getGlobals(context);
    const isDocStory = context.viewMode === "docs";

    const colorSchemes = (context.globals.theme ? [context.globals.theme] : ["light"]);

    return (
        <ThemeProvider
            colorScheme={colorSchemes}
            // min-height ensure popup components renders correctly in chromatic tests.
            height={viewMode === "story" || isChromatic ? "600px" : undefined}
        >
            {story()}
        </ThemeProvider>
    );
}
