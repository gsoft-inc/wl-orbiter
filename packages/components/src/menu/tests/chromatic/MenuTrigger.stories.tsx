import { Button, IconButton } from "@components/button/index.js";
import { Item, Section } from "@components/collection/index.js";
import { Menu, MenuProps, MenuTrigger } from "@components/menu/index.js";
import { DisclosureArrow } from "@components/disclosure/index.js";
import { Divider } from "@components/divider/index.js";
import { HtmlButton, HtmlButtonProps } from "@components/html/index.js";
import { Text } from "@components/typography/index.js";
import { KebabIcon } from "@hopper-ui/icons";
import { forwardRef } from "react";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/MenuTrigger",
    component: MenuTrigger,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as ComponentMeta<typeof MenuTrigger>;

type MenuTriggerStory = ComponentStoryObj<typeof MenuTrigger>;

export const Default: MenuTriggerStory = {
    storyName: "default",
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
    storyName: "open with items only",
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
    storyName: "open with sections",
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
    storyName: "open with dividers",
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
    storyName: "open with a selected item",
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
    storyName: "open with multiple selected items",
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
    storyName: "direction bottom",
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
    storyName: "direction top",
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
    storyName: "align start",
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
    storyName: "align end",
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
    storyName: "icon button trigger",
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
    storyName: "custom trigger with disclosure arrow",
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
    storyName: "custom menu",
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
    storyName: "functional content",
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
    storyName: "styled system",
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
    storyName: "className",
    render:  () => (
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
    storyName: "style",
    render:  () => (
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
