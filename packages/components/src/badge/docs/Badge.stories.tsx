import { Badge } from "@components/badge";
import { Circle } from "./Circle.jsx";
import { SparklesIcon } from "@hopper-ui/icons";
import { Inline } from "@components/layout";
import { Square } from "./Square.jsx";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Badge",
    component: Badge,
    id: "badge"
} as Meta<typeof Badge>;

export default meta;

type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
    render: () => (
        <Inline alignY="center" gap={400}>
            <Badge>
                <Text>5</Text>
                <Square />
            </Badge>
            <Badge>
                <Text>5+</Text>
                <Square />
            </Badge>
            <Badge>
                <Text>50</Text>
                <Square />
            </Badge>
            <Badge>
                <Text>500</Text>
                <Square />
            </Badge>
        </Inline>
    )
};

export const Dot: BadgeStory = {
    render: () => (
        <Inline alignY="center" gap={400}>
            <Badge overlap="circle" variant="dot">
                <Circle />
            </Badge>
            <Badge overlap="icon" variant="dot">
                <SparklesIcon />
            </Badge>
            <Badge variant="dot">
                Notifications
            </Badge>
        </Inline>
    )
};

export const Icon: BadgeStory = {
    render: () => (
        <Badge overlap="circle" variant="icon">
            <SparklesIcon />
            <Circle />
        </Badge>
    )
};

export const Overlap: BadgeStory = {
    render: () => (
        <Inline alignY="center" gap={800}>
            <Inline gap={400}>
                <Badge>
                    <Text>100</Text>
                    <Square />
                </Badge>
                <Badge variant="dot">
                    <Square />
                </Badge>
                <Badge variant="icon">
                    <SparklesIcon />
                    <Square />
                </Badge>
            </Inline>
            <Inline gap={400}>
                <Badge overlap="circle">
                    <Text>100</Text>
                    <Circle />
                </Badge>
                <Badge overlap="circle" variant="dot">
                    <Circle />
                </Badge>
                <Badge overlap="circle" variant="icon">
                    <SparklesIcon />
                    <Circle />
                </Badge>
            </Inline>
            <Inline gap={400}>
                <Badge overlap="icon" variant="dot">
                    <SparklesIcon />
                </Badge>
            </Inline>
        </Inline>
    )
};
