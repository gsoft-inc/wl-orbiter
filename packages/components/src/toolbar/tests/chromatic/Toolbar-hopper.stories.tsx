import { Field, Label } from "@components/field/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Radio, RadioGroup } from "@components/radio/index.ts";
import { ToggleButton, ToggleIconButton } from "@components/button/index.ts";

import { CheckboxGroup } from "@components/checkbox/index.ts";
import { Div } from "@components/html/index.ts";
import { InputGroup } from "@components/input-group/index.ts";
import { NotificationIcon } from "@hopper-ui/icons";
import { Text } from "@components/typography/index.ts";
import { TextInput } from "@components/text-input/index.ts";
import { Toolbar } from "@components/toolbar/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Toolbar-hopper",
    component: Toolbar,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Toolbar>;

export default meta;

type ToolbarStory = StoryObj<typeof meta>;

export const Default: ToolbarStory = {
    name: "default",
    render: () => (
        <Toolbar>
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <ToggleIconButton aria-label="Activate notification">
                <NotificationIcon />
            </ToggleIconButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Toolbar>
    )
};

export const DisabledElement: ToolbarStory = {
    name: "disabled element",
    render: () => (
        <Toolbar>
            <CheckboxGroup disabled>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <ToggleIconButton aria-label="Activate notification">
                <NotificationIcon />
            </ToggleIconButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Toolbar>
    )
};

export const Fluid: ToolbarStory = {
    name: "fluid",
    render: () => (
        <Toolbar fluid>
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <ToggleButton fluid>Turn On</ToggleButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Toolbar>
    )
};

export const Disabled: ToolbarStory = {
    name: "disabled",
    render: () => (
        <Toolbar disabled>
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <ToggleButton fluid>Turn On</ToggleButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Toolbar>
    )
};

export const Gap: ToolbarStory = {
    name: "gap",
    render: () => (
        <Toolbar gap="8rem">
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <ToggleIconButton aria-label="Activate notification">
                <NotificationIcon />
            </ToggleIconButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Toolbar>
    )
};

export const Align: ToolbarStory = {
    name: "align",
    render: () => (
        <Stack>
            <Toolbar alignX="start">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
            <Toolbar alignX="end">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
            <Toolbar alignX="center">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
        </Stack>
    )
};

export const VerticalAlign: ToolbarStory = {
    name: "vertical align",
    render: () => (
        <Inline gap="5rem">
            <Toolbar alignY="start" height="4.5rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
            <Toolbar alignY="end" height="4.5rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
            <Toolbar alignY="center" height="4.5rem">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
            </Toolbar>
        </Inline>
    )
};

export const NoWrap: ToolbarStory = {
    name: "no wrap",
    render: () => (
        <Div width={960}>
            <Toolbar wrap={false}>
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
                <ToggleIconButton aria-label="Activate notification">
                    <NotificationIcon />
                </ToggleIconButton>
                <RadioGroup>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </Toolbar>
        </Div>
    )
};

export const Complex: ToolbarStory = {
    name: "complex",
    render: () => (
        <Toolbar>
            <CheckboxGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </CheckboxGroup>
            <TextInput aria-label="Label" />
            <ToggleButton>On</ToggleButton>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup>
                <ToggleButton value="1">1</ToggleButton>
                <ToggleButton value="2">2</ToggleButton>
                <ToggleButton value="3">3</ToggleButton>
            </RadioGroup>
            <InputGroup>
                <TextInput aria-label="Label" />
                <Text>Days</Text>
            </InputGroup>
        </Toolbar>
    )
};

export const FieldsLabel: ToolbarStory = {
    name: "fields + label",
    render: () => (
        <Toolbar alignY="end">
            <Field>
                <Label>Package</Label>
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
            </Field>
            <Field>
                <Label>Search</Label>
                <TextInput aria-label="Label" />
            </Field>
            <ToggleButton>Activate</ToggleButton>
        </Toolbar>
    )
};

export const Styling: ToolbarStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Toolbar border="warning">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
            </Toolbar>
            <Toolbar className="border-red">
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
            </Toolbar>
            <Toolbar style={{ border: "1px solid red" }}>
                <CheckboxGroup>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                    <ToggleButton value="3">3</ToggleButton>
                </CheckboxGroup>
            </Toolbar>
        </Stack>
    )
};
