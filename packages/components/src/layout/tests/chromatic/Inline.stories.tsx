import { Div } from "@components/html/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Inline",
    component: Inline,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Inline>;

export default meta;

type InlineStory = StoryObj<typeof meta>;

export const Default: InlineStory = {
    name: "default",
    render: () => (
        <Inline>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Reverse: InlineStory = {
    name: "reverse",
    render: () => (
        <Inline reverse>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXStart: InlineStory = {
    name: "align X start",
    render: () => (
        <Inline alignX="start">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXCenter: InlineStory = {
    name: "align X center",
    render: () => (
        <Inline alignX="center">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXEnd: InlineStory = {
    name: "align X end",
    render: () => (
        <Inline alignX="end">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYStart: InlineStory = {
    name: "align Y start",
    render: () => (
        <Inline alignY="start" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYCenter: InlineStory = {
    name: "align Y center",
    render: () => (
        <Inline alignY="center" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYEnd: InlineStory = {
    name: "align Y end",
    render: () => (
        <Inline alignY="end" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Wrap: InlineStory = {
    name: "wrap",
    render: () => (
        <Inline width={240}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Nowrap: InlineStory = {
    name: "nowrap",
    render: () => (
        <Inline wrap={false} width={240}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const DefaultInline: InlineStory = {
    name: "inline",
    render: () => (
        <>
            <Inline inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Inline>
            <Inline inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Inline>
        </>
    )
};

export const Nested: InlineStory = {
    name: "nested",
    render: () => (
        <Inline gap={400}>
            <Inline gap={40}>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Inline>
            <Inline gap={800}>
                <Div backgroundColor="amanita-500">Delta</Div>
                <Div backgroundColor="amanita-500">Echo</Div>
                <Div backgroundColor="amanita-500">Foxtrot</Div>
            </Inline>
        </Inline>
    )
};
