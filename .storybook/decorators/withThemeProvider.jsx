import { ThemeProvider } from "@components/styling/index.js";

import { isChromatic } from "../env/index.js";
import { getGlobals } from "../utils/index.js";

export function withThemeProvider(story, context) {
  const { viewMode } = context;
  const globals = getGlobals(context);

  return (
    <ThemeProvider
      colorScheme={globals.colorScheme}
      // min-height ensure popup components renders correctly in chromatic tests.
      height={viewMode === "story" || isChromatic ? "600px" : undefined}
    >
      {story()}
    </ThemeProvider>
  );
}
