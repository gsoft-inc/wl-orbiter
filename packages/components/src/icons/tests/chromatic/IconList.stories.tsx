import { IconList, IconListProps } from "@components/icons";
import { CatIcon, SparklesIcon, RocketIcon } from "@hopper-ui/icons";
import { Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconList",
    component: IconList,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconList>;

export default meta;

type IconListStory = StoryObj<typeof meta>;

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
    name: "default",
    render: () => (
        <Icons />
    )
};

export const Styling: IconListStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Icons border="warning" />
            <Icons className="border-red" />
            <Icons style={{ border: "1px solid red" }} />
        </Stack>
    )
};
