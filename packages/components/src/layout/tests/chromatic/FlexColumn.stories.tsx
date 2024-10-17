import { Div } from "@components/html";
import { Flex, Inline } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Flex/Column",
    component: Flex
} as Meta<typeof Flex>;

export default meta;

type FlexStory = StoryObj<typeof meta>;

export const Default: FlexStory = {
    name: "default",
    render: () => (
        <Flex direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Fluid: FlexStory = {
    name: "fluid",
    render: () => (
        <Flex fluid direction="column">
            <Div backgroundColor="sapphire-500" height="100%">Alpha</Div>
            <Div backgroundColor="sapphire-500" height="100%">Bravo</Div>
            <Div backgroundColor="sapphire-500" height="100%">Charlie</Div>
        </Flex>
    )
};

export const ContentStart: FlexStory = {
    name: "content start",
    render: () => (
        <Flex alignContent="start" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentCenter: FlexStory = {
    name: "content center",
    render: () => (
        <Flex alignContent="center" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceBetween: FlexStory = {
    name: "content space between",
    render: () => (
        <Flex alignContent="space-between" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceAround: FlexStory = {
    name: "content space around",
    render: () => (
        <Flex alignContent="space-around" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsStart: FlexStory = {
    name: "items start",
    render: () => (
        <Flex alignItems="start" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsCenter: FlexStory = {
    name: "items center",
    render: () => (
        <Flex alignItems="center" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsEnd: FlexStory = {
    name: "items end",
    render: () => (
        <Flex alignItems="end" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyStart: FlexStory = {
    name: "justify start",
    render: () => (
        <Flex justifyContent="start" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyCenter: FlexStory = {
    name: "justify center",
    render: () => (
        <Flex justifyContent="center" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyEnd: FlexStory = {
    name: "justify end",
    render: () => (
        <Flex justifyContent="end" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Wrap: FlexStory = {
    name: "wrap",
    render: () => (
        <Flex wrap="wrap" height={240} direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const WrapReverse: FlexStory = {
    name: "wrap reverse",
    render: () => (
        <Flex wrap="wrap-reverse" height={240} direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
            <Div backgroundColor="sapphire-500">Delta</Div>
            <Div backgroundColor="sapphire-500">Echo</Div>
            <Div backgroundColor="sapphire-500">Foxtrot</Div>
        </Flex>
    )
};

export const Reverse: FlexStory = {
    name: "reverse",
    render: () => (
        <Flex reverse direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Styling: FlexStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Flex border="warning" direction="column">
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
            <Flex className="border-red" direction="row">
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
            <Flex style={{ border: "1px solid red" }} direction="row">
                <Div backgroundColor="sapphire-500">Alpha</Div>
                <Div backgroundColor="sapphire-500">Bravo</Div>
                <Div backgroundColor="sapphire-500">Charlie</Div>
            </Flex>
        </Inline>
    )
};
