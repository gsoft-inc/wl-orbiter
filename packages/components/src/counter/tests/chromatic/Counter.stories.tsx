import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Counter",
    component: Counter,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Counter>;

export default meta;

type CounterStory = StoryObj<typeof meta>;

export const Default: CounterStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <Counter size="sm">15</Counter>
                <Counter>15</Counter>
            </Inline>
            <Inline alignY="center">
                <Text size="sm">
                    <Counter size="inherit">15</Counter>
                </Text>
                <Text>
                    <Counter size="inherit">15</Counter>
                </Text>
                <Text size="lg">
                    <Counter size="inherit">15</Counter>
                </Text>
                <Text size="xl">
                    <Counter size="inherit">15</Counter>
                </Text>
            </Inline>
        </Stack>
    )
};

export const Divider: CounterStory = {
    name: "divider",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <Counter size="sm" variant="divider">15</Counter>
                <Counter variant="divider">15</Counter>
            </Inline>
            <Inline alignY="center">
                <Text size="sm">
                    <Counter size="inherit" variant="divider">15</Counter>
                </Text>
                <Text>
                    <Counter size="inherit" variant="divider">15</Counter>
                </Text>
                <Text size="lg">
                    <Counter size="inherit" variant="divider">15</Counter>
                </Text>
                <Text size="xl">
                    <Counter size="inherit" variant="divider">15</Counter>
                </Text>
            </Inline>
        </Stack>
    )
};

export const Pushed: CounterStory = {
    name: "pushed",
    render: () => (
        <Stack>
            <Div>
                <Text>Planets Visited</Text>
                <Counter pushed>15</Counter>
            </Div>
            <Div>
                <Text>Planets Visited</Text>
                <Counter pushed variant="divider">15</Counter>
            </Div>
        </Stack>
    )
};

export const Reverse: CounterStory = {
    name: "reverse",
    render: () => (
        <Stack>
            <Div>
                <Counter reverse pushed>15</Counter>
                <Text>Planets Visited</Text>
            </Div>
            <Div>
                <Counter reverse pushed variant="divider">15</Counter>
                <Text>Planets Visited</Text>
            </Div>
        </Stack>
    )
};

export const Color: CounterStory = {
    name: "color",
    render: () => (
        <Inline color="sunken-treasure-700" backgroundColor="koi-25" alignY="center">
            <Counter color="inherit">15</Counter>
            <Counter variant="divider" color="inherit">15</Counter>
        </Inline>
    )
};


export const Highlight: CounterStory = {
    name: "highlight",
    render: () => (
        <Inline alignY="center">
            <Counter highlight>15</Counter>
            <Counter variant="divider" highlight>15</Counter>
        </Inline>
    )
};

export const Disabled: CounterStory = {
    name: "disabled",
    render: () => (
        <Inline alignY="center">
            <Counter disabled>15</Counter>
            <Counter variant="divider" disabled>15</Counter>
        </Inline>
    )
};

export const Zoom: CounterStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline>
                    <Counter>15</Counter>
                    <Counter variant="divider">15</Counter>
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline>
                    <Counter>15</Counter>
                    <Counter variant="divider">15</Counter>
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: CounterStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <Counter border="warning">15</Counter>
                <Counter className="bg-red">15</Counter>
                <Counter style={{ backgroundColor: "red" }}>15</Counter>
            </Inline>
            <Inline alignY="center">
                <Counter border="warning" variant="divider">15</Counter>
                <Counter className="bg-red" variant="divider">15</Counter>
                <Counter style={{ backgroundColor: "red" }} variant="divider">15</Counter>
            </Inline>
        </Stack>
    )
};
