import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@components/styling";
import { Button } from "@components";

const meta = {
    title: "Components/ThemeProvider",
    component: ThemeProvider,
    id: "theme-provider"
} as Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Example: Story = {
    render: () => (
        <ThemeProvider colorScheme="system" defaultColorScheme="light">
            <Button variant="secondary">Cutoff</Button>
        </ThemeProvider>
    )
};
