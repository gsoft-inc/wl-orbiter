import { Button, IconButton } from "@components/button/index.ts";
import { Item, Section } from "@components/collection/index.ts";
import { Menu, MenuProps, MenuTrigger } from "@components/menu/index.ts";
import { DisclosureArrow } from "@components/disclosure/index.ts";
import { Divider } from "@components/divider/index.ts";
import { HtmlButton, HtmlButtonProps } from "@components/html/index.ts";
import { Text } from "@components/typography/index.ts";
import { KebabIcon } from "@hopper-ui/icons";
import { forwardRef } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/MenuTrigger",
    component: MenuTrigger,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof MenuTrigger>;

export default meta;

type MenuTriggerStory = StoryObj<typeof meta>;

export const Default: MenuTriggerStory = {
    name: "default",
    render: () => (
        <MenuTrigger>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const OpenWithItemsOnly: MenuTriggerStory = {
    name: "open with items only",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const OpenWithSections: MenuTriggerStory = {
    name: "open with sections",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
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
            </Menu>
        </MenuTrigger>
    )
};

export const OpenWithDividers: MenuTriggerStory = {
    name: "open with dividers",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Divider />
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const OpenWithASelectedItem: MenuTriggerStory = {
    name: "open with a selected item",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu defaultSelectedKeys={["mars"]} selectionMode="single">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const OpenWithMultipleSelectedItems: MenuTriggerStory = {
    name: "open with multiple selected items",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu defaultSelectedKeys={["mars", "saturn"]} selectionMode="multiple">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const DirectionBottom: MenuTriggerStory = {
    name: "direction bottom",
    render: () => (
        <MenuTrigger direction="bottom" defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const DirectionTop: MenuTriggerStory = {
    name: "direction top",
    decorators: [Story => <div style={{ marginTop: "100px" }}><Story /></div>],
    render: () => (
        <MenuTrigger direction="top" defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const AlignStart: MenuTriggerStory = {
    name: "align start",
    decorators: [Story => <div style={{ paddingLeft: "200px" }}><Story /></div>],
    render: () => (
        <MenuTrigger align="start" allowFlip={false} allowPreventOverflow={false} defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu width="12rem">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const AlignEnd: MenuTriggerStory = {
    name: "align end",
    decorators: [Story => <div style={{ paddingLeft: "200px" }}><Story /></div>],
    render: () => (
        <MenuTrigger align="end" allowFlip={false} allowPreventOverflow={false} defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu width="12rem">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const IconButtonTrigger: MenuTriggerStory = {
    name: "icon button trigger",
    render: () => (
        <MenuTrigger defaultOpen>
            <IconButton variant="secondary" aria-label="Open menu">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

const CustomTrigger = forwardRef<any, Partial<HtmlButtonProps>>((props, ref) => {
    return (
        <HtmlButton
            {...props}
            type="button"
            display="flex"
            alignItems="center"
            ref={ref}
        >
            <Text>Trigger</Text>
            <DisclosureArrow />
        </HtmlButton>
    );
});

export const CustomTriggerWithDisclosureArrow: MenuTriggerStory = {
    name: "custom trigger with disclosure arrow",
    render: () => (
        <MenuTrigger defaultOpen>
            <CustomTrigger />
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Menu>
        </MenuTrigger>
    )
};

const CustomMenu = forwardRef<any, MenuProps>(({ children, ...props }, ref) => {
    return (
        <Menu
            {...props}
            className="bg-red"
            ref={ref}
        >
            {children}
        </Menu>
    );
});


export const MenuTriggerCustomMenu: MenuTriggerStory = {
    name: "custom menu",
    render: () => (
        <MenuTrigger defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <CustomMenu>
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </CustomMenu>
        </MenuTrigger>
    )
};

export const FunctionalContent: MenuTriggerStory = {
    name: "functional content",
    render: () => (
        <MenuTrigger defaultOpen>
            {(() => {
                return (
                    <>
                        <Button variant="secondary">Trigger</Button>
                        <Menu>
                            <Item key="earth">Earth</Item>
                            <Item key="mars">Mars</Item>
                            <Item key="saturn">Saturn</Item>
                        </Menu>
                    </>
                );
            })()}
        </MenuTrigger>
    )
};

export const StyledSystem: MenuTriggerStory = {
    name: "styled system",
    render: () => (
        <MenuTrigger border="warning" defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ClassName: MenuTriggerStory = {
    name: "className",
    render: () => (
        <MenuTrigger className="border-red" defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const Style: MenuTriggerStory = {
    name: "style",
    render: () => (
        <MenuTrigger style={{ border: "1px solid red" }} defaultOpen>
            <Button variant="secondary">Trigger</Button>
            <Menu>
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
        </MenuTrigger>
    )
};
