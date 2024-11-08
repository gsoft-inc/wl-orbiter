import { Spinner } from "@components/spinner";
import { Inline } from "@components/layout";
import { Div } from "@components/html";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Spinner",
    component: Spinner,
    id: "spinner"
} as Meta<typeof Spinner>;

export default meta;

type SpinnerStory = StoryObj<typeof meta>;

export const Default: SpinnerStory = {
    render: () => (
        <Spinner aria-label="Loading..." />
    )
};

export const Size: SpinnerStory = {
    render: () => (
        <Inline alignY="end">
            <Spinner aria-label="Loading..." size="sm" />
            <Spinner aria-label="Loading..." />
            <Spinner aria-label="Loading..." size="lg" />
        </Inline>
    )
};

export const Label: SpinnerStory = {
    render: () => (
        <Inline alignY="end">
            <Spinner size="sm">Loading...</Spinner>
            <Spinner>Loading...</Spinner>
            <Spinner size="lg">Loading...</Spinner>
        </Inline>
    )
};

export const OverBackground: SpinnerStory = {
    render: () => (
        <Div backgroundColor="primary-strong" padding={160}>
            <Spinner color="#FFFFFF">Loading...</Spinner>
        </Div>
    )
};
