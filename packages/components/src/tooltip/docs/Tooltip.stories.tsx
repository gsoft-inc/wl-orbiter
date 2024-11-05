import { Button, IconButton } from "@components/button";
import { CalendarIcon, SparklesIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout";
import { Tooltip, TooltipTrigger, useTooltipTriggerContext } from "@components/tooltip";
import { forwardRef, useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Tooltip",
    component: Tooltip,
    id: "tooltip"
} as Meta<typeof Tooltip>;

export default meta;

type TooltipStory = StoryObj<typeof meta>;

export const Default: TooltipStory = {
    render: () => (
        <TooltipTrigger>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Earth is a small town with many neighborhoods in a very big universe.</Tooltip>
        </TooltipTrigger>
    )
};

export const Trigger: TooltipStory = {
    render: () => (
        <Inline alignY="center" gap={480}>
            <TooltipTrigger>
                <IconButton aria-label="An awesome quote" variant="secondary">
                    <SparklesIcon />
                </IconButton>
                <Tooltip>Earth is a small town with many neighborhoods in a very big universe.</Tooltip>
            </TooltipTrigger>
        </Inline>
    )
};

export const Position: TooltipStory = {
    render: () => (
        <TooltipTrigger position="right">
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Earth is a small town with many neighborhoods in a very big universe.</Tooltip>
        </TooltipTrigger>
    )
};

export const Disabled: TooltipStory = {
    render: () => (
        <TooltipTrigger disabled>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Earth is a small town with many neighborhoods in a very big universe.</Tooltip>
        </TooltipTrigger>
    )
};

export const CustomTriggerStory: TooltipStory = {
    render: () => {
        const CustomTrigger = forwardRef<HTMLButtonElement>((props, ref) => {
            const { isOpen } = useTooltipTriggerContext();

            return (
                <IconButton
                    {...props}
                    aria-label="Email"
                    ref={ref}
                    variant={isOpen ? "primary" : "secondary"}
                >
                    <CalendarIcon />
                </IconButton>
            );
        });

        return (
            <TooltipTrigger>
                <CustomTrigger />
                <Tooltip>Send an email to the orbiteral space station.</Tooltip>
            </TooltipTrigger>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: TooltipStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);


        return (
            <TooltipTrigger
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <Button variant="secondary">Trigger</Button>
                <Tooltip>Earth is a small town with many neighborhoods in a very big universe.</Tooltip>
            </TooltipTrigger>
        );
    }
};
