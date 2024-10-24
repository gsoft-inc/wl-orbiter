import { Checkbox } from "@components/checkbox";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { IconList } from "@components/icons";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Flex, Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Checkbox/indeterminate",
    component: Checkbox
} as Meta<typeof Checkbox>;

export default meta;

type CheckboxStory = StoryObj<typeof meta>;

export const Labeled: CheckboxStory = {
    name: "labeled",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Checkbox size="sm" defaultIndeterminate>Milky Way</Checkbox>
                <Checkbox defaultIndeterminate>Milky Way</Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
                <Checkbox defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox defaultIndeterminate>
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
                <Checkbox size="sm" aria-label="Milky Way" defaultIndeterminate />
                <Checkbox aria-label="Milky Way" defaultIndeterminate />
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultIndeterminate>
                    <MailIcon />
                </Checkbox>
                <Checkbox aria-label="Email" defaultIndeterminate>
                    <MailIcon />
                </Checkbox>
                <Checkbox disabled aria-label="Email" defaultIndeterminate>
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultIndeterminate>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
                <Checkbox aria-label="Email" defaultIndeterminate>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Milky Way" defaultIndeterminate>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Milky Way" defaultIndeterminate>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultIndeterminate>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Email" defaultIndeterminate>
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
                <Checkbox reverse defaultIndeterminate>Milky Way</Checkbox>
            </Div>
            <Inline>
                <Checkbox reverse defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
                <Checkbox reverse defaultIndeterminate>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse defaultIndeterminate>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse defaultIndeterminate>
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
                <Checkbox validationState="invalid" defaultIndeterminate>Milky Way</Checkbox>
                <Checkbox validationState="valid" defaultIndeterminate>Milky Way</Checkbox>
            </Inline>
            <Inline>
                <Checkbox validationState="invalid" defaultIndeterminate>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox validationState="invalid" defaultIndeterminate>
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
                    <Checkbox active size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox active defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox focus defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox hover size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox hover defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus hover size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox focus hover defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Checkbox disabled size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox disabled defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled active size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox disabled active defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox disabled focus defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled hover size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox disabled hover defaultIndeterminate>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus hover size="sm" defaultIndeterminate>Milky Way</Checkbox>
                    <Checkbox disabled focus hover defaultIndeterminate>Milky Way</Checkbox>
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
                <Checkbox defaultIndeterminate>PA-99-N2 event and possible exoplanet in galaxy</Checkbox>
            </Flex>
            <Flex alignItems="end" maxWidth={320}>
                <Checkbox defaultIndeterminate>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Flex>
            <Flex alignItems="end" maxWidth={320}>
                <Checkbox defaultIndeterminate>
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
                <Checkbox defaultIndeterminate>Milky Way</Checkbox>
            </Div>
            <Div className="zoom-out">
                <Checkbox defaultIndeterminate>Milky Way</Checkbox>
            </Div>
        </Inline>
    )
};
