import { ButtonAsLink } from "@components/button";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { IconList, Text } from "@hopper-ui/components";
import { StartOverIcon } from "@hopper-ui/icons";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ButtonAsLink-hopper/negative",
    component: ButtonAsLink
} as Meta<typeof ButtonAsLink>;

export default meta;

type ButtonAsLinkStory = StoryObj<typeof meta>;

export const Default: ButtonAsLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">Button</ButtonAsLink>
                <ButtonAsLink variant="negative">Button</ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="negative">Button</ButtonAsLink>
                <ButtonAsLink loading variant="negative">Button</ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink fluid variant="negative">Button</ButtonAsLink>
            </Div>
            <Div width="10%">
                <ButtonAsLink fluid variant="negative">Button</ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink loading fluid variant="negative">Button</ButtonAsLink>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonAsLinkStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink loading variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="negative">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink fluid variant="negative">
                    <Text>Button</Text>
                </ButtonAsLink>
            </Stack>
        </Stack>
    )
};

export const EndIcon: ButtonAsLinkStory = {
    name: "end icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink loading variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="negative">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink fluid variant="negative">
                    <Text>Button</Text>
                </ButtonAsLink>
            </Stack>
        </Stack>
    )
};

export const CounterStory: ButtonAsLinkStory = {
    name: "counter",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink loading variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink fluid variant="negative">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Div>
        </Stack>
    )
};

export const States: ButtonAsLinkStory = {
    name: "states",
    render: () => (
        <Inline>
            <Stack>
                <Inline alignY="end">
                    <ButtonAsLink active size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink active variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink loading active variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink focus variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink loading focus variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink hover size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink hover variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink loading hover variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus hover size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink focus hover variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink loading focus hover variant="negative">Button</ButtonAsLink>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <ButtonAsLink disabled size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink disabled variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled active size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink disabled active variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled hover size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink disabled hover variant="negative">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus hover size="sm" variant="negative">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus hover variant="negative">Button</ButtonAsLink>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Zoom: ButtonAsLinkStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <ButtonAsLink variant="negative">Button</ButtonAsLink>
            </Div>
            <Div className="zoom-out">
                <ButtonAsLink variant="negative">Button</ButtonAsLink>
            </Div>
        </Inline>
    )
};
