import { Div } from "@components/html";
import { Divider } from "@components/divider";
import { Dot } from "@components/dot";
import { Flex, Inline } from "@components/layout";
import { Text } from "@components/typography";
import { TextLink } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Divider/vertical",
    component: Divider,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Divider>;

export default meta;

type DividerStory = StoryObj<typeof meta>;

export const Default: DividerStory = {
    name: "default",
    render: () => (
        <Div height="20rem">
            <Divider orientation="vertical" />
        </Div>
    )
};

export const DividerDot: DividerStory = {
    name: "dot",
    render: () => (
        <Flex>
            <Dot color="primary">Engines ready</Dot>
            <Divider orientation="vertical" />
            <Text>Falcon 9</Text>
        </Flex>
    )
};

export const MultipleSeparators: DividerStory = {
    name: "multiple separators",
    render: () => (
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
    name: "labelled",
    render: () => (
        <Div height="20rem">
            <Divider orientation="vertical">Since 1978</Divider>
        </Div>
    )
};

export const LongLabel: DividerStory = {
    name: "long label",
    render: () => (
        <Div height="20rem">
            <Divider orientation="vertical">Since 1978 there have been more than 10 space exploration missions.</Divider>
        </Div>
    )
};

export const LabelledSurrounded: DividerStory = {
    name: "labelled surrounded",
    render: () => (
        <Flex height="20rem">
            <Text>Mission goals</Text>
            <Divider orientation="vertical">Since 1978</Divider>
            <Text>Mission post mortem</Text>
        </Flex>
    )
};

export const AlignItems: DividerStory = {
    name: "align items",
    render: () => (
        <Flex alignItems="center">
            <Text>Mission goals</Text>
            <Divider orientation="vertical" />
            <Text size="sm">Mission post mortem</Text>
        </Flex>
    )
};

export const Zoom: DividerStory = {
    name: "zoom",
    render: () => (
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
    name: "styling",
    render: () => (
        <Inline height="20rem">
            <Divider border="warning" orientation="vertical" />
            <Divider className="border-red" orientation="vertical" />
            <Divider style={{ border: "1px solid red" }} orientation="vertical" />
        </Inline>
    )
};

