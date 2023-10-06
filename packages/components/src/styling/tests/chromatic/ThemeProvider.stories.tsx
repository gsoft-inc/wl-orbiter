import { ThemeProvider, useColorSchemeContext } from "@components/styling";

import { Box } from "@components/box";
import { Inline } from "@components/layout";
import { useEffect } from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/ThemeProvider",
    component: ThemeProvider,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as ComponentMeta<typeof ThemeProvider>;

type ThemeProviderStory = ComponentStoryObj<typeof ThemeProvider>;

function PrimaryColors() {
    return (
        <Inline gap={0}>
            <Box padding={160} backgroundColor="sapphire-100" />
            <Box padding={160} backgroundColor="sapphire-200" />
            <Box padding={160} backgroundColor="sapphire-300" />
            <Box padding={160} backgroundColor="sapphire-400" />
            <Box padding={160} backgroundColor="sapphire-500" />
            <Box padding={160} backgroundColor="sapphire-600" />
            <Box padding={160} backgroundColor="sapphire-700" />
            <Box padding={160} backgroundColor="sapphire-800" />
            <Box padding={160} backgroundColor="sapphire-900" />
            <Box padding={160} backgroundColor="sapphire-900" />
        </Inline>
    );
}

export const Sharegate: ThemeProviderStory = {
    storyName: "sharegate",
    render: () => (
        <ThemeProvider colorScheme="light">
            <PrimaryColors />
        </ThemeProvider>
    )
};

export const Light: ThemeProviderStory = {
    storyName: "light",
    render: () => (
        <ThemeProvider colorScheme="light">
            <Box padding={160} backgroundColor="neutral-surface" />
        </ThemeProvider>
    )
};

export const Dark: ThemeProviderStory = {
    storyName: "dark",
    render: () => (
        <ThemeProvider colorScheme="dark">
            <Box padding={160} backgroundColor="neutral-surface" />
        </ThemeProvider>
    )
};

const SwitchColorScheme = () => {
    const { setColorScheme } = useColorSchemeContext();

    useEffect(() => {
        setColorScheme("dark");
    }, [setColorScheme]);

    return null;
};

export const SetColorSchemeWithApi: ThemeProviderStory = {
    storyName: "set color scheme with api",
    render: () => (
        <ThemeProvider colorScheme="light">
            <SwitchColorScheme />
            <Box padding={160} backgroundColor="neutral-surface" />
        </ThemeProvider>
    )
};
