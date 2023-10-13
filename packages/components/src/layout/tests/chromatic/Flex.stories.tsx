import { Div } from "@components/html";
import { Flex } from "@components/layout";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Flex",
    component: Flex
} as ComponentMeta<typeof Flex>;

type FlexStory = ComponentStoryObj<typeof Flex>;

export const Default: FlexStory = {
    storyName: "default",
    render: () => (
        <Flex>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const FlexInline: FlexStory = {
    storyName: "inline",
    render: () => (
        <>
            <Flex inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
            <Flex inline>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
        </>
    )
};

export const Nesting: FlexStory = {
    storyName: "nesting",
    render: () => (
        <Flex direction="row" gap={400}>
            <Flex direction="row" gap={40}>
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
            <Flex direction="column" gap={800}>
                <Div backgroundColor="amanita-500">Delta</Div>
                <Div backgroundColor="amanita-500">Echo</Div>
                <Div backgroundColor="amanita-500">Foxtrot</Div>
            </Flex>
        </Flex>
    )
};

export const Gap: FlexStory = {
    storyName: "gap",
    render: () => (
        <Flex gap={160}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ColumnGap: FlexStory = {
    storyName: "column gap",
    render: () => (
        <Flex columnGap={160}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const RowGap: FlexStory = {
    storyName: "row gap",
    render: () => (
        <Flex rowGap={160} direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};
