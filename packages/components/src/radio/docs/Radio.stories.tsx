import { Radio, RadioGroup } from "@components/radio";
import { Counter } from "@components/counter";
import { SparklesIcon } from "@hopper-ui/icons";
import { Text } from "@components/typography";
import { Tag } from "@components/tag";
import { Inline } from "@components/layout";
import { useCallback, useState } from "react";
import { as, useCheckableProps } from "@components/shared";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/RadioGroup",
    component: RadioGroup,
    id: "radio-group"
} as Meta<typeof RadioGroup>;

export default meta;

type RadioGroupStory = StoryObj<typeof meta>;

export const Default: RadioGroupStory = {
    render: () => (
        <RadioGroup>
            <Radio value="mars">Mars</Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

export const Selected: RadioGroupStory = {
    render: () => (
        <RadioGroup defaultValue="jupiter">
            <Radio value="mars">Mars</Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

export const DisabledRadio: RadioGroupStory = {
    render: () => (
        <RadioGroup>
            <Radio disabled value="mars">Mars</Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

export const DisabledGroup: RadioGroupStory = {
    render: () => (
        <RadioGroup disabled>
            <Radio value="mars">Mars</Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

export const Icon: RadioGroupStory = {
    render: () => (
        <RadioGroup>
            <Radio value="mars">
                <Text>Mars</Text>
                <SparklesIcon />
            </Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

export const CounterStory: RadioGroupStory = {
    render: () => (
        <RadioGroup>
            <Radio value="mars">
                <Text>Mars</Text>
                <Counter>6</Counter>
            </Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">
                <Text>Pluto</Text>
                <Counter>6</Counter>
            </Radio>
        </RadioGroup>
    )
};

export const Size: RadioGroupStory = {
    render: () => (
        <Inline alignY="start" gap={50}>
            <RadioGroup defaultValue="jupiter" size="md">
                <Radio value="mars">Mars</Radio>
                <Radio value="jupiter">Jupiter</Radio>
                <Radio value="pluto">Pluto</Radio>
            </RadioGroup>
            <RadioGroup defaultValue="jupiter" size="sm">
                <Radio value="mars">Mars</Radio>
                <Radio value="jupiter">Jupiter</Radio>
                <Radio value="pluto">Pluto</Radio>
            </RadioGroup>
        </Inline>
    )
};

export const ReverseRadio: RadioGroupStory = {
    render: () => (
        <Radio reverse value="mars">
            <Text>Mars</Text>
            <SparklesIcon />
            <Counter>6</Counter>
        </Radio>
    )
};

export const ReverseGroup: RadioGroupStory = {
    render: () => (
        <RadioGroup reverse>
            <Radio value="mars">
                <Text>Mars</Text>
                <SparklesIcon />
                <Counter>6</Counter>
            </Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">
                <Text>Pluto</Text>
                <Counter variant="divider">6</Counter>
            </Radio>
        </RadioGroup>
    )
};

export const Orientation: RadioGroupStory = {
    render: () => (
        <RadioGroup orientation="horizontal">
            <Radio value="mars">Mars</Radio>
            <Radio value="jupiter">Jupiter</Radio>
            <Radio value="pluto">Pluto</Radio>
        </RadioGroup>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const ValueSelectedValidation: RadioGroupStory = {
    render: () => {
        const [value, setValue] = useState(null);

        const isValid = value === "pluto";

        const handleChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <RadioGroup
                onChange={handleChange}
                validationState={isValid ? "valid" : "invalid"}
                value={value}
            >
                <Radio value="mars">Mars</Radio>
                <Radio value="jupiter">Jupiter</Radio>
                <Radio value="pluto">Pluto</Radio>
            </RadioGroup>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const CustomGroup: RadioGroupStory = {
    render: () => {
        const TagButton = as(Tag, "button");

        function CustomComponent({ value, children, ...rest }) {
            const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

            const handleCheck = useCallback(
                event => {
                    onCheck(event, value);
                },
                [value, onCheck]
            );

            return (
                <TagButton
                    {...rest}
                    {...checkableProps}
                    aria-checked={isChecked}
                    backgroundColor={isChecked ? "primary" : "warning-weak"}
                    color={isChecked ? "white" : undefined}
                    onClick={handleCheck}
                    value={value}
                >
                    {children}
                </TagButton>
            );
        }

        return (
            <RadioGroup gap={80} orientation="horizontal">
                <CustomComponent value="mars">Mars</CustomComponent>
                <CustomComponent value="jupiter">Jupiter</CustomComponent>
                <CustomComponent value="pluton">Pluton</CustomComponent>
            </RadioGroup>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const ControlledRadioGroup: RadioGroupStory = {
    render: () => {
        const [value, setValue] = useState(null);

        const handleChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <RadioGroup
                onChange={handleChange}
                value={value}
            >
                <Radio value="mars">Mars</Radio>
                <Radio value="jupiter">Jupiter</Radio>
                <Radio value="pluto">Pluto</Radio>
            </RadioGroup>
        );
    }
};
