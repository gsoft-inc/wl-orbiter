import { InputGroup, useInputGroupProps, useInputGroupAddonProps } from "@components/input-group";
import { Item } from "@components/collection";
import { NumberInput } from "@components/number-input";
import { Select } from "@components/select";
import { Stack, Flex } from "@components/layout";
import { Text } from "@components/typography";
import { TextInput } from "@components/text-input";
import { HtmlInput } from "@components/html";
import { as, mergeProps } from "@components/shared";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/InputGroup",
    component: InputGroup,
    id: "input-group"
} as Meta<typeof InputGroup>;

export default meta;

type InputGroup = StoryObj<typeof meta>;

export const Default: InputGroup = {
    render: () => (
        <InputGroup>
            <TextInput aria-label="Elapsed days" />
            <Text>days</Text>
        </InputGroup>
    )
};

export const Inputs: InputGroup = {
    render: () => (
        <Stack>
            <InputGroup>
                <Text>https://</Text>
                <TextInput aria-label="Url" />
            </InputGroup>
            <InputGroup>
                <NumberInput aria-label="Number of passengers" />
                <Text>passengers</Text>
            </InputGroup>
        </Stack>
    )
};

export const TextAddon: InputGroup = {
    render: () => (
        <InputGroup>
            <Text>https://</Text>
            <TextInput aria-label="Url" />
            <Text>.space</Text>
        </InputGroup>
    )
};

export const SelectAddon: InputGroup = {
    render: () => (
        <InputGroup>
            <TextInput aria-label="Elapsed time" />
            <Select aria-label="Period" defaultSelectedKey="days">
                <Item key="days">days</Item>
                <Item key="weeks">weeks</Item>
                <Item key="years">years</Item>
            </Select>
        </InputGroup>
    )
};

export const Disabled: InputGroup = {
    render: () => (
        <InputGroup disabled>
            <TextInput aria-label="Duration" />
            <Select defaultSelectedKey="days">
                <Item key="days">days</Item>
                <Item key="weeks">weeks</Item>
                <Item key="years">years</Item>
            </Select>
        </InputGroup>
    )
};

export const ReadOnly: InputGroup = {
    render: () => (
        <InputGroup readOnly>
            <TextInput aria-label="Elapsed time" />
            <Select aria-label="Period" defaultSelectedKey="days">
                <Item key="days">days</Item>
                <Item key="weeks">weeks</Item>
                <Item key="years">years</Item>
            </Select>
        </InputGroup>
    )
};

export const Fluid: InputGroup = {
    render: () => (
        <InputGroup fluid>
            <Text>https://</Text>
            <TextInput aria-label="Url" />
            <Text>.space</Text>
        </InputGroup>
    )
};

export const CustomInputStory: InputGroup = {
    render: () => {
        function CustomInput(props) {
            const [inputGroupProps] = useInputGroupProps();

            return (
                <HtmlInput
                    {...mergeProps(
                        props,
                        {
                            type: "text",
                            width: "225px",
                            height: "2.5rem",
                            border: "hsla(223, 12%, 87%, 1)",
                            style: {
                                borderTopLeftRadius: "var(--o-ui-input-border-radius)",
                                borderBottomLeftRadius: "var(--o-ui-input-border-radius)"
                            }
                        },
                        inputGroupProps
                    )}
                />
            );
        }

        return (
            <InputGroup>
                <CustomInput aria-label="Number of passengers" />
                <Text>passengers</Text>
            </InputGroup>
        );
    }
};

export const CustomAddonStory: InputGroup = {
    render: () => {
        const FlexText = as(Flex, Text);

        function CustomAddon({ children, ...props }) {
            const [inputGroupAddonProps] = useInputGroupAddonProps();

            return (
                <FlexText
                    {...mergeProps(
                        props,
                        {
                            alignItems: "center",
                            height: "2.5rem",
                            border: "#ADACAC",
                            padding: "0px 10px",
                            style: {
                                borderTopRightRadius: "var(--o-ui-input-border-radius)",
                                borderBottomRightRadius: "var(--o-ui-input-border-radius)"
                            }
                        },
                        inputGroupAddonProps
                    )}
                >
                    {children}
                </FlexText>
            );
        }

        return (
            <InputGroup>
                <TextInput aria-label="Url" />
                <CustomAddon>.space</CustomAddon>
            </InputGroup>
        );
    }
};
