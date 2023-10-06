import { Div } from "@components/html";
import { Flex, Inline } from "@components/layout";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Flex/Column",
    component: Flex
} as ComponentMeta<typeof Flex>;

type FlexStory = ComponentStoryObj<typeof Flex>;

export const Default: FlexStory = {
    storyName: "default",
    render: () => (
        <Flex direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Fluid: FlexStory = {
    storyName: "fluid",
    render: () => (
        <Flex fluid direction="column">
            <Div backgroundColor="sapphire-500" height="100%">Alpha</Div>
            <Div backgroundColor="sapphire-500" height="100%">Bravo</Div>
            <Div backgroundColor="sapphire-500" height="100%">Charlie</Div>
        </Flex>
    )
};

export const ContentStart: FlexStory = {
    storyName: "content start",
    render: () => (
        <Flex alignContent="start" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentCenter: FlexStory = {
    storyName: "content center",
    render: () => (
        <Flex alignContent="center" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceBetween: FlexStory = {
    storyName: "content space between",
    render: () => (
        <Flex alignContent="space-between" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceAround: FlexStory = {
    storyName: "content space around",
    render: () => (
        <Flex alignContent="space-around" width={960} direction="column" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsStart: FlexStory = {
    storyName: "items start",
    render: () => (
        <Flex alignItems="start" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsCenter: FlexStory = {
    storyName: "items center",
    render: () => (
        <Flex alignItems="center" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsEnd: FlexStory = {
    storyName: "items end",
    render: () => (
        <Flex alignItems="end" direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyStart: FlexStory = {
    storyName: "justify start",
    render: () => (
        <Flex justifyContent="start" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyCenter: FlexStory = {
    storyName: "justify center",
    render: () => (
        <Flex justifyContent="center" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyEnd: FlexStory = {
    storyName: "justify end",
    render: () => (
        <Flex justifyContent="end" direction="column" fluid>
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Wrap: FlexStory = {
    storyName: "wrap",
    render: () => (
        <Flex wrap="wrap" height={240} direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const WrapReverse: FlexStory = {
    storyName: "wrap reverse",
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
    storyName: "reverse",
    render: () => (
        <Flex reverse direction="column">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Styling: FlexStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <Flex border="warning-border" direction="column">
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
