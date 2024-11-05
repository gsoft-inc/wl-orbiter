import { Inline, Stack } from "@components/layout";
import { Select, useSelect, type SelectProps } from "@components/select";

import { Button } from "@components/button";
import { Div } from "@components/html";
import { Item } from "@components/collection";
import { Listbox } from "@components/listbox";
import { Overlay } from "@components/overlay";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Select",
    component: Select,
    parameters: {
        chromatic: {
            delay: 100,
            pauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Select>;

export default meta;

type SelectStory = StoryObj<typeof meta>;

export const ConditionalRendering: SelectStory = {
    name: "conditional rendering",
    render: () => (
        <Select defaultOpen placeholder="Select a planet" aria-label="Planets">
            {false && <Item key="earth">Earth</Item>}
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const Name: SelectStory = {
    name: "name",
    render: () => (
        <Select name="planet" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const Zoom: SelectStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Select placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
            <Div className="zoom-out">
                <Select placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const Styling: SelectStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Select border="warning" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Select>
            <Select className="border-red" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Select>
            <Select style={{ border: "1px solid red" }} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Select>
        </Inline>
    )
};



function CustomSelect({
    open,
    placeholder,
    "aria-label": ariaLabel,
    children,
    ...rest
}: SelectProps) {
    const { selectedItem, triggerProps, overlayProps, listboxProps } = useSelect(children, {
        open,
        ariaLabel
    });

    return (
        <>
            <Button
                {...rest}
                {...triggerProps}
                variant="secondary"
            >
                {selectedItem?.text ?? placeholder}
            </Button>
            <Overlay {...overlayProps}>
                <Listbox {...listboxProps} />
            </Overlay>
        </>
    );
}

export const CustomSelectStory: SelectStory = {
    name: "custom select",
    render: () => (
        <Inline>
            <CustomSelect placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </CustomSelect>
            <CustomSelect open placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </CustomSelect>
        </Inline>
    )
};

// createTestSuite(<Select variant="outline" />, stories("/outline"))
//     .add("without placeholder", () =>
//         <Select aria-label="Planets">
//             <Item key="earth">Earth</Item>
//             <Item key="mars">Mars</Item>
//             <Item key="saturn">Saturn</Item>
//         </Select>
//     );

// createTestSuite(<Select variant="ghost" />, stories("/ghost"));
