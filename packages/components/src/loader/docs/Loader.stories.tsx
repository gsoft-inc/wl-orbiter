import { Loader } from "@components/loader/index.ts";
import { Stack } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Loader",
    component: Loader,
    id: "loader"
} as Meta<typeof Loader>;

export default meta;

type LoaderStory = StoryObj<typeof meta>;

export const Default: LoaderStory = {
    render: () => (
        <Loader aria-label="Loading..." />
    )
};

export const Delay: LoaderStory = {
    render: () => (
        <Stack>
            <Loader aria-label="Loading..." delay />
            <Loader aria-label="Loading..." delay={800} />
        </Stack>
    )
};

