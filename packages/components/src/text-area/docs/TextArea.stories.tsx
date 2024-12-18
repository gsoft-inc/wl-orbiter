import { TextArea } from "@components/text-area/index.ts";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage, Field, HelpMessage } from "@components/field/index.ts";

const meta = {
    title: "Components/TextArea",
    component: TextArea,
    id: "textarea"
} as Meta<typeof TextArea>;

export default meta;

type TextAreaStory = StoryObj<typeof meta>;

export const Default: TextAreaStory = {
    render: () => (
        <TextArea placeholder="Why should you go to space?" />
    )
};

export const Value: TextAreaStory = {
    render: () => (
        <TextArea defaultValue="To fly high!" placeholder="Why should you go to space?" />
    )
};

export const MaxRows: TextAreaStory = {
    render: () => (
        <TextArea maxRows={5} placeholder="Why should you go to space?" />
    )
};

export const ReadOnly: TextAreaStory = {
    render: () => (
        <TextArea placeholder="Why should you go to space?" readOnly />
    )
};

export const Rows: TextAreaStory = {
    render: () => (
        <TextArea placeholder="Why should you go to space?" rows={8} />
    )
};

export const Disabled: TextAreaStory = {
    render: () => (
        <TextArea disabled placeholder="Why should you go to space?" />
    )
};

export const Loading: TextAreaStory = {
    render: () => (
        <TextArea loading placeholder="Why should you go to space?" />
    )
};

export const Fluid: TextAreaStory = {
    render: () => (
        <TextArea fluid placeholder="Why should you go to space?" />
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const LengthValidation: TextAreaStory = {
    render: () => {
        const MaxValue = 25;

        const [value, setValue] = useState("");

        const handleValueChange = useCallback(
            event => {
                setValue(event.target.value);
                console.log(event.target.value);
            },
            [setValue]
        );

        const isValid = value.length <= MaxValue;

        return (
            <Field validationState={isValid ? undefined : "invalid"}>
                <TextArea
                    onValueChange={handleValueChange}
                    placeholder={`Why should you go to space? (max ${MaxValue} characters)`}
                    value={value}
                />
                <HelpMessage>{`${MaxValue - value.length} characters left.`}</HelpMessage>
                <ErrorMessage>Maximum characters exceeded</ErrorMessage>
            </Field>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: TextAreaStory = {
    render: () => {
        const [value, setValue] = useState("");

        const handleValueChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <TextArea
                onValueChange={handleValueChange}
                placeholder="Where to?"
                value={value}
            />
        );
    }
};


