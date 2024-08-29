import { Div } from "@components/html/index.js";
import { Flex, Inline } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Flex/Row",
    component: Flex
} as ComponentMeta<typeof Flex>;

type FlexStory = ComponentStoryObj<typeof Flex>;

export const Default: FlexStory = {
    storyName: "default",
    render: () => (
        <Flex direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Fluid: FlexStory = {
    storyName: "fluid",
    render: () => (
        <Flex fluid direction="row">
            <Div backgroundColor="sapphire-500" width="100%">Alpha</Div>
            <Div backgroundColor="sapphire-500" width="100%">Bravo</Div>
            <Div backgroundColor="sapphire-500" width="100%">Charlie</Div>
        </Flex>
    )
};

export const ContentStart: FlexStory = {
    storyName: "content start",
    render: () => (
        <Flex alignContent="start" height={960} direction="row" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentCenter: FlexStory = {
    storyName: "content center",
    render: () => (
        <Flex alignContent="center" height={960} direction="row" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceBetween: FlexStory = {
    storyName: "content space between",
    render: () => (
        <Flex alignContent="space-between" height={960} direction="row" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ContentSpaceAround: FlexStory = {
    storyName: "content space around",
    render: () => (
        <Flex alignContent="space-around" height={960} direction="row" wrap="wrap">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsStart: FlexStory = {
    storyName: "items start",
    render: () => (
        <Flex alignItems="start" height={960} direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsCenter: FlexStory = {
    storyName: "items center",
    render: () => (
        <Flex alignItems="center" height={960} direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const ItemsEnd: FlexStory = {
    storyName: "items end",
    render: () => (
        <Flex alignItems="end" height={960} direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyStart: FlexStory = {
    storyName: "justify start",
    render: () => (
        <Flex justifyContent="start" fluid direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyCenter: FlexStory = {
    storyName: "justify center",
    render: () => (
        <Flex justifyContent="center" fluid direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const JustifyEnd: FlexStory = {
    storyName: "justify end",
    render: () => (
        <Flex justifyContent="end" fluid direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const Wrap: FlexStory = {
    storyName: "wrap",
    render: () => (
        <Flex wrap="wrap" width={240} direction="row">
            <Div backgroundColor="sapphire-500">Alpha</Div>
            <Div backgroundColor="sapphire-500">Bravo</Div>
            <Div backgroundColor="sapphire-500">Charlie</Div>
        </Flex>
    )
};

export const WrapReverse: FlexStory = {
    storyName: "wrap reverse",
    render: () => (
        <Flex wrap="wrap-reverse" width={240} direction="row">
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
        <Flex reverse direction="row">
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
            <Flex border="warning" direction="row">
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
