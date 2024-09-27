import { SparklesIcon } from "@hopper-ui/icons";
import { Badge } from "@components/badge";
import { CircleBadge, IconBadge, SquareBadge, TextBadge } from "./BadgeUtils-hopper";
import { Inline } from "@components/layout";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: Badge,
    title: "Chromatic/Badge-hopper/icon"
} as ComponentMeta<typeof Badge>;

type BadgeStory = ComponentStoryObj<typeof Badge>;

export const Default: BadgeStory = {
    storyName: "default",
    render: () => (
        <SquareBadge variant="icon">
            <SparklesIcon />
        </SquareBadge>
    )
};

export const Overlap: BadgeStory = {
    storyName: "overlap",
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
    storyName: "styling",
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
