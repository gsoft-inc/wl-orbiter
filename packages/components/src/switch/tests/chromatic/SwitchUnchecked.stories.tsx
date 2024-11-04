import { Switch } from "@components/switch";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { IconList } from "@components/icons";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Switch/unchecked",
    component: Switch,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Switch>;

export default meta;

type SwitchStory = StoryObj<typeof meta>;

export const Labeled: SwitchStory = {
    name: "labeled",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Switch size="sm">Engines</Switch>
                <Switch>Engines</Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm">
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
                <Switch>
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
                <Switch disabled>
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm">
                    <Text>Engines</Text>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
                <Switch>
                    <Text>Engines</Text>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm">
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
                <Switch>
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm">
                    <Text>Engines</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
                <Switch>
                    <Text>Engines</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
            </Inline>
        </Stack>
    )
};

export const NoLabel: SwitchStory = {
    name: "no label",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Engines" />
                <Switch aria-label="Engines" />
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email">
                    <MailIcon />
                </Switch>
                <Switch aria-label="Email">
                    <MailIcon />
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email">
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
                <Switch aria-label="Email">
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Engines">
                    <Counter>60</Counter>
                </Switch>
                <Switch aria-label="Engines">
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email">
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
                <Switch aria-label="Email">
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
            </Inline>
        </Stack>
    )
};

export const Reverse: SwitchStory = {
    name: "reverse",
    render: () => (
        <Stack>
            <Switch reverse>Engines</Switch>
            <Inline>
                <Switch reverse>
                    <Text>Engines</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Switch>
                <Switch reverse>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Switch>
            </Inline>
            <Inline>
                <Switch reverse>
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
                <Switch reverse>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline>
                <Switch reverse>
                    <Text>Engines</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Switch>
                <Switch reverse>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
        </Stack>
    )
};

export const States: SwitchStory = {
    name: "states",
    render: () => (
        <Inline>
            <Stack>
                <Inline alignY="end">
                    <Switch active size="sm">Engines</Switch>
                    <Switch active>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch focus size="sm">Engines</Switch>
                    <Switch focus>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch hover size="sm">Engines</Switch>
                    <Switch hover>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch focus hover size="sm">Engines</Switch>
                    <Switch focus hover>Engines</Switch>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Switch disabled size="sm">Engines</Switch>
                    <Switch disabled>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled active size="sm">Engines</Switch>
                    <Switch disabled active>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled focus size="sm">Engines</Switch>
                    <Switch disabled focus>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled hover size="sm">Engines</Switch>
                    <Switch disabled hover>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled focus hover size="sm">Engines</Switch>
                    <Switch disabled focus hover>Engines</Switch>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Overflow: SwitchStory = {
    name: "overflow",
    render: () => (
        <Stack>
            <Div maxWidth="16rem">
                <Switch>PA-99-N2 event and possible exoplanet in galaxy</Switch>
            </Div>
            <Div maxWidth="16rem">
                <Switch>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Switch>
            </Div>
            <Div maxWidth="16rem">
                <Switch>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <Counter>60</Counter>
                </Switch>
            </Div>
        </Stack>
    )
};

export const Zoom: SwitchStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Switch>Engines</Switch>
            </Div>
            <Div className="zoom-out">
                <Switch>Engines</Switch>
            </Div>
        </Inline>
    )
};
