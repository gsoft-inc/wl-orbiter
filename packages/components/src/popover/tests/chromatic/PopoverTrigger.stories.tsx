import { Popover, PopoverTrigger } from "@components/popover";

import { Button } from "@components/button";
import { Content } from "@components/placeholders";
import { Heading } from "@components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/PopoverTrigger",
    component: PopoverTrigger,
    decorators: [
        Story => (
            <div style={{ padding: "150px 350px" }}>
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
} as Meta<typeof PopoverTrigger>;

export default meta;

type PopoverTriggerStory = StoryObj<typeof meta>;

export const Default: PopoverTriggerStory = {
    name: "default",
    render: () => (
        <PopoverTrigger>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const DefaultOpen: PopoverTriggerStory = {
    name: "default open",
    render: () => (
        <PopoverTrigger defaultOpen>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const NotDismissable: PopoverTriggerStory = {
    name: "not dismissable",
    render: () => (
        <PopoverTrigger defaultOpen dismissable={false}>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const Position: PopoverTriggerStory = {
    name: "position",
    render: () => (
        <PopoverTrigger position={{ md: "top", lg: "top" }}>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionAuto: PopoverTriggerStory = {
    name: "position auto",
    render: () => (
        <PopoverTrigger position="auto" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionAutoStart: PopoverTriggerStory = {
    name: "position auto-start",
    render: () => (
        <PopoverTrigger position="auto-start" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};


export const PositionAutoEnd: PopoverTriggerStory = {
    name: "position auto-end",
    render: () => (
        <PopoverTrigger position="auto-end" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionTop: PopoverTriggerStory = {
    name: "position top",
    render: () => (
        <PopoverTrigger position="top" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionTopStart: PopoverTriggerStory = {
    name: "position top-start",
    render: () => (
        <PopoverTrigger position="top-start" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionTopEnd: PopoverTriggerStory = {
    name: "position top-end",
    render: () => (
        <PopoverTrigger position="top-end" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionBottom: PopoverTriggerStory = {
    name: "position bottom",
    render: () => (
        <PopoverTrigger position="bottom" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionBottomStart: PopoverTriggerStory = {
    name: "position bottom-start",
    render: () => (
        <PopoverTrigger position="bottom-start" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionBottomEnd: PopoverTriggerStory = {
    name: "position bottom-end",
    render: () => (
        <PopoverTrigger position="bottom-end" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionRight: PopoverTriggerStory = {
    name: "position right",
    render: () => (
        <PopoverTrigger position="right" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionRightStart: PopoverTriggerStory = {
    name: "position right-start",
    render: () => (
        <PopoverTrigger position="right-start" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionRightEnd: PopoverTriggerStory = {
    name: "position right-end",
    render: () => (
        <PopoverTrigger position="right-end" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionLeft: PopoverTriggerStory = {
    name: "position left",
    render: () => (
        <PopoverTrigger position="left" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionLeftStart: PopoverTriggerStory = {
    name: "position left-start",
    render: () => (
        <PopoverTrigger position="left-start" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const PositionLeftEnd: PopoverTriggerStory = {
    name: "position left-end",
    render: () => (
        <PopoverTrigger position="left-end" open>
            <Button variant="secondary">Toggle</Button>
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </PopoverTrigger>
    )
};

export const FunctionalContent: PopoverTriggerStory = {
    name: "functional content",
    render: () => (
        <PopoverTrigger defaultOpen>
            {(() => {
                return (
                    <>
                        <Button variant="secondary">Toggle</Button>
                        <Popover>
                            <Heading>Space News</Heading>
                            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
                        </Popover>
                    </>

                );
            })()}
        </PopoverTrigger>
    )
};
