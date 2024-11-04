import { ThemeProvider } from "@components/styling";
import { DocsContainer } from "@storybook/blocks";


export function ThemedDocsContainer({ children, ...props }) {
    return (
        <ThemeProvider colorScheme="light">
            <DocsContainer {...props}>{children}</DocsContainer>;
        </ThemeProvider>
    );
}
