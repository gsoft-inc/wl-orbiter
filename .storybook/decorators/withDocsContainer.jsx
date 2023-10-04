import { DocsContainer } from "@storybook/addon-docs";
import { ThemeProvider } from "@components/styling";

function ThemedDocsContainer({ context, children }) {

    return (
        <ThemeProvider colorScheme="light">
            {children}
        </ThemeProvider>
    );
}

export function withDocsContainer(context, children) {
    return (
        <DocsContainer context={context}>
            <ThemedDocsContainer context={context}>
                {children}
            </ThemedDocsContainer>
        </DocsContainer>
    );
}
