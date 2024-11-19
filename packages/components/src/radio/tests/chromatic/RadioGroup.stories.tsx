import { Field, HelpMessage, Label } from "@components/field/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Radio, RadioGroup } from "@components/radio/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Div } from "@components/html/index.ts";
import { Tag } from "@components/tag/index.ts";
import { Text } from "@components/typography/index.ts";
import { ToggleButton } from "@components/button/index.ts";
import { ComponentProps, useCallback } from "react";
import { as, useCheckableProps } from "@components/shared/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/RadioGroup",
    component: RadioGroup,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof RadioGroup>;

export default meta;

type RadioGroupStory = StoryObj<typeof meta>;

const TagAsButton = as(Tag, "button");
type TagAsButtonProps = ComponentProps<typeof TagAsButton>;

function CustomComponent({
    value,
    children,
    ...rest
}: TagAsButtonProps & { value: string }) {
    const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

    const handleCheck = useCallback(event => {
        onCheck(event, value);
    }, [value, onCheck]);

    return (
        <TagAsButton
            {...rest}
            {...checkableProps}
            value={value}
            onClick={handleCheck}
            color={isChecked ? "white" : undefined}
            backgroundColor={isChecked ? "sapphire-600" : "rock-600"}
        >
            {children}
        </TagAsButton>
    );
}

export const Default: RadioGroupStory = {
    name: "default",
    render: () => (
        <Inline alignY="start">
            <RadioGroup size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Selection: RadioGroupStory = {
    name: "selection",
    render: () => (
        <Inline alignY="start">
            <RadioGroup value="2" size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup value="2">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup defaultValue="2">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Number: RadioGroupStory = {
    name: "number",
    render: () => (
        <Inline alignY="start">
            <RadioGroup defaultValue="2" size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup defaultValue="2">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Disabled: RadioGroupStory = {
    name: "disabled",
    render: () => (
        <Inline alignY="start">
            <RadioGroup disabled size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup disabled>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const DisabledRadio: RadioGroupStory = {
    name: "disabled radio",
    render: () => (
        <Inline alignY="start">
            <RadioGroup size="sm">
                <Radio disabled value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup>
                <Radio disabled value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Gap: RadioGroupStory = {
    name: "gap",
    render: () => (
        <Inline alignY="start">
            <RadioGroup gap={800} size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup gap={800}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Wrap: RadioGroupStory = {
    name: "wrap",
    render: () => (
        <Div width={800}>
            <RadioGroup wrap orientation="horizontal">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map(x =>
                    <Radio width={400} value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
};

export const NoWrap: RadioGroupStory = {
    name: "no wrap",
    render: () => (
        <Div width={800}>
            <RadioGroup wrap={false} orientation="horizontal">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map(x =>
                    <Radio width={400} value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
};

export const OverflowWrapped: RadioGroupStory = {
    name: "overflow wrapped",
    render: () => (
        <Div width={800}>
            <RadioGroup wrap orientation="horizontal">
                {["1", "2", "3", "Neptune", "5", "6", "7", "8"].map(x =>
                    <Radio value={x} key={x}>{x}</Radio>
                )}
            </RadioGroup>
        </Div>
    )
};

export const ToggleButtons: RadioGroupStory = {
    name: "toggle buttons",
    render: () => (
        <Stack>
            <RadioGroup gap={80} orientation="horizontal" defaultValue="2" size="sm">
                <ToggleButton variant="secondary" value="1">1</ToggleButton>
                <ToggleButton variant="secondary" value="2">2</ToggleButton>
                <ToggleButton variant="secondary" value="3">3</ToggleButton>
            </RadioGroup>
            <RadioGroup gap={80} orientation="horizontal" defaultValue="2">
                <ToggleButton variant="secondary" value="1">1</ToggleButton>
                <ToggleButton variant="secondary" value="2">2</ToggleButton>
                <ToggleButton variant="secondary" value="3">3</ToggleButton>
            </RadioGroup>
        </Stack>
    )
};

export const CustomComponents: RadioGroupStory = {
    name: "custom components",
    render: () => (
        <Stack>
            <RadioGroup gap={80} orientation="horizontal" defaultValue="2" size="sm">
                <CustomComponent value="1">1</CustomComponent>
                <CustomComponent value="2">2</CustomComponent>
                <CustomComponent value="3">3</CustomComponent>
            </RadioGroup>
            <RadioGroup gap={80} orientation="horizontal" defaultValue="2">
                <CustomComponent value="1">1</CustomComponent>
                <CustomComponent value="2">2</CustomComponent>
                <CustomComponent value="3">3</CustomComponent>
            </RadioGroup>
        </Stack>
    )
};

export const Validation: RadioGroupStory = {
    name: "validation",
    render: () => (
        <Inline gap={800} alignY="start">
            <RadioGroup validationState="invalid" size="sm">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup validationState="invalid">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup validationState="valid">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Styling: RadioGroupStory = {
    name: "styling",
    render: () => (
        <Inline>
            <RadioGroup border="warning">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup className="bg-red">
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
            <RadioGroup style={{ backgroundColor: "red" }}>
                <Radio value="1">1</Radio>
                <Radio value="2">2</Radio>
                <Radio value="3">3</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const Reverse: RadioGroupStory = {
    name: "reverse",
    render: () => (
        <Stack inline>
            <Field>
                <Label>Select a package</Label>
                <RadioGroup reverse>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </Field>
            <Field>
                <Label>Select a package</Label>
                <RadioGroup reverse>
                    <Radio value="1">1</Radio>
                    <Radio value="2">A very long option to read while you wait for the countdown to mars.</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </Field>
            <Inline>
                <RadioGroup orientation="horizontal" reverse>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">
                        <Text>3</Text>
                        <Counter>60</Counter>
                    </Radio>
                </RadioGroup>
                <Div border="1px solid #000" width="100%" height={480}></Div>
            </Inline>
        </Stack>
    )
};
