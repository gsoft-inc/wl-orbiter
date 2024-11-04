import { Button } from "@components/button";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { IconList, Text } from "@hopper-ui/components";
import { StartOverIcon } from "@hopper-ui/icons";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button-hopper/secondary",
    component: Button,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Button>;

export default meta;

type ButtonStory = StoryObj<typeof meta>;

export const Default: ButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="secondary">Button</Button>
                <Button variant="secondary">Button</Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="secondary">Button</Button>
                <Button loading variant="secondary">Button</Button>
            </Inline>
            <Div>
                <Button fluid variant="secondary">Button</Button>
            </Div>
            <Div width="10%">
                <Button fluid variant="secondary">Button</Button>
            </Div>
            <Div>
                <Button loading fluid variant="secondary">Button</Button>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="secondary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
                <Button variant="secondary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button loading variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="secondary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button fluid variant="secondary">
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
                <Button size="sm" variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="secondary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
                <Button variant="secondary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button loading variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="secondary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button fluid variant="secondary">
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
                <Button size="sm" variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button loading variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="secondary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Div>
            <Div>
                <Button fluid variant="secondary">
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
                    <Button active size="sm" variant="secondary">Button</Button>
                    <Button active variant="secondary">Button</Button>
                    <Button loading active variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus size="sm" variant="secondary">Button</Button>
                    <Button focus variant="secondary">Button</Button>
                    <Button loading focus variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button hover size="sm" variant="secondary">Button</Button>
                    <Button hover variant="secondary">Button</Button>
                    <Button loading hover variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus hover size="sm" variant="secondary">Button</Button>
                    <Button focus hover variant="secondary">Button</Button>
                    <Button loading focus hover variant="secondary">Button</Button>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Button disabled size="sm" variant="secondary">Button</Button>
                    <Button disabled variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled active size="sm" variant="secondary">Button</Button>
                    <Button disabled active variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus size="sm" variant="secondary">Button</Button>
                    <Button disabled focus variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled hover size="sm" variant="secondary">Button</Button>
                    <Button disabled hover variant="secondary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus hover size="sm" variant="secondary">Button</Button>
                    <Button disabled focus hover variant="secondary">Button</Button>
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
                <Button variant="secondary">Button</Button>
            </Div>
            <Div className="zoom-out">
                <Button variant="secondary">Button</Button>
            </Div>
        </Inline>
    )
};
