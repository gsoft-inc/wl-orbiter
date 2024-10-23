import { ButtonAsLink } from "@components/button";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { IconList, Text } from "@hopper-ui/components";
import { StartOverIcon } from "@hopper-ui/icons";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ButtonAsLink-hopper/primary",
    component: ButtonAsLink
} as Meta<typeof ButtonAsLink>;

export default meta;

type ButtonAsLinkStory = StoryObj<typeof meta>;

export const Default: ButtonAsLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="primary">Button</ButtonAsLink>
                <ButtonAsLink variant="primary">Button</ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="primary">Button</ButtonAsLink>
                <ButtonAsLink loading variant="primary">Button</ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink fluid variant="primary">Button</ButtonAsLink>
            </Div>
            <Div width="10%">
                <ButtonAsLink fluid variant="primary">Button</ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink loading fluid variant="primary">Button</ButtonAsLink>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonAsLinkStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="primary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink loading variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="primary">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink fluid variant="primary">
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
                <ButtonAsLink size="sm" variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="primary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink loading variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="primary">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink fluid variant="primary">
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
                <ButtonAsLink size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink loading variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="primary">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink fluid variant="primary">
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
                    <ButtonAsLink active size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink active variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink loading active variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink focus variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink loading focus variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink hover size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink hover variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink loading hover variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus hover size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink focus hover variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink loading focus hover variant="primary">Button</ButtonAsLink>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <ButtonAsLink disabled size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink disabled variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled active size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink disabled active variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled hover size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink disabled hover variant="primary">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus hover size="sm" variant="primary">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus hover variant="primary">Button</ButtonAsLink>
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
                <ButtonAsLink variant="primary">Button</ButtonAsLink>
            </Div>
            <Div className="zoom-out">
                <ButtonAsLink variant="primary">Button</ButtonAsLink>
            </Div>
        </Inline>
    )
};
