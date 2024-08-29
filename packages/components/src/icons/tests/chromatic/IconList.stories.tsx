import { IconList, IconListProps } from "@components/icons/index.js";
import { CatIcon, SparklesIcon, RocketIcon } from "@hopper-ui/icons";
import { Stack } from "@components/layout/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/IconList",
    component: IconList
} as ComponentMeta<typeof IconList>;

type IconListStory = ComponentStoryObj<typeof IconList>;

function Icons(props: Omit<IconListProps, "children">) {
    return (
        <IconList {...props}>
            <CatIcon />
            <SparklesIcon />
            <RocketIcon />
        </IconList>
    );
}

export const Default: IconListStory = {
    storyName: "default",
    render: () => (
        <Icons />
    )
};

export const Styling: IconListStory = {
    storyName: "styling",
    render: () => (
        <Stack>
            <Icons border="warning" />
            <Icons className="border-red" />
            <Icons style={{ border: "1px solid red" }} />
        </Stack>
    )
};
