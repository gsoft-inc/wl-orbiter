import { ThemeProvider } from "@components/styling/index.ts";
import { DocsContainer } from "@storybook/blocks";
import type { ComponentProps } from "react";

export function ThemedDocsContainer({ children, ...props }: ComponentProps<typeof DocsContainer>) {
    return (
        <ThemeProvider colorScheme="light">
            <DocsContainer {...props}>{children}</DocsContainer>;
        </ThemeProvider>
    );
}
