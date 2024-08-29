import { Div } from "@components/html/index.js";
import { Inline } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Inline",
    component: Inline
} as ComponentMeta<typeof Inline>;

type InlineStory = ComponentStoryObj<typeof Inline>;

export const Default: InlineStory = {
    storyName: "default",
    render: () => (
        <Inline>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Reverse: InlineStory = {
    storyName: "reverse",
    render: () => (
        <Inline reverse>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXStart: InlineStory = {
    storyName: "align X start",
    render: () => (
        <Inline alignX="start">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXCenter: InlineStory = {
    storyName: "align X center",
    render: () => (
        <Inline alignX="center">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignXEnd: InlineStory = {
    storyName: "align X end",
    render: () => (
        <Inline alignX="end">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYStart: InlineStory = {
    storyName: "align Y start",
    render: () => (
        <Inline alignY="start" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYCenter: InlineStory = {
    storyName: "align Y center",
    render: () => (
        <Inline alignY="center" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const AlignYEnd: InlineStory = {
    storyName: "align Y end",
    render: () => (
        <Inline alignY="end" height={800}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Wrap: InlineStory = {
    storyName: "wrap",
    render: () => (
        <Inline width={240}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const Nowrap: InlineStory = {
    storyName: "nowrap",
    render: () => (
        <Inline wrap={false} width={240}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Inline>
    )
};

export const DefaultInline: InlineStory = {
    storyName: "inline",
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
    storyName: "nested",
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
