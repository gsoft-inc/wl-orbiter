import { Div } from "@components/html/index.ts";
import { Flex } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Flex",
    component: Flex,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Flex>;

export default meta;

type FlexStory = StoryObj<typeof meta>;

export const Default: FlexStory = {
    name: "default",
    render: () => (
        <Flex>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const FlexInline: FlexStory = {
    name: "inline",
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
    name: "nesting",
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
    name: "gap",
    render: () => (
        <Flex gap={160}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ColumnGap: FlexStory = {
    name: "column gap",
    render: () => (
        <Flex columnGap={160}>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const RowGap: FlexStory = {
    name: "row gap",
    render: () => (
        <Flex rowGap={160} direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};
