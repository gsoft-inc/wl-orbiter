import { ThemeProvider } from "@components/styling/index.ts";
import { DocsContainer } from "@storybook/blocks";
import type { ComponentProps } from "react";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/components.ts";

export function ThemedDocsContainer({ children, ...props }: ComponentProps<typeof DocsContainer>) {
    return (
        <ThemeProvider colorScheme="light">
            <MDXProvider
                components={mdxComponents}
            >
                <DocsContainer {...props}>{children}</DocsContainer>;
            </MDXProvider>
        </ThemeProvider >
    );
}
