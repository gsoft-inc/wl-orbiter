import { Menu, MenuTrigger, useMenuTriggerContext } from "@components/menu";
import { Button, IconButton } from "@components/button";
import { IconList } from "@components/icons";
import { Content, Item, Section } from "@components/collection";
import { Divider } from "@components/divider";
import { DisclosureArrow } from "@components/disclosure";
import { TooltipTrigger, Tooltip } from "@components/tooltip";
import { Avatar } from "@components/avatar";
import { Modal } from "@components/modal";
import { Heading, Paragraph, Text } from "@components/typography";
import { Overlay } from "@components/overlay";
import { CatIcon, KebabIcon, RocketIcon, SparklesIcon } from "@hopper-ui/icons";
import { useCallback, useState, forwardRef } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Menu",
    component: Menu,
    id: "menu"
} as Meta<typeof Menu>;

export default meta;

type MenuStory = StoryObj<typeof meta>;

export const Default: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <Item key="land">Land...</Item>
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const Sections: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Section title="Actions">
                    <Item key="launch">Launch...</Item>
                    <Item key="eject">Eject...</Item>
                    <Item key="land">Land...</Item>
                </Section>
                <Section title="Others">
                    <Item key="help">Help</Item>
                    <Item key="exit">Exit</Item>
                </Section>
            </Menu>
        </MenuTrigger>
    )
};

export const Dividers: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <Item key="land">Land...</Item>
                <Divider />
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemIcon: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">
                    <SparklesIcon />
                    <Text>Launch...</Text>
                </Item>
                <Item key="eject">
                    <SparklesIcon />
                    <Text>Eject...</Text>
                </Item>
                <Item key="land">
                    <SparklesIcon />
                    <Text>Land...</Text>
                </Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemEndIcon: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">
                    <Text>Launch...</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <CatIcon />
                        <RocketIcon />
                    </IconList>
                </Item>
                <Item key="eject">
                    <Text>Eject...</Text>
                    <SparklesIcon slot="end-icon" />
                </Item>
                <Item key="land">
                    <Text>Land...</Text>
                    <IconList slot="end-icon">
                        <SparklesIcon />
                        <CatIcon />
                        <RocketIcon />
                    </IconList>
                </Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemDescription: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">
                    <Text>Launch...</Text>
                    <Text slot="description">Launch...</Text>
                </Item>
                <Item key="eject">
                    <Text>Eject...</Text>
                    <Text slot="description">Eject...</Text>
                </Item>
                <Item key="land">
                    <Text>Land...</Text>
                    <Text slot="description">Land on Of Course I Still Love You</Text>
                </Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemDescriptionIcon: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">
                    <SparklesIcon />
                    <Text>Launch...</Text>
                    <Text slot="description">Launch...</Text>
                </Item>
                <Item key="eject">
                    <SparklesIcon />
                    <Text>Eject...</Text>
                    <Text slot="description">Eject...</Text>
                </Item>
                <Item key="land">
                    <SparklesIcon />
                    <Text>Land...</Text>
                    <Text slot="description">Land on Of Course I Still Love You</Text>
                </Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemDescriptionAvatar: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">
                    <Avatar name="Sally Ride" />
                    <Text>Sally Ride</Text>
                    <Text slot="description">First American woman to go into space</Text>
                </Item>
                <Item key="eject">
                    <Avatar name="Alan Shepard" />
                    <Text>Alan Shepard</Text>
                    <Text slot="description">American astronaut, naval aviator, test pilot, and businessman</Text>
                </Item>
                <Item key="land">
                    <Avatar name="Chris Hadfield" />
                    <Text>Chris Hadfield</Text>
                    <Text slot="description">First Canadian Astronaut to walk in space</Text>
                </Item>
            </Menu>
        </MenuTrigger>
    )
};

export const ItemTooltip: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <TooltipTrigger>
                    <Item key="land">Land...</Item>
                    <Tooltip>Land on Of Course I Still Love You</Tooltip>
                </TooltipTrigger>
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const DisabledItem: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                <Item disabled key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <Item disabled key="land">Land...</Item>
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const Validation: MenuStory = {
    render: () => (
        <Menu aria-label="View tasks" defaultSelectedKeys={["land"]} selectionMode="single" validationState="invalid">
            <Item key="launch">Launch...</Item>
            <Item key="eject">Eject...</Item>
            <Item key="land">Land...</Item>
            <Item key="help">Help</Item>
            <Item key="exit">Exit</Item>
        </Menu>
    )
};

export const DisclosureArrowStory: MenuStory = {
    render: () => (
        <MenuTrigger>
            <Button variant="secondary">
                <Text>Trigger</Text>
                <DisclosureArrow slot="end-icon" />
            </Button>
            <Menu>
                <Item key="launch">Launch...</Item>
                <Item key="eject">Eject...</Item>
                <Item key="land">Land...</Item>
                <Item key="help">Help</Item>
                <Item key="exit">Exit</Item>
            </Menu>
        </MenuTrigger>
    )
};

export const DynamicItems: MenuStory = {
    render: () => (
        <MenuTrigger>
            <IconButton aria-label="View tasks" variant="secondary">
                <KebabIcon />
            </IconButton>
            <Menu>
                {["Launch", "Eject", "Land", "Help", "Exit"].map(x => (
                    <Item key={x.toLowerCase()}>{x}</Item>
                ))}
            </Menu>
        </MenuTrigger>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: MenuStory = {
    render: () => {
        const [selectedKey, setSelectedKey] = useState([]);
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newOpen) => {
            setIsOpen(newOpen);
            console.log(newOpen);
        }, [setIsOpen]);

        const handleSelectionChange = useCallback((event, newKeys) => {
            setSelectedKey(newKeys);
            console.log(newKeys);
        }, []);

        return (
            <MenuTrigger
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <Button variant="secondary">Trigger</Button>
                <Menu
                    onSelectionChange={handleSelectionChange}
                    selectedKeys={selectedKey}
                    selectionMode="single"
                >
                    <Item key="launch">Launch...</Item>
                    <Item key="eject">Eject...</Item>
                    <Item key="land">Land...</Item>
                    <Item key="help">Help</Item>
                    <Item key="exit">Exit</Item>
                </Menu>
            </MenuTrigger>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const ModalStory: MenuStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleSelectionChange = useCallback((event, keys) => {
            setIsOpen(true);
        }, [setIsOpen]);

        const handleModalClose = useCallback(() => {
            setIsOpen(false);
        }, [setIsOpen]);

        return (
            <>
                <MenuTrigger>
                    <IconButton aria-label="View tasks" variant="secondary">
                        <KebabIcon />
                    </IconButton>
                    <Menu onSelectionChange={handleSelectionChange}>
                        <Item key="launch">Launch...</Item>
                        <Item key="eject">Eject...</Item>
                        <Item key="land">Land...</Item>
                    </Menu>
                </MenuTrigger>
                <Overlay show={isOpen}>
                    <Modal onClose={handleModalClose}>
                        <Heading>Apollo 11 movie</Heading>
                        <Content>
                            <Paragraph>Apollo 11 is a 2019 American documentary film edited, produced and directed by Todd Douglas Miller. It focuses on the 1969 Apollo 11 mission, the first spaceflight from which men walked on the Moon.</Paragraph>
                            <Paragraph>
                                The film consists solely of archival footage, including 70 mm film previously unreleased to the public, and does not feature narration, interviews or modern recreations. The Saturn V rocket, Apollo crew consisting
                                of Buzz Aldrin, Neil Armstrong, and Michael Collins, and Apollo program Earth-based mission operations engineers are prominently featured in the film.
                            </Paragraph>
                        </Content>
                    </Modal>
                </Overlay>
            </>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Selection: MenuStory = {
    render: () => {
        const [selectedKeys, setSelectedKeys] = useState([]);

        const handleSelectionChange = useCallback((event, newKeys) => {
            setSelectedKeys(newKeys);
        }, [setSelectedKeys]);

        return (
            <MenuTrigger>
                <IconButton aria-label="View tasks" variant="secondary">
                    <KebabIcon />
                </IconButton>
                <Menu onSelectionChange={handleSelectionChange} selectedKeys={selectedKeys} selectionMode="multiple">
                    <Section title="Actions">
                        <Item key="launch">Launch...</Item>
                        <Item key="eject">Eject...</Item>
                        <Item key="land">Land...</Item>
                    </Section>
                    <Section title="Others">
                        <Item key="help">Help</Item>
                        <Item key="exit">Exit</Item>
                    </Section>
                </Menu>
            </MenuTrigger>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const CustomTriggerStory: MenuStory = {
    render: () => {
        const CustomTrigger = forwardRef((props, ref) => {
            const { isOpen } = useMenuTriggerContext();

            return (
                <IconButton
                    {...props}
                    aria-label="View tasks"
                    ref={ref}
                    variant={isOpen ? "primary" : "secondary"}
                >
                    <KebabIcon />
                </IconButton>
            );
        });

        return (
            <MenuTrigger>
                <CustomTrigger />
                <Menu>
                    <Item key="launch">Launch...</Item>
                    <Item key="eject">Eject...</Item>
                    <Item key="land">Land...</Item>
                    <Divider />
                    <Item key="help">Help</Item>
                    <Item key="exit">Exit</Item>
                </Menu>
            </MenuTrigger>
        );
    }
};

