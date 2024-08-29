import { Div } from "@components/html/index.js";
import { Divider } from "@components/divider/index.js";
import { Dot } from "@components/dot/index.js";
import { Flex, Inline } from "@components/layout/index.js";
import { Text } from "@components/typography/index.js";
import { TextLink } from "@components/link/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Divider/vertical",
    component: Divider
} as ComponentMeta<typeof Divider>;

type DividerStory = ComponentStoryObj<typeof Divider>;

export const Default: DividerStory = {
    storyName: "default",
    render:() => (
        <Div height="20rem">
            <Divider orientation="vertical" />
        </Div>
    )
};

export const DividerDot: DividerStory = {
    storyName: "dot",
    render:() => (
        <Flex>
            <Dot color="primary">Engines ready</Dot>
            <Divider orientation="vertical" />
            <Text>Falcon 9</Text>
        </Flex>
    )
};

export const MultipleSeparators: DividerStory = {
    storyName: "multiple separators",
    render:() => (
        <Flex>
            <Dot color="primary">Starlink</Dot>
            <Divider orientation="vertical" />
            <Text>Delivery #9</Text>
            <Divider orientation="vertical" />
            <TextLink href="#">View details</TextLink>
        </Flex>
    )
};

export const Labelled: DividerStory = {
    storyName: "labelled",
    render:() => (
        <Div height="20rem">
            <Divider orientation="vertical">Since 1978</Divider>
        </Div>
    )
};

export const LongLabel: DividerStory = {
    storyName: "long label",
    render:() => (
        <Div height="20rem">
            <Divider orientation="vertical">Since 1978 there have been more than 10 space exploration missions.</Divider>
        </Div>
    )
};

export const LabelledSurrounded: DividerStory = {
    storyName: "labelled surrounded",
    render:() => (
        <Flex height="20rem">
            <Text>Mission goals</Text>
            <Divider orientation="vertical">Since 1978</Divider>
            <Text>Mission post mortem</Text>
        </Flex>
    )
};

export const AlignItems: DividerStory = {
    storyName: "align items",
    render:() => (
        <Flex alignItems="center">
            <Text>Mission goals</Text>
            <Divider orientation="vertical" />
            <Text size="sm">Mission post mortem</Text>
        </Flex>
    )
};

export const Zoom: DividerStory = {
    storyName: "zoom",
    render:() => (
        <Inline height="20rem">
            <Div className="zoom-in">
                <Divider orientation="vertical">Since 1978</Divider>
            </Div>
            <Div className="zoom-out">
                <Divider orientation="vertical">Since 1978</Divider>
            </Div>
        </Inline>
    )
};

export const Styling: DividerStory = {
    storyName: "styling",
    render:() => (
        <Inline height="20rem">
            <Divider border="warning" orientation="vertical" />
            <Divider className="border-red" orientation="vertical" />
            <Divider style={{ border: "1px solid red" }} orientation="vertical" />
        </Inline>
    )
};

