import { Button } from "@components/button/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Div } from "@components/html/index.ts";
import { IconList } from "@components/icons/index.ts";
import { StartOverIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout/index.ts";
import { Text } from "@components/typography/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button/primary",
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
                <Button size="sm" variant="primary">Button</Button>
                <Button variant="primary">Button</Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="primary">Button</Button>
                <Button loading variant="primary">Button</Button>
            </Inline>
            <Div>
                <Button fluid variant="primary">Button</Button>
            </Div>
            <Div width="10%">
                <Button fluid variant="primary">Button</Button>
            </Div>
            <Div>
                <Button loading fluid variant="primary">Button</Button>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Button size="sm" variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="primary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
                <Button variant="primary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button loading variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </Button>
                <Button fluid variant="primary">
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
                <Button size="sm" variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="primary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
                <Button variant="primary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button loading variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Div>
            <Stack>
                <Button fluid variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button fluid variant="primary">
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
                <Button size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
                <Button variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </Button>
            </Inline>
            <Inline alignY="end">
                <Button loading size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
                <Button loading variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Inline>
            <Div>
                <Button disabled variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </Button>
            </Div>
            <Div>
                <Button fluid variant="primary">
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
                    <Button active size="sm" variant="primary">Button</Button>
                    <Button active variant="primary">Button</Button>
                    <Button loading active variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus size="sm" variant="primary">Button</Button>
                    <Button focus variant="primary">Button</Button>
                    <Button loading focus variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button hover size="sm" variant="primary">Button</Button>
                    <Button hover variant="primary">Button</Button>
                    <Button loading hover variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button focus hover size="sm" variant="primary">Button</Button>
                    <Button focus hover variant="primary">Button</Button>
                    <Button loading focus hover variant="primary">Button</Button>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Button disabled size="sm" variant="primary">Button</Button>
                    <Button disabled variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled active size="sm" variant="primary">Button</Button>
                    <Button disabled active variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus size="sm" variant="primary">Button</Button>
                    <Button disabled focus variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled hover size="sm" variant="primary">Button</Button>
                    <Button disabled hover variant="primary">Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button disabled focus hover size="sm" variant="primary">Button</Button>
                    <Button disabled focus hover variant="primary">Button</Button>
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
                <Button variant="primary">Button</Button>
            </Div>
            <Div className="zoom-out">
                <Button variant="primary">Button</Button>
            </Div>
        </Inline>
    )
};
