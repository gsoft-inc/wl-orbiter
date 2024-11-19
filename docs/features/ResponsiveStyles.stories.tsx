/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Div, Paragraph, ThemeProvider } from "@components";

const meta = {
    title: "Features/Responsive styles",
    component: ThemeProvider,
    id: "responsive-styles"
} as Meta<typeof ThemeProvider>;

export default meta;

type ResponsiveStylesStory = StoryObj<typeof meta>;

export const Usage: ResponsiveStylesStory = {
    render: () => (
        <Div backgroundColor={{ base: "moss-200", xs: "sapphire-200", sm: "moss-200", md: "sapphire-200", lg: "rock-200", xl: "sunken-treasure-200" }} width="30rem" maxWidth="100%" padding={160}>
            <Paragraph fontSize={160}>Lost in space.</Paragraph>
        </Div>
    )
};

export const MobileFirst: ResponsiveStylesStory = {
    render: () => (
        <Div backgroundColor={{ base: "success", lg: "warning" }} width="30rem" maxWidth="100%" padding={160}>
            <Paragraph fontSize={160}>Lost in space.</Paragraph>
        </Div>
    )
};
