/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from "@components/checkbox";
import { ErrorMessage, Field, GroupField, HelpMessage, Label, useFieldInputProps, ValidMessage } from "@components/field";
import { Inline } from "@components/layout";
import { TextInput } from "@components/text-input";
import { useCallback, useMemo, useState } from "react";
import { HtmlInput } from "@components/html";

const meta = {
    title: "Components/Field",
    component: Field,
    id: "field"
} as Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof Field>;

export const Input: Story = {
    render: () => (
        <Field>
            <Label>Space ID</Label>
            <TextInput placeholder="999-999-999" />
            <HelpMessage>Your space id is a 9-digit number available on the top right corner of your membership card.</HelpMessage>
        </Field>
    )
};

export const Group: Story = {
    render: () => (
        <Inline alignX="start" gap={800}>
            <GroupField>
                <Label>Your favorite galaxies?</Label>
                <CheckboxGroup>
                    <Checkbox value="milky-way">Milky Way</Checkbox>
                    <Checkbox value="andromeda">Andromeda</Checkbox>
                    <Checkbox value="medusa">Medusa</Checkbox>
                </CheckboxGroup>
                <HelpMessage>You must at least have travelled once to the galaxy.</HelpMessage>
            </GroupField>
            <GroupField>
                <Label>Your favorite galaxies?</Label>
                <CheckboxGroup orientation="vertical">
                    <Checkbox value="milky-way">Milky Way</Checkbox>
                    <Checkbox value="andromeda">Andromeda</Checkbox>
                    <Checkbox value="medusa">Medusa</Checkbox>
                </CheckboxGroup>
                <HelpMessage>You must at least have travelled once to the galaxy.</HelpMessage>
            </GroupField>
        </Inline>
    )
};

export const Required: Story = {
    render: () => (
        <Field required>
            <Label>Space ID</Label>
            <TextInput placeholder="999-999-999" />
            <HelpMessage>Your space id is a 9-digit number available at the top right corner of your membership card.</HelpMessage>
        </Field>
    )
};

export const Disabled: Story = {
    render: () => (
        <Field disabled>
            <Label>Space ID</Label>
            <TextInput placeholder="999-999-999" />
            <HelpMessage>Your space id is a 9-digit number available the top right corner of your membership card.</HelpMessage>
        </Field>
    )
};

export const Fluid: Story = {
    render: () => (
        <Field fluid>
            <Label>Space ID</Label>
            <TextInput placeholder="999-999-999" />
            <HelpMessage>Your space id is a 9-digit number available the top right corner of your membership card.</HelpMessage>
        </Field>
    )
};

export const Validation: Story = {
    render: () => {
        const [value, setValue] = useState("");

        const validationState = useMemo(() => {
            return value === ""
                ? null
                : /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ? "valid" : "invalid";
        }, [value]);

        const handleChange = useCallback(event => {
            setValue(event.target.value);
            console.log(event.target.value);
        }, [setValue]);

        return (
            <Field validationState={validationState}>
                <Label>Email</Label>
                <TextInput
                    onChange={handleChange}
                    placeholder="a@a.com"
                    value={value}
                />
                <ErrorMessage>This is an invalid email address.</ErrorMessage>
                <ValidMessage>A confirmation email is on it's way!</ValidMessage>
            </Field>
        );
    }
};

export const CustomInput: Story = {
    render: () => {
        function CustomInputComponent(props) {
            const [{ validationState, ...fieldProps }] = useFieldInputProps();

            return (
                <HtmlInput
                    {...props}
                    {...fieldProps}
                    border={validationState === "invalid" ? "danger" : "black"}
                    type="text"
                    width={{
                        base: "50%",
                        sm: "20%"
                    }}
                />
            );
        }

        const [value, setValue] = useState("");

        const isValid = value.length < 2;

        const handleChange = useCallback(event => {
            setValue(event.target.value);
            console.log(event.target.value);
        }, [setValue]);

        return (
            <Field validationState={isValid ? "valid" : "invalid"}>
                <Label>Short input</Label>
                <CustomInputComponent
                    onChange={handleChange}
                    value={value}
                />
                <ErrorMessage>Input is too long.</ErrorMessage>
            </Field>
        );
    }
};
