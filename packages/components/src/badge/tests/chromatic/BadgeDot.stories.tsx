import { Badge } from "@components/badge/index.ts";
import { CircleBadge, IconBadge, SquareBadge, TextBadge } from "./BadgeUtils";
import { Inline } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Badge,
    title: "Chromatic/Badge/dot"
} as Meta<typeof Badge>;

export default meta;

type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
    name: "default",
    render: () => (
        <SquareBadge variant="dot" />
    )
};

export const Overlap: BadgeStory = {
    name: "overlap",
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
    name: "styling",
    render: () => (
        <Inline>
            <SquareBadge variant="dot" border="warning" />
            <SquareBadge variant="dot" className="border-red" />
            <SquareBadge variant="dot" style={{ border: "1px solid red" }} />
        </Inline>
    )
};
