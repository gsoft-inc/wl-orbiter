/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@components/avatar/index.ts";
import { IconList } from "@components/icons/index.ts";
import { CatIcon, RocketIcon, SparklesIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout/index.ts";
import { Item, Section } from "@components/collection/index.ts";
import { Listbox, ListboxOption, useListboxContext } from "@components/listbox/index.ts";
import { Text } from "@components/typography/index.ts";
import { Tooltip, TooltipTrigger } from "@components/tooltip/index.ts";
import { useState, useCallback } from "react";

const meta = {
    title: "Components/Listbox",
    component: Listbox,
    id: "listbox"
} as Meta<typeof Listbox>;

export default meta;

type Story = StoryObj<typeof Listbox>;

export const Default: Story = {
    render: () => (
        <Listbox aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Listbox>
    )
};

export const Selection: Story = {
    render: () => (
        <Inline gap={480}>
            <Listbox aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Listbox>
            <Listbox aria-label="Planets" selectionMode="multiple">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Listbox>
        </Inline>
    )
};

export const Sections: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemIcon: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemEndIcon: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemDescription: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemDescriptionIcon: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemDescriptionAvatar: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ItemTooltip: Story = {
    render: () => (
        <Listbox aria-label="Planets">
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
        </Listbox>
    )
};

export const ArrayMap: Story = {
    render: () => (
        <Listbox aria-label="Planets">
            {["Earth", "Jupiter", "Mars"].map(x => (
                <Item key={x.toLowerCase()}>{x}</Item>
            ))}
        </Listbox>
    )
};

export const ListboxContext: Story = {
    render: () => {
        function CustomOption({ item, children, ...rest }) {
            const { selectedKeys } = useListboxContext();
            const { key } = item;

            return (
                <ListboxOption
                    {...rest}
                    color={selectedKeys.includes(key) ? "primary" : undefined}
                    item={item}
                >
                    {children}
                </ListboxOption>
            );
        }

        return (
            <Listbox aria-label="Planets">
                {["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus"].map(x => (
                    <CustomOption item={x} key={x.toLowerCase()}>{x}</CustomOption>
                ))}
            </Listbox>
        );
    }
};

export const DisabledItem: Story = {
    render: () => (
        <Listbox aria-label="Planets">
            <Item disabled key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item disabled key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Listbox>
    )
};

export const Fluid: Story = {
    render: () => (
        <Listbox aria-label="Planets" fluid>
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Listbox>
    )
};

export const Validation: Story = {
    render: () => (
        <Listbox aria-label="Planets" defaultSelectedKeys={["mars"]} validationState="invalid">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Listbox>
    )
};

export const Controlled: Story = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState([]);

        const handleSelectionChange = useCallback((event, newKeys) => {
            setSelectedKeys(newKeys);
            console.log(newKeys);
        }, [setSelectedKeys]);

        return (
            <Listbox
                aria-label="Planets"
                onSelectionChange={handleSelectionChange}
                selectedKeys={selectedKeys}
            >
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Listbox>
        );
    }
};
