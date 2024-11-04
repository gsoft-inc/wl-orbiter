import { Div } from "@components/html";
import { Divider } from "@components/divider";
import { Stack } from "@components/layout";
import { Text } from "@components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Divider",
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
        <Divider />
    )
};

export const Surrounded: DividerStory = {
    name: "surrounded",
    render: () => (
        <Div>
            <Text>Apollo 8 - 1968</Text>
            <Divider />
            <Text>Apollo 11 - 1969</Text>
        </Div>
    )
};

export const MultipleSeparators: DividerStory = {
    name: "multiple separators",
    render: () => (
        <Div>
            <Text>Apollo 8 - 1968</Text>
            <Divider />
            <Text>Apollo 11 - 1969</Text>
            <Divider />
            <Text>Luna 16 - 1970</Text>
            <Divider />
            <Text>Salyut 1 - 1971</Text>
        </Div>
    )
};

export const Labelled: DividerStory = {
    name: "labelled",
    render: () => (
        <Divider>Since 1978</Divider>
    )
};

export const LongLabel: DividerStory = {
    name: "long label",
    render: () => (
        <Divider height="20rem">Since 1978 there have been more than 10 space exploration missions.</Divider>
    )
};

export const LabelledSurrounded: DividerStory = {
    name: "labelled surrounded",
    render: () => (
        <Div>
            <Text>Apollo 11 - 1969</Text>
            <Divider>Since 1978</Divider>
            <Text>Voyager 1 - 1990</Text>
        </Div>
    )
};

export const Zoom: DividerStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Divider>Since 1978</Divider>
            </Div>
            <Div className="zoom-out">
                <Divider>Since 1978</Divider>
            </Div>
        </Stack>
    )
};

export const Styling: DividerStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Divider border="warning" />
            <Divider className="border-red" />
            <Divider style={{ border: "1px solid red" }} />
        </Stack>
    )
};
