/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";
import { Button, Div, ThemeProvider, useColorSchemeContext, useColorSchemeValue } from "@components";

const meta = {
    title: "Features/Color schemes",
    component: ThemeProvider,
    id: "color-schemes"
} as Meta<typeof ThemeProvider>;

export default meta;

type ColorSchemesStory = StoryObj<typeof meta>;

export const Apply: ColorSchemesStory = {
    render: () => (
        <ThemeProvider colorScheme="dark">
            <Button variant="secondary">Cutoff</Button>
        </ThemeProvider>
    )
};
export const ApplySystem: ColorSchemesStory = {
    render: () => (
        <ThemeProvider colorScheme="system" defaultColorScheme="light">
            <Button variant="secondary">Cutoff</Button>
        </ThemeProvider>
    )
};

export const ColorSchemeToggleStory: ColorSchemesStory = {
    render: () => {
        function ColorSchemeToggle() {
            const { colorScheme, setColorScheme } = useColorSchemeContext();

            const handleClick = useCallback(() => {
                setColorScheme(colorScheme === "light" ? "dark" : "light");
            }, [colorScheme, setColorScheme]);

            return (
                <Button variant="secondary" onClick={handleClick}>Toggle</Button>
            );
        }

        return (
            <ThemeProvider colorScheme="light">
                <Div backgroundColor="neutral" padding="inset-sm">
                    <ColorSchemeToggle />
                </Div>
            </ThemeProvider>
        );
    }
};

export const UseColorSchemeValueStory: ColorSchemesStory = {
    render: () => {
        const color = useColorSchemeValue("#fff", "#000");
        const backgroundColor = useColorSchemeValue("#ff9048", "#fee2bb");

        return (
            <Button
                color={color}
                backgroundColor={backgroundColor}
            >
        Cutoff
            </Button>
        );
    }
};
