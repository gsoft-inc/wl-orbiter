import { Badge } from "@components/badge/index.js";
import { CircleBadge, IconBadge, SquareBadge, TextBadge } from "./BadgeUtils.js";
import { Inline } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    component: Badge,
    title: "Chromatic/Badge/dot"
} as ComponentMeta<typeof Badge>;

type BadgeStory = ComponentStoryObj<typeof Badge>;

export const Default: BadgeStory = {
    storyName: "default",
    render: () => (
        <SquareBadge variant="dot" />
    )
};

export const Overlap: BadgeStory = {
    storyName: "overlap",
    render: () => (
        <Inline gap={400}>
            <SquareBadge variant="dot" />
            <CircleBadge variant="dot" />
            <IconBadge variant="dot" />
            <TextBadge variant="dot" />
        </Inline>
    )
};

export const Styling: BadgeStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <SquareBadge variant="dot" border="warning" />
            <SquareBadge variant="dot" className="border-red" />
            <SquareBadge variant="dot" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
