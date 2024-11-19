/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Div, Paragraph, ThemeProvider } from "@components";

const meta = {
    title: "Features/Style props",
    component: ThemeProvider,
    id: "style-props"
} as Meta<typeof ThemeProvider>;

export default meta;

type StylePropsStory = StoryObj<typeof meta>;

export const ScaleValues: StylePropsStory = {
    render: () => (
        <Div width="30rem" backgroundColor="primary-weak" padding={160} borderRadius="rounded-md" maxWidth="100%">
            <Paragraph fontSize={160}>Lost in space.</Paragraph>
        </Div>
    )
};

export const PseudoClasses: StylePropsStory = {
    render: () => (
        <Div backgroundColorHover="status-positive" backgroundColor="warning-weak" padding={160} width="30rem" maxWidth="100%" borderRadius="rounded-md">
            <Paragraph fontSize={160}>Lost in space.</Paragraph>
        </Div>
    )
};
