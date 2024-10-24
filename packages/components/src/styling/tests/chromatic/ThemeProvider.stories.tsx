import { ThemeProvider, useColorSchemeContext } from "@components/styling";

import { Box } from "@components/box";
import { Inline } from "@components/layout";
import { useEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ThemeProvider",
    component: ThemeProvider,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ThemeProvider>;

export default meta;

type ThemeProviderStory = StoryObj<typeof meta>;

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
    name: "sharegate",
    render: () => (
        <ThemeProvider colorScheme="light">
            <PrimaryColors />
        </ThemeProvider>
    )
};

export const Light: ThemeProviderStory = {
    name: "light",
    render: () => (
        <ThemeProvider colorScheme="light">
            <Box padding={160} backgroundColor="neutral" />
        </ThemeProvider>
    )
};

export const Dark: ThemeProviderStory = {
    name: "dark",
    render: () => (
        <ThemeProvider colorScheme="dark">
            <Box padding={160} backgroundColor="neutral" />
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
    name: "set color scheme with api",
    render: () => (
        <ThemeProvider colorScheme="light">
            <SwitchColorScheme />
            <Box padding={160} backgroundColor="neutral" />
        </ThemeProvider>
    )
};
