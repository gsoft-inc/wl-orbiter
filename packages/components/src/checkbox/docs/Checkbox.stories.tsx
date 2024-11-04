import { Checkbox, CheckboxGroup, useCheckableProps } from "@components/checkbox";
import { Counter } from "@components/counter";
import { SparklesIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout";
import { Text } from "@components/typography";
import { Tag } from "@components/tag";
import { as } from "@components/shared";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    id: "checkbox"
} as Meta<typeof Checkbox>;

export default meta;

type CheckboxStory = StoryObj<typeof meta>;

export const Default: CheckboxStory = {
    render: () => (
        <Checkbox>Milky Way</Checkbox>
    )
};

export const Label: CheckboxStory = {
    render: () => (
        <Checkbox aria-label="Milky Way" />
    )
};

export const Checked: CheckboxStory = {
    render: () => (
        <Checkbox defaultChecked>Milky Way</Checkbox>
    )
};

export const Indeterminate: CheckboxStory = {
    render: () => (
        <Checkbox defaultIndeterminate>Milky Way</Checkbox>
    )
};

export const Disabled: CheckboxStory = {
    render: () => (
        <Checkbox disabled>Milky Way</Checkbox>
    )
};

export const Icon: CheckboxStory = {
    render: () => (
        <Checkbox>
            <Text>Milky Way</Text>
            <SparklesIcon />
        </Checkbox>
    )
};

export const CounterStory: CheckboxStory = {
    render: () => (
        <Checkbox>
            <Text>Andromeda</Text>
            <Counter>6</Counter>
        </Checkbox>
    )
};

export const Size: CheckboxStory = {
    render: () => (
        <Inline alignY="center">
            <Checkbox size="sm">Milky Way</Checkbox>
            <Checkbox>Milky Way</Checkbox>
        </Inline>
    )
};

export const Reverse: CheckboxStory = {
    render: () => (
        <Checkbox reverse>
            <Text>Milky Way</Text>
            <SparklesIcon />
            <Counter variant="divider">6</Counter>
        </Checkbox>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const CheckedValidation: CheckboxStory = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        const isValid = isChecked;

        const handleChange = useCallback(() => {
            setIsChecked(x => !x);
            console.log(!isChecked);
        }, [isChecked, setIsChecked]);

        return (
            <Checkbox
                checked={isChecked}
                onChange={handleChange}
                validationState={isValid ? "valid" : "invalid"}
            >
                Milky Way
            </Checkbox>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: CheckboxStory = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        const handleChange = useCallback(() => {
            setIsChecked(x => !x);
            console.log(!isChecked);
        }, [isChecked, setIsChecked]);

        return (
            <Checkbox
                checked={isChecked}
                onChange={handleChange}
            >
                {isChecked ? "On" : "Off"}
            </Checkbox>
        );
    }
};

export const CheckboxGroupStory: CheckboxStory = {
    render: () => (
        <CheckboxGroup>
            <Checkbox value="milky-way">Milky Way</Checkbox>
            <Checkbox value="andromeda">Andromeda</Checkbox>
            <Checkbox value="medusa">Medusa</Checkbox>
        </CheckboxGroup>
    )
};

export const Orentation: CheckboxStory = {
    render: () => (
        <CheckboxGroup orientation="vertical">
            <Checkbox value="milky-way" >Milky Way</Checkbox>
            <Checkbox value="andromeda">Andromeda</Checkbox>
            <Checkbox value="medusa">Medusa</Checkbox>
        </CheckboxGroup>
    )
};

export const ReverseStory: CheckboxStory = {
    render: () => (
        <CheckboxGroup reverse>
            <Checkbox value="milky-way" >Milky Way</Checkbox>
            <Checkbox value="andromeda">Andromeda</Checkbox>
            <Checkbox value="medusa">Medusa</Checkbox>
        </CheckboxGroup>
    )
};

export const AllCheckedValidation: CheckboxStory = {
    render: () => {
        const [value, setValue] = useState([]);

        const isValid = ["milky-way", "andromeda", "medusa"].every(x => value.includes(x));

        const handleChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <CheckboxGroup
                onChange={handleChange}
                validationState={isValid ? "valid" : "invalid"}
                value={value}
            >
                <Checkbox value="milky-way">Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        );
    }
};

export const ControlledCheckboxGroup: CheckboxStory = {
    render: () => {
        const [value, setValue] = useState([]);

        const handleChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <CheckboxGroup
                onChange={handleChange}
                value={value}
            >
                <Checkbox value="milky-way">Milky Way</Checkbox>
                <Checkbox value="andromeda">Andromeda</Checkbox>
                <Checkbox value="medusa">Medusa</Checkbox>
            </CheckboxGroup>
        );
    }
};

export const CustomGroup: CheckboxStory = {
    render: () => {
        const TagButton = as(Tag, "button");

        function CustomComponent({
            value,
            children,
            ...rest
        }) {
            const [{ checked: isChecked, onCheck, ...checkableProps }] = useCheckableProps({ value });

            const handleCheck = useCallback(event => {
                onCheck(event, value);
            }, [value, onCheck]);

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
            <CheckboxGroup gap={80}>
                <CustomComponent value="milky-way">Milky Way</CustomComponent>
                <CustomComponent value="andromeda">Andromeda</CustomComponent>
                <CustomComponent value="medusa">Medusa</CustomComponent>
            </CheckboxGroup>
        );
    }
};
