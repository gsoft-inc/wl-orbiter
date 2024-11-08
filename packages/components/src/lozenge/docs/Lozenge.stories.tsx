import { SparklesIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout";
import { Lozenge } from "@components/lozenge";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Lozenge",
    component: Lozenge,
    id: "lozenge"
} as Meta<typeof Lozenge>;

export default meta;

type LozengeStory = StoryObj<typeof meta>;

export const Default: LozengeStory = {
    render: () => (
        <Lozenge>New</Lozenge>
    )
};

export const IconStory: LozengeStory = {
    render: () => (
        <Lozenge>
            <SparklesIcon />
            <Text>New</Text>
        </Lozenge>
    )
};

export const Size: LozengeStory = {
    render: () => (
        <Inline alignY="center">
            <Lozenge size="sm">New</Lozenge>
            <Lozenge>New release</Lozenge>
        </Inline>
    )
};

export const Highlight: LozengeStory = {
    render: () => (
        <Inline alignY="center">
            <Lozenge highlight size="sm">New</Lozenge>
            <Lozenge highlight>New</Lozenge>
        </Inline>
    )
};

export const Fluid: LozengeStory = {
    render: () => (
        <Lozenge fluid>New</Lozenge>
    )
};

export const Warning: LozengeStory = {
    render: () => (
        <Inline alignY="center">
            <Lozenge variant="warning">Expires soon</Lozenge>
            <Lozenge highlight variant="warning">Expires soon</Lozenge>
        </Inline>
    )
};

export const Positive: LozengeStory = {
    render: () => (
        <Inline alignY="center">
            <Lozenge variant="positive">Active</Lozenge>
            <Lozenge highlight variant="positive">Active</Lozenge>
        </Inline>
    )
};

export const Negative: LozengeStory = {
    render: () => (
        <Inline alignY="center">
            <Lozenge variant="negative">Blocked</Lozenge>
            <Lozenge highlight variant="negative">Blocked</Lozenge>
        </Inline>
    )
};
