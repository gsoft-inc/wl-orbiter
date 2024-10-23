import { Button } from "@components/button";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { IconList } from "@components/icons";
import { StartOverIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button/tertiary",
    component: Button
} as Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof meta>;

export const Default: ButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">Button</Button>
                <Button variant="tertiary">Button</Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="tertiary">Button</Button>
                <Button loading variant="tertiary">Button</Button>
            </Inline>
            <Div>
                <Button fluid variant="tertiary">Button</Button>
            </Div>
            <Div width="10%">
                <Button fluid variant="tertiary">Button</Button>
            </Div>
            <Div>
                <Button loading fluid variant="tertiary">Button</Button>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
                <Button variant="tertiary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button loading variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="tertiary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button fluid variant="tertiary">
                    <Text>Button</Text>
                </Button>
            </Stack>
        </Stack>
    )
};

export const EndIcon: ButtonStory = {
    name: "end icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
                <Button variant="tertiary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button loading variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="tertiary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button fluid variant="tertiary">
                    <Text>Button</Text>
                </Button>
            </Stack>
        </Stack>
    )
};

export const CounterStory: ButtonStory = {
    name: "counter",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button loading variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Div>
            <Div>
                <Button fluid variant="tertiary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Div>
        </Stack>
    )
};

export const States: ButtonStory = {
    name: "states",
    render: () => (
        <Inline>
            <Stack>
                <Inline alignY="end">
                    <Button active size="sm" variant="tertiary">Button</Button>
                    <Button active variant="tertiary">Button</Button>
                    <Button loading active variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus size="sm" variant="tertiary">Button</Button>
                    <Button focus variant="tertiary">Button</Button>
                    <Button loading focus variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button hover size="sm" variant="tertiary">Button</Button>
                    <Button hover variant="tertiary">Button</Button>
                    <Button loading hover variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus hover size="sm" variant="tertiary">Button</Button>
                    <Button focus hover variant="tertiary">Button</Button>
                    <Button loading focus hover variant="tertiary">Button</Button>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Button disabled size="sm" variant="tertiary">Button</Button>
                    <Button disabled variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled active size="sm" variant="tertiary">Button</Button>
                    <Button disabled active variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus size="sm" variant="tertiary">Button</Button>
                    <Button disabled focus variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled hover size="sm" variant="tertiary">Button</Button>
                    <Button disabled hover variant="tertiary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus hover size="sm" variant="tertiary">Button</Button>
                    <Button disabled focus hover variant="tertiary">Button</Button>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Zoom: ButtonStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Button variant="tertiary">Button</Button>
            </Div>
            <Div className="zoom-out">
                <Button variant="tertiary">Button</Button>
            </Div>
        </Inline>
    )
};
