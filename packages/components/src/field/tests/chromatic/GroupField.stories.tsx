import { Button, ButtonGroup } from "@components/button";
import { Checkbox, CheckboxGroup } from "@components/checkbox";
import { DateRangeInput } from "@components/date-input";
import { GroupField, HelpMessage, Label } from "@components/field";
import { Inline, Stack } from "@components/layout";
import { Radio, RadioGroup } from "@components/radio";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/GroupField",
    component: GroupField
} as ComponentMeta<typeof GroupField>;

type GroupFieldStory = ComponentStoryObj<typeof GroupField>;

export const GroupFieldCheckboxGroup: GroupFieldStory = {
    storyName: "checkbox group",
    render: () => (
        <Stack gap={800}>
            <GroupField>
                <Label>Select your packages</Label>
                <CheckboxGroup>
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </GroupField>
            <GroupField>
                <Label>Select your packages</Label>
                <CheckboxGroup orientation="vertical">
                    <Checkbox value="1">1</Checkbox>
                    <Checkbox value="2">2</Checkbox>
                    <Checkbox value="3">3</Checkbox>
                </CheckboxGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </GroupField>
        </Stack>
    )
};

export const GroupFieldRadioGroup: GroupFieldStory = {
    storyName: "radio group",
    render: () => (
        <Inline gap={800} alignY="end">
            <GroupField>
                <Label>Select your packages</Label>
                <RadioGroup>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </GroupField>
            <GroupField>
                <Label>Select your packages</Label>
                <RadioGroup orientation="horizontal">
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
                <HelpMessage>You can find a detailed description of our flight packages on our website.</HelpMessage>
            </GroupField>
        </Inline>
    )
};

export const GroupFieldButtonGroup: GroupFieldStory = {
    storyName: "button group",
    render: () => (
        <Stack gap={800}>
            <GroupField>
                <Label>Would you like to rate your experience?</Label>
                <ButtonGroup>
                    <Button variant="secondary">No, thanks</Button>
                    <Button variant="secondary">Remind me later</Button>
                    <Button variant="primary">Rate Now</Button>
                </ButtonGroup>
                <HelpMessage>It will only take a minute of your time.</HelpMessage>
            </GroupField>
            <GroupField>
                <Label>Would you like to rate your experience?</Label>
                <ButtonGroup orientation="vertical">
                    <Button variant="secondary">No, thanks</Button>
                    <Button variant="secondary">Remind me later</Button>
                    <Button variant="primary">Rate Now</Button>
                </ButtonGroup>
                <HelpMessage>It will only take a minute of your time.</HelpMessage>
            </GroupField>
        </Stack>
    )
};

export const GroupFieldDateRangeInput: GroupFieldStory = {
    storyName: "date range input",
    render: () => (
        <GroupField>
            <Label>When?</Label>
            <DateRangeInput placeholder="dd/mm/yyyy" />
            <HelpMessage>When do you leave?</HelpMessage>
        </GroupField>
    )
};

export const Styling: GroupFieldStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <GroupField border="warning-border">
                <RadioGroup>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </GroupField>
            <GroupField className="border-red">
                <RadioGroup>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </GroupField>
            <GroupField style={{ border: "1px solid red" }}>
                <RadioGroup>
                    <Radio value="1">1</Radio>
                    <Radio value="2">2</Radio>
                    <Radio value="3">3</Radio>
                </RadioGroup>
            </GroupField>
        </Inline>
    )
};
