import { Div } from "@components/html";
import { Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Stack",
    component: Stack
} as Meta<typeof Stack>;

export default meta;

type StackStory = StoryObj<typeof meta>;

export const Default: StackStory = {
    name: "default",
    render: () => (
        <Stack>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const Reverse: StackStory = {
    name: "reverse",
    render: () => (
        <Stack reverse>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignXStart: StackStory = {
    name: "align X start",
    render: () => (
        <Stack alignX="start">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignXCenter: StackStory = {
    name: "align X center",
    render: () => (
        <Stack alignX="center">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignXEnd: StackStory = {
    name: "align X end",
    render: () => (
        <Stack alignX="end">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignYStart: StackStory = {
    name: "align Y start",
    render: () => (
        <Stack alignY="start" height={960}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignYCenter: StackStory = {
    name: "align Y center",
    render: () => (
        <Stack alignY="center" height={960}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const AlignYEnd: StackStory = {
    name: "align Y end",
    render: () => (
        <Stack alignY="end" height={960}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const Wrap: StackStory = {
    name: "wrap",
    render: () => (
        <Stack wrap height={240}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Stack>
    )
};

export const Inline: StackStory = {
    name: "inline",
    render: () => (
        <>
            <Stack inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Stack>
            <Stack inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Stack>
        </>
    )
};

export const Nested: StackStory = {
    name: "nested",
    render: () => (
        <Stack gap={400}>
            <Stack gap={40}>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Stack>
            <Stack gap={800}>
                <Div backgroundColor="amanita-500">Delta</Div>
                <Div backgroundColor="amanita-500">Echo</Div>
                <Div backgroundColor="amanita-500">Foxtrot</Div>
            </Stack>
        </Stack>
    )
};
