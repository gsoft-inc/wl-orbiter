import { EditIcon } from "@hopper-ui/icons";
import { Button } from "@components/button";
import { Inline } from "@components/layout";
import { NumberInput } from "@components/number-input";
import { isNil } from "@components/shared";
import { useCallback, useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/NumberInput",
    component: NumberInput,
    id: "number-input"
} as Meta<typeof NumberInput>;

export default meta;

type NumberInputStory = StoryObj<typeof meta>;

export const Default: NumberInputStory = {
    render: () => (
        <NumberInput placeholder="Age" />
    )
};

export const Value: NumberInputStory = {
    render: () => (
        <Inline>
            <NumberInput defaultValue={18} placeholder="Age" />
            <NumberInput defaultValue={155.75} placeholder="Weight" step={0.1} />
        </Inline>
    )
};

export const MinMax: NumberInputStory = {
    render: () => (
        <NumberInput defaultValue={18} max={30} min={15} placeholder="Age" />
    )
};

export const Icon: NumberInputStory = {
    render: () => (
        <NumberInput icon={<EditIcon />} placeholder="Age" />
    )
};

export const Disabled: NumberInputStory = {
    render: () => (
        <NumberInput disabled placeholder="Age" />
    )
};

export const ReadOnly: NumberInputStory = {
    render: () => (
        <NumberInput defaultValue={18} placeholder="Age" readOnly />
    )
};

export const Loading: NumberInputStory = {
    render: () => (
        <NumberInput loading placeholder="Age" />
    )
};

export const Fluid: NumberInputStory = {
    render: () => (
        <NumberInput fluid placeholder="Age" />
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const RequiredAgeValidation: NumberInputStory = {
    render: () => {
        const [value, setValue] = useState<number | null>(18);

        const handleValueChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        const handleClearClick = useCallback(() => {
            setValue(null);
        }, [setValue]);

        const isValid = useMemo(() => !isNil(value), [value]);

        return (
            <Inline alignY="center">
                <NumberInput
                    min={1}
                    onValueChange={handleValueChange}
                    placeholder="Age"
                    validationState={isValid ? "valid" : "invalid"}
                    value={value}
                />
                <Button
                    onClick={handleClearClick}
                    variant="tertiary"
                >
                    Clear
                </Button>
            </Inline>
        );
    }
};

export const Controlled: NumberInputStory = {
    render: () => {
        const [value, setValue] = useState(null);

        const handleValueChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <NumberInput
                onValueChange={handleValueChange}
                placeholder="Where to?"
                value={value}
            />
        );
    }
};
