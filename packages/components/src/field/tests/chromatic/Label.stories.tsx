import { Inline } from "@components/layout";
import { Label } from "@components/field";
import { Span } from "@components/html";
import { TextLink } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Label",
    component: Label,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Label>;

export default meta;

type GroupFieldStory = StoryObj<typeof meta>;

export const Default: GroupFieldStory = {
    name: "default",
    render: () => (
        <Label>Where to?</Label>
    )
};

export const Complex: GroupFieldStory = {
    name: "complex",
    render: () => (
        <Label>
            <Span>Where to? (<TextLink variant="primary" size="inherit" href="https://www.google.com/sky">view destinations</TextLink>)</Span>
        </Label>
    )
};

export const AsSpan: GroupFieldStory = {
    name: "as span",
    render: () => (
        <Label as="span">Where to?</Label>
    )
};

export const Styling: GroupFieldStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Label border="warning">Where to?</Label>
            <Label className="bg-red">Where to?</Label>
            <Label style={{ background: "red" }}>Where to?</Label>
        </Inline>
    )
};
