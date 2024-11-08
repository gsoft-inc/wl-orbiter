import { Checkbox } from "@components/checkbox";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Flex, Text, IconList } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Checkbox-hopper/checked",
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
                <Checkbox size="sm" defaultChecked>Milky Way</Checkbox>
                <Checkbox defaultChecked>Milky Way</Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
                <Checkbox defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox defaultChecked>
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
                <Checkbox size="sm" aria-label="Milky Way" defaultChecked />
                <Checkbox aria-label="Milky Way" defaultChecked />
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultChecked>
                    <MailIcon />
                </Checkbox>
                <Checkbox aria-label="Email" defaultChecked>
                    <MailIcon />
                </Checkbox>
                <Checkbox disabled aria-label="Email" defaultChecked>
                    <MailIcon />
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultChecked>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
                <Checkbox aria-label="Email" defaultChecked>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Milky Way" defaultChecked>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Milky Way" defaultChecked>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline alignY="end">
                <Checkbox size="sm" aria-label="Email" defaultChecked>
                    <MailIcon />
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox aria-label="Email" defaultChecked>
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
                <Checkbox reverse defaultChecked>Milky Way</Checkbox>
            </Div>
            <Inline>
                <Checkbox reverse defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
                <Checkbox reverse defaultChecked>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse defaultChecked>
                    <Counter>60</Counter>
                </Checkbox>
            </Inline>
            <Inline>
                <Checkbox reverse defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Checkbox>
                <Checkbox reverse defaultChecked>
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
                <Checkbox validationState="invalid" defaultChecked>Milky Way</Checkbox>
                <Checkbox validationState="valid" defaultChecked>Milky Way</Checkbox>
            </Inline>
            <Inline>
                <Checkbox validationState="invalid" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Checkbox>
                <Checkbox validationState="invalid" defaultChecked>
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
                    <Checkbox active size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox active defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox focus defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox hover size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox hover defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox focus hover size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox focus hover defaultChecked>Milky Way</Checkbox>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Checkbox disabled size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox disabled defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled active size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox disabled active defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox disabled focus defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled hover size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox disabled hover defaultChecked>Milky Way</Checkbox>
                </Inline>
                <Inline alignY="end">
                    <Checkbox disabled focus hover size="sm" defaultChecked>Milky Way</Checkbox>
                    <Checkbox disabled focus hover defaultChecked>Milky Way</Checkbox>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Overflow: CheckboxStory = {
    name: "overflow",
    render: () => (
        <Stack>
            <Flex alignItems="end" UNSAFE_maxWidth="320px">
                <Checkbox defaultChecked>PA-99-N2 event and possible exoplanet in galaxy</Checkbox>
            </Flex>
            <Flex alignItems="end" UNSAFE_maxWidth="320px">
                <Checkbox defaultChecked>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Checkbox>
            </Flex>
            <Flex alignItems="end" UNSAFE_maxWidth="320px">
                <Checkbox defaultChecked>
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
                <Checkbox defaultChecked>Milky Way</Checkbox>
            </Div>
            <Div className="zoom-out">
                <Checkbox defaultChecked>Milky Way</Checkbox>
            </Div>
        </Inline>
    )
};
