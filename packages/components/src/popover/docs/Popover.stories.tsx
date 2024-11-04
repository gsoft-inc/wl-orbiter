import { Button, ButtonGroup } from "@components/button";
import { Content, Footer } from "@components/placeholders";
import { Heading } from "@components/typography";
import { Popover, PopoverTrigger, usePopoverTriggerContext } from "@components/popover";
import { useCallback, useState, forwardRef } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Popover",
    component: Popover,
    id: "popover"
} as Meta<typeof Popover>;

export default meta;

type PopoverStory = StoryObj<typeof meta>;

export const Default: PopoverStory = {
    render: () => (
        <PopoverTrigger>
            <Button variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const ButtonStory: PopoverStory = {
    render: () => (
        <PopoverTrigger>
            <Button variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
                <Button variant="primary">Got it</Button>
            </Popover>
        </PopoverTrigger>
    )
};

export const ButtonGroupStory: PopoverStory = {
    render: () => (
        <PopoverTrigger>
            <Button variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
                <ButtonGroup>
                    <Button variant="secondary">Next</Button>
                    <Button variant="primary">Got it</Button>
                </ButtonGroup>
            </Popover>
        </PopoverTrigger>
    )
};

export const FooterStory: PopoverStory = {
    render: () => (
        <PopoverTrigger>
            <Button variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
                <Button variant="primary">Got it</Button>
                <Footer>All right reserved.</Footer>
            </Popover>
        </PopoverTrigger>
    )
};

export const Position: PopoverStory = {
    render: () => (
        <PopoverTrigger position="right">
            <Button variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const Context: PopoverStory = {
    render: () => {
        const HighlightedTrigger = forwardRef(({ ...rest }, ref) => {
            const { isOpen } = usePopoverTriggerContext();

            return (
                <Button
                    {...rest}
                    ref={ref}
                    variant={isOpen ? "primary" : "secondary"}
                >
                    Trigger
                </Button>
            );
        });

        return (
            <PopoverTrigger>
                <HighlightedTrigger />
                <Popover>
                    <Heading>WikiSpace</Heading>
                    <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
                </Popover>
            </PopoverTrigger>
        );
    }
};

export const CustomClose: PopoverStory = {
    render: () => {
        const CustomClosePopover = forwardRef(({ ...rest }, ref) => {
            const { close } = usePopoverTriggerContext();

            return (
                <Popover
                    {...rest}
                    ref={ref}
                >
                    <Heading>WikiSpace</Heading>
                    <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
                    <Button onClick={close} variant="secondary">Close</Button>
                </Popover>
            );
        });

        return (
            <PopoverTrigger dismissable={false}>
                <Button variant="secondary">Trigger</Button>
                <CustomClosePopover />
            </PopoverTrigger>
        );
    }
};

export const DisabledTrigger: PopoverStory = {
    render: () => (
        <PopoverTrigger>
            <Button disabled variant="secondary">Trigger</Button>
            <Popover>
                <Heading>WikiSpace</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multi-planetary.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: PopoverStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newOpen) => {
            setIsOpen(newOpen);
            console.log(newOpen);
        }, [setIsOpen]);

        return (
            <PopoverTrigger
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <Button variant="secondary">Trigger</Button>
                <Popover>
                    <Heading>WikiSpace</Heading>
                    <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
                </Popover>
            </PopoverTrigger>
        );
    }
};
