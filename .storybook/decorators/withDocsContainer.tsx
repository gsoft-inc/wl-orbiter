import { ThemeProvider } from "@components/styling";
import { DocsContainer } from "@storybook/blocks";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "../mdx/components";

export function ThemedDocsContainer({ children, ...props }) {
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
