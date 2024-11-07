import { ThemeProvider } from "@components/styling/index.ts";
import { isChromatic } from "../env";
import { useEffect, useState, ReactNode } from "react";

export function withThemeProvider(story, context) {
    // const { viewMode } = context;
    return (
        <ThemeProviderDecorator context={context}>
            {story()}
        </ThemeProviderDecorator>
    );
}

interface ThemeProviderDecorator {
    children: ReactNode;
    context: any;
}

function ThemeProviderDecorator({ children, context }: ThemeProviderDecorator) {
    const [colorScheme, setColorScheme] = useState("light");

    useEffect(() => {
        setColorScheme(context.globals.theme);
    }, [context]);

    return (
        <ThemeProvider
            colorScheme={colorScheme}
            // min-height ensure popup components renders correctly in chromatic tests.
            height={context.viewMode === "story" || isChromatic ? "600px" : undefined}
        >
            {children}
        </ThemeProvider>
    );
}
