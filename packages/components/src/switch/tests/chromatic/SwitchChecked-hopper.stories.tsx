import { Switch } from "@components/switch";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { IconList, Text } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Switch-hopper/checked",
    component: Switch
} as Meta<typeof Switch>;

export default meta;

type SwitchStory = StoryObj<typeof meta>;

export const Labeled: SwitchStory = {
    name: "labeled",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Switch size="sm" defaultChecked>Engines</Switch>
                <Switch defaultChecked>Engines</Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" defaultChecked>
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
                <Switch defaultChecked>
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
                <Switch disabled defaultChecked>
                    <Text>Engines</Text>
                    <MailIcon />
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" defaultChecked>
                    <Text>Engines</Text>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
                <Switch defaultChecked>
                    <Text>Engines</Text>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" defaultChecked>
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
                <Switch defaultChecked>
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" defaultChecked>
                    <Text>Engines</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
                <Switch defaultChecked>
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
                <Switch size="sm" aria-label="Engines" defaultChecked />
                <Switch aria-label="Engines" defaultChecked />
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email" defaultChecked>
                    <MailIcon />
                </Switch>
                <Switch aria-label="Email" defaultChecked>
                    <MailIcon />
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email" defaultChecked>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
                <Switch aria-label="Email" defaultChecked>
                    <IconList><MailIcon /><MailIcon /><MailIcon /></IconList>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Engines" defaultChecked>
                    <Counter>60</Counter>
                </Switch>
                <Switch aria-label="Engines" defaultChecked>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline alignY="end">
                <Switch size="sm" aria-label="Email" defaultChecked>
                    <MailIcon />
                    <Counter>60</Counter>
                </Switch>
                <Switch aria-label="Email" defaultChecked>
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
            <Switch reverse defaultChecked>Engines</Switch>
            <Inline>
                <Switch reverse defaultChecked>
                    <Text>Engines</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Switch>
                <Switch reverse defaultChecked>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Switch>
            </Inline>
            <Inline>
                <Switch reverse defaultChecked>
                    <Text>Engines</Text>
                    <Counter>60</Counter>
                </Switch>
                <Switch reverse defaultChecked>
                    <Counter>60</Counter>
                </Switch>
            </Inline>
            <Inline>
                <Switch reverse defaultChecked>
                    <Text>Engines</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Switch>
                <Switch reverse defaultChecked>
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
                    <Switch active size="sm" defaultChecked>Engines</Switch>
                    <Switch active defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch focus size="sm" defaultChecked>Engines</Switch>
                    <Switch focus defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch hover size="sm" defaultChecked>Engines</Switch>
                    <Switch hover defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch focus hover size="sm" defaultChecked>Engines</Switch>
                    <Switch focus hover defaultChecked>Engines</Switch>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Switch disabled size="sm" defaultChecked>Engines</Switch>
                    <Switch disabled defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled active size="sm" defaultChecked>Engines</Switch>
                    <Switch disabled active defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled focus size="sm" defaultChecked>Engines</Switch>
                    <Switch disabled focus defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled hover size="sm" defaultChecked>Engines</Switch>
                    <Switch disabled hover defaultChecked>Engines</Switch>
                </Inline>
                <Inline alignY="end">
                    <Switch disabled focus hover size="sm" defaultChecked>Engines</Switch>
                    <Switch disabled focus hover defaultChecked>Engines</Switch>
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
                <Switch defaultChecked>PA-99-N2 event and possible exoplanet in galaxy</Switch>
            </Div>
            <Div maxWidth="16rem">
                <Switch defaultChecked>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Switch>
            </Div>
            <Div maxWidth="16rem">
                <Switch defaultChecked>
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
                <Switch defaultChecked>Engines</Switch>
            </Div>
            <Div className="zoom-out">
                <Switch defaultChecked>Engines</Switch>
            </Div>
        </Inline>
    )
};
