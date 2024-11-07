import { Spinner } from "@components/spinner/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: Spinner,
    title: "Chromatic/Spinner",
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Spinner>;

export default meta;

type SpinnerStory = StoryObj<typeof meta>;

export const Default: SpinnerStory = {
    name: "default",
    render: () => (
        <Inline alignY="end">
            <Spinner size="sm" aria-label="Crawling in progress" />
            <Spinner aria-label="Crawling in progress" />
            <Spinner size="lg" aria-label="Crawling in progress" />
        </Inline>
    )
};

export const InheritColor: SpinnerStory = {
    name: "inherit color",
    render: () => (
        <Inline alignY="end" backgroundColor="primary-strong">
            <Spinner color="samoyed" aria-label="Crawling in progress" />
            <Spinner color="samoyed">Crawling in progress</Spinner>
        </Inline>
    )
};

export const Styling: SpinnerStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Spinner color="red">Crawling in progress</Spinner>
            <Spinner className="border-red" />
            <Spinner style={{ border: "1px solid red" }} />
        </Inline>
    )
};

export const Zoom: SpinnerStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Inline alignY="end" className="zoom-in">
                <Spinner size="sm">Crawling in progress</Spinner>
                <Spinner>Crawling in progress</Spinner>
                <Spinner size="lg">Crawling in progress</Spinner>
            </Inline>
            <Inline alignY="end" className="zoom-out">
                <Spinner size="sm">Crawling in progress</Spinner>
                <Spinner>Crawling in progress</Spinner>
                <Spinner size="lg">Crawling in progress</Spinner>
            </Inline>
        </Stack>
    )
};

export const Label: SpinnerStory = {
    name: "label",
    render: () => (
        <Inline alignY="end" >
            <Spinner size="sm">Crawling in progress</Spinner>
            <Spinner>Crawling in progress</Spinner>
            <Spinner size="lg">Crawling in progress</Spinner>
        </Inline>
    )
};

export const Overflow: SpinnerStory = {
    name: "overflow",
    render: () => (
        <Stack width="4.5rem">
            <Spinner size="sm">Crawling in progress</Spinner>
            <Spinner>Crawling in progress</Spinner>
            <Spinner size="lg">Crawling in progress</Spinner>
        </Stack>
    )
};
