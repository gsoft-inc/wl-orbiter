/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Div, ThemeProvider } from "@components";
import { TokenTable } from "./TokenTable";
import { BackgroundColors } from "./Tokens";

const meta = {
    title: "Features/Tokens",
    component: Div,
    id: "tokens"
} as Meta<typeof ThemeProvider>;

export default meta;

type ResponsiveStylesStory = StoryObj<typeof meta>;

export const Usage = {
    name: "usage",
    render: () => (
        <Div backgroundColor="neutral-weak">
            {/* ... */}
        </Div>
    )
} satisfies ResponsiveStylesStory;
