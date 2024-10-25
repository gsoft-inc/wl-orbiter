import { Checkbox } from "@components/checkbox";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Flex, Text, IconList } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Checkbox-hopper/unchecked",
    component: Checkbox,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Checkbox>;

export default meta;

type CheckboxStory = StoryObj<typeof meta>;

export const Labeled: CheckboxStory = {
    name: "labeled",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Checkbox size="sm">Milky Way</Checkbox>
                <Checkbox>Milky Way</Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm">
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm">
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
                <Checkbox>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm">
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm">
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox>
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
        </Stack>
    )
};

export const NoLabel: CheckboxStory = {
    name: "no label",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Milky Way" />
                <Checkbox aria-label="Milky Way" />
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email">
                    <MailIcon />
                </Checkbox>
                <Checkbox aria-label="Email">
                    <MailIcon />
                </Checkbox>
                <Checkbox disabled aria-label="Email">
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email">
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
                <Checkbox aria-label="Email">
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Milky Way">
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Milky Way">
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email">
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Email">
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
        </Stack>
    )
};

export const Reverse: CheckboxStory = {
    name: "reverse",
    render: () => (
        <Stack>
            <Div>
                <Checkbox reverse>Milky Way</Checkbox>
            </Div>
            <Inline>
                <Checkbox reverse>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
                <Checkbox reverse>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse>
                    <IconList><MailIcon /><InfoIcon /><WarningIcon /></IconList>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
        </Stack>
    )
};

export const Validation: CheckboxStory = {
    name: "validation",
    render: () => (
        <Stack>
            <Inline>
                <Checkbox validationState="invalid">Milky Way</Checkbox>
                <Checkbox validationState="valid">Milky Way</Checkbox>
            </Inline>
            <Inline>
                <Checkbox validationState="invalid">
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox validationState="invalid">
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
        </Stack>
    )
};

export const States: CheckboxStory = {
    name: "states",
    render: () => (
        <Inline>
            <Stack>
                <Inline alignY="end">
                    <Checkbox active size="sm">Milky Way</Checkbox>
                    <Checkbox active>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus size="sm">Milky Way</Checkbox>
                    <Checkbox focus>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox hover size="sm">Milky Way</Checkbox>
                    <Checkbox hover>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus hover size="sm">Milky Way</Checkbox>
                    <Checkbox focus hover>Milky Way</Checkbox>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Checkbox disabled size="sm">Milky Way</Checkbox>
                    <Checkbox disabled>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled active size="sm">Milky Way</Checkbox>
                    <Checkbox disabled active>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus size="sm">Milky Way</Checkbox>
                    <Checkbox disabled focus>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled hover size="sm">Milky Way</Checkbox>
                    <Checkbox disabled hover>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus hover size="sm">Milky Way</Checkbox>
                    <Checkbox disabled focus hover>Milky Way</Checkbox>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Overflow: CheckboxStory = {
    name: "overflow",
    render: () => (
        <Stack>
            <Flex alignItems="end" maxWidth={320}>
                <Checkbox>PA-99-N2 event and possible exoplanet in galaxy</Checkbox>
            </Flex>
            <Flex alignItems="end" maxWidth={320}>
                <Checkbox>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Flex>
            <Flex alignItems="end" maxWidth={320}>
                <Checkbox>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <Counter>60</Counter>
                </Checkbox>
            </Flex>
        </Stack>
    )
};

export const Zoom: CheckboxStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Checkbox>Milky Way</Checkbox>
            </Div>
            <Div className="zoom-out">
                <Checkbox>Milky Way</Checkbox>
            </Div>
        </Inline>
    )
};
