import { SparklesIcon } from "@hopper-ui/icons";
import { Badge } from "@components/badge";
import { CircleBadge, IconBadge, SquareBadge, TextBadge } from "./BadgeUtils";
import { Inline } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Badge,
    title: "Chromatic/Badge/icon"
} as Meta<typeof Badge>;

export default meta;

type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
    name: "default",
    render: () => (
        <SquareBadge variant="icon">
            <SparklesIcon />
        </SquareBadge>
    )
};

export const Overlap: BadgeStory = {
    name: "overlap",
    render: () => (
        <Inline gap={400}>
            <SquareBadge variant="icon">
                <SparklesIcon />
            </SquareBadge>
            <CircleBadge variant="icon">
                <SparklesIcon />
            </CircleBadge>
            <IconBadge variant="icon">
                <SparklesIcon />
            </IconBadge>
            <TextBadge variant="icon">
                <SparklesIcon />
            </TextBadge>
        </Inline>
    )
};

export const Styling: BadgeStory = {
    name: "styling",
    render: () => (
        <Inline>
            <SquareBadge border="warning" variant="icon">
                <SparklesIcon />
            </SquareBadge>
            <SquareBadge className="border-red" variant="icon">
                <SparklesIcon />
            </SquareBadge>
            <SquareBadge style={{ border: "1px solid red" }} variant="icon">
                <SparklesIcon />
            </SquareBadge>
        </Inline>
    )
};
