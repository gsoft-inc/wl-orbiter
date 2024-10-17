import { IconButton, Button } from "@components/button";
import { MailIcon } from "@hopper-ui/icons";
import { Image } from "@components/image";
import { Launch } from "./assets";
import { TextLink } from "@components/link";
import { Tooltip, TooltipTrigger } from "@components/tooltip";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tooltip-hopper",
    component: Tooltip,
    decorators: [
        Story => (
            <div style={{ padding: "150px 250px" }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Tooltip>;

export default meta;

type TooltipStory = StoryObj<typeof meta>;

export const Default: TooltipStory = {
    name: "default",
    render: () => (
        <TooltipTrigger>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const Open: TooltipStory = {
    name: "open",
    render: () => (
        <TooltipTrigger open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const OpenOnFocus: TooltipStory = {
    name: "open on focus",
    render: () => (
        <TooltipTrigger>
            <Button autoFocus variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const IconButtonTrigger: TooltipStory = {
    name: "icon button trigger",
    render: () => (
        <TooltipTrigger open>
            <IconButton variant="secondary" aria-label="Email">
                <MailIcon />
            </IconButton>
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const LinkTrigger: TooltipStory = {
    name: "link trigger",
    render: () => (
        <TooltipTrigger open>
            <TextLink>Trigger</TextLink>
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const ImageTrigger: TooltipStory = {
    name: "image trigger",
    render: () => (
        <TooltipTrigger open>
            <Image src={Launch} width="400px" alt="SpaceX launch" />
            <Tooltip>Man must rise above the Earth</Tooltip>
        </TooltipTrigger>
    )
};

export const VeryLongContent: TooltipStory = {
    name: "very long content",
    render: () => (
        <TooltipTrigger open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives. Astronomy compels the soul to look upward, and leads us from this world to another.</Tooltip>
        </TooltipTrigger>
    )
};

export const LinkInContent: TooltipStory = {
    name: "link in content",
    render: () => (
        <TooltipTrigger open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the <TextLink href="https://en.wikipedia.org/wiki/Earth">Earth</TextLink>.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionAuto: TooltipStory = {
    name: "position auto",
    render: () => (
        <TooltipTrigger position="auto" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionAutoStart: TooltipStory = {
    name: "position auto-start",
    render: () => (
        <TooltipTrigger position="auto-start" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionAutoEnd: TooltipStory = {
    name: "position auto-end",
    render: () => (
        <TooltipTrigger position="auto-end" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionTop: TooltipStory = {
    name: "position top",
    render: () => (
        <TooltipTrigger position="top" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionTopStart: TooltipStory = {
    name: "position top-start",
    render: () => (
        <TooltipTrigger position="top-start" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionTopEnd: TooltipStory = {
    name: "position top-end",
    render: () => (
        <TooltipTrigger position="top-end" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionBottom: TooltipStory = {
    name: "position bottom",
    render: () => (
        <TooltipTrigger position="bottom" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionBottomStart: TooltipStory = {
    name: "position bottom-start",
    render: () => (
        <TooltipTrigger position="bottom-start" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionBottomEnd: TooltipStory = {
    name: "position bottom-end",
    render: () => (
        <TooltipTrigger position="bottom-end" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionRight: TooltipStory = {
    name: "position right",
    render: () => (
        <TooltipTrigger position="right" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionRightStart: TooltipStory = {
    name: "position right-start",
    render: () => (
        <TooltipTrigger position="right-start" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionRightEnd: TooltipStory = {
    name: "position right-end",
    render: () => (
        <TooltipTrigger position="right-end" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionLeft: TooltipStory = {
    name: "position left",
    render: () => (
        <TooltipTrigger position="left" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionLeftStart: TooltipStory = {
    name: "position left-start",
    render: () => (
        <TooltipTrigger position="left-start" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const PositionLeftEnd: TooltipStory = {
    name: "position left-end",
    render: () => (
        <TooltipTrigger position="left-end" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipTriggerStyledSystem: TooltipStory = {
    name: "tooltip trigger styled system",
    render: () => (
        <TooltipTrigger border="warning" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipTriggerClassName: TooltipStory = {
    name: "tooltip trigger className",
    render: () => (
        <TooltipTrigger className="border-red" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipTriggerStyle: TooltipStory = {
    name: "tooltip trigger style",
    render: () => (
        <TooltipTrigger style={{ border: "1px solid red" }} open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipStyledSystem: TooltipStory = {
    name: "tooltip styled system",
    render: () => (
        <TooltipTrigger border="warning" open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip className="border-red">Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipClassName: TooltipStory = {
    name: "tooltip className",
    render: () => (
        <TooltipTrigger open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip className="border-red">Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};

export const TooltipStyle: TooltipStory = {
    name: "tooltip style",
    render: () => (
        <TooltipTrigger open>
            <Button variant="secondary">Trigger</Button>
            <Tooltip style={{ border: "1px solid red" }}>Man must rise above the Earth.</Tooltip>
        </TooltipTrigger>
    )
};
