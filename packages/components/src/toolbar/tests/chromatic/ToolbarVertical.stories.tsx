import { Inline } from "@components/layout/index.js";
import { RadioGroup } from "@components/radio/index.js";
import { ToggleButton } from "@components/button/index.js";
import { CheckboxGroup } from "@components/checkbox/index.js";
import { TextInput } from "@components/text-input/index.js";
import { Toolbar } from "@components/toolbar/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Toolbar/vertical",
    component: Toolbar,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as ComponentMeta<typeof Toolbar>;

type ToolbarStory = ComponentStoryObj<typeof Toolbar>;


export const Default: ToolbarStory = {
    storyName: "default",
    render: () => (
        <Toolbar orientation="vertical">
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <TextInput aria-label="Label" />
            <ToggleButton>Activate</ToggleButton>
            <RadioGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </RadioGroup>
        </Toolbar>
    )
};

export const Align: ToolbarStory = {
    storyName: "align",
    render: () => (
        <Inline gap={800}>
            <Toolbar alignX="start" orientation="vertical">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
                <RadioGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </RadioGroup>
            </Toolbar>
            <Toolbar alignX="end" orientation="vertical">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
                <RadioGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </RadioGroup>
            </Toolbar>
            <Toolbar alignX="center" orientation="vertical">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
                <RadioGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </RadioGroup>
            </Toolbar>
        </Inline>
    )
};

export const VerticalAlign: ToolbarStory = {
    storyName: "vertical align",
    render: () => (
        <Inline gap={800}>
            <Toolbar alignY="start" orientation="vertical" height="20rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
            </Toolbar>
            <Toolbar alignY="end" orientation="vertical" height="20rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
            </Toolbar>
            <Toolbar alignY="center" orientation="vertical" height="20rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <TextInput aria-label="Label" />
                <ToggleButton>Activate</ToggleButton>
            </Toolbar>
        </Inline>
    )
};
