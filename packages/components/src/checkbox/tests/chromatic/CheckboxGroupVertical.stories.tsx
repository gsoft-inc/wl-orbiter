import { Checkbox, CheckboxGroup } from "@components/checkbox";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/CheckboxGroup/vertical",
    component: CheckboxGroup,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof CheckboxGroup>;

export default meta;

type CheckboxGroupStory = StoryObj<typeof meta>;


export const Default: CheckboxGroupStory = {
    name: "default",
    render: () => (
        <CheckboxGroup orientation="vertical">
            <Checkbox value="1">1</Checkbox>
            <Checkbox value="2">2</Checkbox>
            <Checkbox value="3">3</Checkbox>
        </CheckboxGroup>
    )
};

export const Size: CheckboxGroupStory = {
    name: "size",
    render: () => (
        <Inline alignY="end" gap={800}>
            <CheckboxGroup size="sm" orientation="vertical">
                <Checkbox value="1">1</Checkbox>
                <Checkbox value="2">2</Checkbox>
                <Checkbox value="3">3</Checkbox>
            </CheckboxGroup>
            <CheckboxGroup orientation="vertical">
                <Checkbox value="1">1</Checkbox>
                <Checkbox value="2">2</Checkbox>
                <Checkbox value="3">3</Checkbox>
            </CheckboxGroup>
        </Inline>
    )
};

export const Reverse: CheckboxGroupStory = {
    name: "reverse",
    render: () => (
        <CheckboxGroup reverse orientation="vertical">
            <Checkbox value="1">1</Checkbox>
            <Checkbox value="2">A very long option to read while you wait for the countdown to mars.</Checkbox>
            <Checkbox value="3">3</Checkbox>
        </CheckboxGroup>
    )
};

export const Zoom: CheckboxGroupStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <CheckboxGroup aria-label="Select your packages">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
            </Div>
            <Div className="zoom-out">
                <CheckboxGroup aria-label="Select your packages">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
            </Div>
        </Stack>
    )
};
