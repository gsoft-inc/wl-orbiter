import { Avatar } from "@components/avatar/index.ts";
import { Select, useSelect } from "@components/select/index.ts";
import { Button } from "@components/button/index.ts";
import { DisclosureArrow } from "@components/disclosure/index.ts";
import { Overlay } from "@components/overlay/index.ts";
import { Section, Item } from "@components/collection/index.ts";
import { CatIcon, RocketIcon, SearchIcon, SparklesIcon } from "@hopper-ui/icons";
import { TooltipTrigger, Tooltip } from "@components/tooltip/index.ts";
import { Text } from "@components/typography/index.ts";
import { Listbox } from "@components/listbox/index.ts";
import { IconList } from "@components/icons/index.ts";
import { isNil } from "@components/shared/index.ts";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Select",
    component: Select,
    id: "select"
} as Meta<typeof Select>;

export default meta;

type SelectStory = StoryObj<typeof meta>;

export const Default: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const Sections: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Section title="Visited">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Section>
            <Section title="Not Visited">
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Section>
        </Select>
    )
};

export const ItemIcon: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">
                <SparklesIcon />
                <Text>Earth</Text>
            </Item>
            <Item key="jupiter">
                <SparklesIcon />
                <Text>Jupiter</Text>
            </Item>
            <Item key="mars">
                <SparklesIcon />
                <Text>Mars</Text>
            </Item>
        </Select>
    )
};

export const ItemEndIcon: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <IconList slot="end-icon">
                    <CatIcon />
                    <SparklesIcon />
                    <RocketIcon />
                </IconList>
            </Item>
            <Item key="jupiter">
                <Text>Jupiter</Text>
                <SparklesIcon slot="end-icon" />
            </Item>
            <Item key="mars">
                <Text>Mars</Text>
                <IconList slot="end-icon">
                    <CatIcon />
                    <SparklesIcon />
                    <RocketIcon />
                </IconList>
            </Item>
        </Select>
    )
};

export const ItemDescription: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Select>
    )
};

export const ItemDescriptionIcon: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">
                <SparklesIcon />
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <SparklesIcon />
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <SparklesIcon />
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Select>
    )
};

export const ItemDescriptionAvatar: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item key="earth">
                <Avatar name="Earth" />
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <Avatar name="Jupiter" />
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <Avatar name="Mars" />
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Select>
    )
};

export const ItemTooltip: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <TooltipTrigger>
                <Item key="earth">Earth</Item>
                <Tooltip>Home sweet home!</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Item key="jupiter">Jupiter</Item>
                <Tooltip>The fourth-brightest object in the sky</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Item key="mars">Mars</Item>
                <Tooltip>See you in 2026</Tooltip>
            </TooltipTrigger>
        </Select>
    )
};

export const DisabledItem: SelectStory = {
    render: () => (
        <Select placeholder="Planets">
            <Item disabled key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item disabled key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const TriggerIcon: SelectStory = {
    render: () => (
        <Select icon={<SearchIcon />} placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const Disabled: SelectStory = {
    render: () => (
        <Select disabled placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const Readonly: SelectStory = {
    render: () => (
        <Select placeholder="Planets" readOnly>
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const Fluid: SelectStory = {
    render: () => (
        <Select fluid placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

export const Form: SelectStory = {
    render: () => (
        <form>
            <Select name="planet" placeholder="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Select>
        </form>
    )
};

export const DynamicItems: SelectStory = {
    render: () => (
        <Select aria-label="Planets" placeholder="Planets">
            {["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus"].map(x => (
                <Item key={x.toLowerCase()}>{x}</Item>
            ))}
        </Select>
    )
};

export const Ghost: SelectStory = {
    render: () => (
        <Select placeholder="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Select>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const SelectedValueValidation: SelectStory = {
    render: () => {
        const [isValid, setIsValid] = useState(true);

        const handleSelectionChange = useCallback((event, newValue) => {
            setIsValid(newValue === "earth");
            console.log(newValue);
        }, [setIsValid]);

        return (
            <Select
                onSelectionChange={handleSelectionChange}
                placeholder="Planets"
                validationState={isValid ? "valid" : "invalid"}
            >
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Select>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const ControlledSelect: SelectStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedKey, setSelectedKey] = useState("earth");

        const handleSelectionChange = useCallback((event, newValue) => {
            setSelectedKey(newValue);
            console.log(newValue);
        }, [setSelectedKey]);

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);

        return (
            <Select
                onOpenChange={handleOpenChange}
                onSelectionChange={handleSelectionChange}
                open={isOpen}
                placeholder="Planets"
                selectedKey={selectedKey}
            >
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Select>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const CustomSelectStory: SelectStory = {
    render: () => {
        function CustomSelect({
            placeholder,
            children,
            ...rest
        }) {
            const { selectedItem, isOpen, triggerProps, overlayProps, listboxProps, valueProps } = useSelect(children);

            return (
                <>
                    <Button
                        {...rest}
                        {...triggerProps}
                        variant="secondary"
                        width={{
                            base: "100%",
                            sm: "320px"
                        }}
                    >
                        <Text {...valueProps}>
                            {!isNil(selectedItem) ? selectedItem.text : placeholder}
                        </Text>
                        <DisclosureArrow
                            open={isOpen}
                            slot="end-icon"
                        />
                    </Button>
                    <Overlay {...overlayProps}>
                        <Listbox {...listboxProps} />
                    </Overlay>
                </>
            );
        }

        return (
            <CustomSelect placeholder="Select a planet">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </CustomSelect>
        );
    }
};
