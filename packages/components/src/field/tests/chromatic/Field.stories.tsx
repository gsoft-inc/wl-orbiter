import { DateInput, DateRangeInput } from "@components/date-input";
import { ErrorMessage, Field, HelpMessage, Label, ValidMessage } from "@components/field";
import { Inline, Stack } from "@components/layout";
import { PasswordInput, TextInput } from "@components/text-input";

import { Autocomplete } from "@components/autocomplete";
import { Checkbox } from "@components/checkbox";
import { Div } from "@components/html";
import { InputGroup } from "@components/input-group";
import { Item } from "@components/collection";
import { NumberInput } from "@components/number-input";
import { Select } from "@components/select";
import { Switch } from "@components/switch";
import { Text } from "@components/typography";
import { TextArea } from "@components/text-area";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Field",
    component: Field
} as Meta<typeof Field>;

export default meta;

type FieldStory = StoryObj<typeof meta>;

export const Default: FieldStory = {
    name: "default",
    render: () => (
        <Field>
            <TextInput placeholder="Where to?" />
        </Field>
    )
};

export const FieldLabel: FieldStory = {
    name: "label",
    render: () => (
        <Field>
            <Label>Where to?</Label>
            <TextInput />
        </Field>
    )
};

export const Message: FieldStory = {
    name: "message",
    render: () => (
        <Stack gap="3.5rem">
            <Field>
                <TextInput placeholder="Where to?" />
                <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
            </Field>
            <Field>
                <TextInput placeholder="Where to?" />
                <HelpMessage>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</HelpMessage>
            </Field>
        </Stack>
    ),
    parameters: {
        a11y: {
            config: {
                rules: [{ id: "label-title-only", enabled: false }]
            }
        }
    }
};

export const Validation: FieldStory = {
    name: "validation",
    render: () => (
        <Inline>
            <Field>
                <Label>Where to?</Label>
                <TextInput />
                <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
                <ValidMessage>Thank you!</ValidMessage>
                <ErrorMessage>This is not a valid destination.</ErrorMessage>
            </Field>
            <Field validationState="valid">
                <Label>Where to?</Label>
                <TextInput />
                <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
                <ValidMessage>Thank you!</ValidMessage>
                <ErrorMessage>This is not a valid destination.</ErrorMessage>
            </Field>
            <Field validationState="invalid">
                <Label>Where to?</Label>
                <TextInput />
                <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
                <ValidMessage>Thank you!</ValidMessage>
                <ErrorMessage>This is not a valid destination.</ErrorMessage>
            </Field>
        </Inline>
    )
};


export const Fluid: FieldStory = {
    name: "fluid",
    render: () => (
        <Stack>
            <Div>
                <Field fluid>
                    <Label>Where to?</Label>
                    <TextInput />
                    <HelpMessage>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</HelpMessage>
                </Field>
            </Div>
            <Div className="w-10">
                <Field fluid>
                    <Label>Where to?</Label>
                    <TextInput />
                    <HelpMessage>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</HelpMessage>
                </Field>
            </Div>
        </Stack>
    )
};

export const Required: FieldStory = {
    name: "required",
    render: () => (
        <Field required>
            <Label>Where to?</Label>
            <TextInput />
            <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
        </Field>
    )
};

export const FieldTextInput: FieldStory = {
    name: "text input",
    render: () => (
        <Field>
            <Label>Where to?</Label>
            <TextInput placeholder="Ex. Mars" />
            <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
        </Field>
    )
};

export const FieldPasswordInput: FieldStory = {
    name: "password input",
    render: () => (
        <Field>
            <Label>Where to?</Label>
            <PasswordInput />
            <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
        </Field>
    )
};

export const FieldNumberInput: FieldStory = {
    name: "number input",
    render: () => (
        <Field>
            <Label>Age</Label>
            <NumberInput placeholder="Ex. 89" />
            <HelpMessage>How long ago are you born?</HelpMessage>
        </Field>
    )
};

export const FieldTextArea: FieldStory = {
    name: "text area",
    render: () => (
        <Field>
            <Label>Where to?</Label>
            <TextArea placeholder="Ex. Mars" />
            <HelpMessage>Must be a planet in earth solar system.</HelpMessage>
        </Field>
    )
};

export const FieldDateInput: FieldStory = {
    name: "date input",
    render: () => (
        <Field>
            <Label>When?</Label>
            <DateInput placeholder="dd/mm/yyyy" />
            <HelpMessage>When do you leave?</HelpMessage>
        </Field>
    )
};

export const FieldDateRangeInput: FieldStory = {
    name: "date range input",
    render: () => (
        <Field>
            <Label>When?</Label>
            <DateRangeInput placeholder="dd/mm/yyyy" />
            <HelpMessage>When do you leave?</HelpMessage>
        </Field>
    )
};

export const FieldCheckbox: FieldStory = {
    name: "checkbox",
    render: () => (
        <Field>
            <Checkbox>Milky Way</Checkbox>
            <HelpMessage>Must be reachable within 200,000 light-years.</HelpMessage>
        </Field>
    )
};

export const FieldSwitch: FieldStory = {
    name: "switch",
    render: () => (
        <Field>
            <Switch>Milky Way</Switch>
            <HelpMessage>Engines must cooldown for 30 minutes between startups.</HelpMessage>
        </Field>
    )
};

export const FieldSelect: FieldStory = {
    name: "select",
    render: () => (
        <Field>
            <Label>Planet</Label>
            <Select placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <HelpMessage>Must be a planet of the solar system.</HelpMessage>
        </Field>
    )
};

export const FieldAutocomplete: FieldStory = {
    name: "autocomplete",
    render: () => (
        <Field>
            <Label>Planet</Label>
            <Autocomplete placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <HelpMessage>Must be a planet of the solar system.</HelpMessage>
        </Field>
    )
};

export const FieldInputGroup: FieldStory = {
    name: "input group",
    render: () => (
        <Stack>
            <Field>
                <Label>Launch date</Label>
                <InputGroup>
                    <TextInput />
                    <Text>Days</Text>
                </InputGroup>
                <HelpMessage>In how many days does your flight will launch?</HelpMessage>
            </Field>
            <Inline>
                <Field validationState="invalid">
                    <Label>Launch date</Label>
                    <InputGroup>
                        <TextInput />
                        <Text>Days</Text>
                    </InputGroup>
                    <HelpMessage>In how many days does your flight will launch?</HelpMessage>
                </Field>
            </Inline>
        </Stack>
    )
};

export const Zoom: FieldStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Field>
                    <Label>Where to?</Label>
                    <TextInput />
                </Field>
            </Div>
            <Div className="zoom-out">
                <Field>
                    <Label>Where to?</Label>
                    <TextInput />
                </Field>
            </Div>
        </Stack>
    )
};

export const Styling: FieldStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Field border="warning">
                <Label>Launch date</Label>
                <TextInput />
            </Field>
            <Field className="border-red">
                <Label>Launch date</Label>
                <TextInput />
            </Field>
            <Field style={{ border: "1px solid red" }}>
                <Label>Launch date</Label>
                <TextInput />
            </Field>
        </Inline>
    )
};
