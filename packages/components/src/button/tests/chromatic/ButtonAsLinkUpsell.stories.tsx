import { ButtonAsLink } from "@components/button";
import { Inline, Stack } from "@components/layout";
import { Div } from "@components/html";
import { IconList } from "@components/icons";
import { StartOverIcon } from "@hopper-ui/icons";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ButtonAsLink/upsell",
    component: ButtonAsLink,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ButtonAsLink>;

export default meta;

type ButtonAsLinkStory = StoryObj<typeof meta>;

export const Default: ButtonAsLinkStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">Button</ButtonAsLink>
                <ButtonAsLink variant="upsell">Button</ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="upsell">Button</ButtonAsLink>
                <ButtonAsLink loading variant="upsell">Button</ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink fluid variant="upsell">Button</ButtonAsLink>
            </Div>
            <Div width="10%">
                <ButtonAsLink fluid variant="upsell">Button</ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink loading fluid variant="upsell">Button</ButtonAsLink>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonAsLinkStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <IconList>
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink loading variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="upsell">
                    <StartOverIcon />
                    <Text>Button</Text>
                </ButtonAsLink>
                <ButtonAsLink fluid variant="upsell">
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
                <ButtonAsLink size="sm" variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <Text>Button</Text>
                    <IconList slot="end-icon">
                        <StartOverIcon /><StartOverIcon /><StartOverIcon />
                    </IconList>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink loading variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Div>
            <Stack>
                <ButtonAsLink fluid variant="upsell">
                    <Text>Button</Text>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink fluid variant="upsell">
                    <Text>Button</Text>
                </ButtonAsLink>
            </Stack>
        </Stack>
    )
};

export const Counter: ButtonAsLinkStory = {
    name: "counter",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink size="sm" variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
                <ButtonAsLink variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                    <StartOverIcon slot="end-icon" />
                </ButtonAsLink>
            </Inline>
            <Inline alignY="end">
                <ButtonAsLink loading size="sm" variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
                <ButtonAsLink loading variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Inline>
            <Div>
                <ButtonAsLink disabled variant="upsell">
                    <Text>Button</Text>
                    <Counter variant="divider">15</Counter>
                </ButtonAsLink>
            </Div>
            <Div>
                <ButtonAsLink fluid variant="upsell">
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
                    <ButtonAsLink active size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink active variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink loading active variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink focus variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink loading focus variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink hover size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink hover variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink loading hover variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink focus hover size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink focus hover variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink loading focus hover variant="upsell">Button</ButtonAsLink>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <ButtonAsLink disabled size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink disabled variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled active size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink disabled active variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled hover size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink disabled hover variant="upsell">Button</ButtonAsLink>
                </Inline>
                <Inline alignY="end">
                    <ButtonAsLink disabled focus hover size="sm" variant="upsell">Button</ButtonAsLink>
                    <ButtonAsLink disabled focus hover variant="upsell">Button</ButtonAsLink>
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
                <ButtonAsLink variant="upsell">Button</ButtonAsLink>
            </Div>
            <Div className="zoom-out">
                <ButtonAsLink variant="upsell">Button</ButtonAsLink>
            </Div>
        </Inline>
    )
};
