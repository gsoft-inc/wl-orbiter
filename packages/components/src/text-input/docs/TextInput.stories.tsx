import { TextInput, PasswordInput, SearchInput } from "@components/text-input/index.ts";
import { EditIcon } from "@hopper-ui/icons";
import { CrossButton } from "@components/button/index.ts";
import { Inline } from "@components/layout/index.ts";
import { useCallback, useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/TextInput",
    component: TextInput,
    id: "textInput"
} as Meta<typeof TextInput>;

export default meta;

type TextInputStory = StoryObj<typeof meta>;

export const Default: TextInputStory = {
    render: () => (
        <TextInput placeholder="Where to?" />
    )
};

export const Value: TextInputStory = {
    render: () => (
        <TextInput defaultValue="Deep space" placeholder="Where to?" />
    )
};

export const IconStory: TextInputStory = {
    render: () => (
        <TextInput icon={<EditIcon />} placeholder="Where to?" />
    )
};

export const ButtonStory: TextInputStory = {
    render: () => (
        <TextInput button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
    )
};

export const Disabled: TextInputStory = {
    render: () => (
        <TextInput disabled placeholder="Where to?" />
    )
};

export const Readonly: TextInputStory = {
    render: () => (
        <TextInput defaultValue="Deep space" placeholder="Where to?" readOnly />
    )
};

export const Loading: TextInputStory = {
    render: () => (
        <TextInput loading placeholder="Where to?" />
    )
};

export const Size: TextInputStory = {
    render: () => (
        <Inline alignY="center">
            <TextInput placeholder="Where to?" size="sm" />
            <TextInput placeholder="Where to?" />
        </Inline>
    )
};

export const Fluid: TextInputStory = {
    render: () => (
        <TextInput fluid placeholder="Where to?" />
    )
};

export const Search: TextInputStory = {
    render: () => (
        <SearchInput placeholder="Where to?" />
    )
};

export const Password: TextInputStory = {
    render: () => (
        <PasswordInput placeholder="What's your secret?" validationState="invalid" />
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const EmailValidation: TextInputStory = {
    render: () => {
        const [value, setValue] = useState("me@spacex.com");

        const handleValueChange = useCallback(event => {
            setValue(event.target.value);
            console.log(event.target.value);
        }, [setValue]);

        const isValid = useMemo(() => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value), [value]);

        return (
            <TextInput
                onValueChange={handleValueChange}
                placeholder="Enter your email"
                validationState={isValid ? "valid" : "invalid"}
                value={value}
            />
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: TextInputStory = {
    render: () => {
        const [value, setValue] = useState("");

        const handleValueChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <TextInput
                onValueChange={handleValueChange}
                placeholder="Where to?"
                value={value}
            />
        );
    }
};
