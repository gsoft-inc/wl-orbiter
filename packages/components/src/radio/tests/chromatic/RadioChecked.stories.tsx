import { Radio } from "@components/radio";
import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { IconList } from "@components/icons";
import { MailIcon, InfoIcon, WarningIcon } from "@hopper-ui/icons";
import { Flex, Inline, Stack } from "@components/layout";
import { Text } from "@components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Radio/checked",
    component: Radio,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Radio>;

export default meta;

type RadioStory = StoryObj<typeof meta>;

export const Labeled: RadioStory = {
    name: "labeled",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Radio value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio value="any" defaultChecked>Milky Way</Radio>
            </Inline>
            <Inline alignY="end">
                <Radio value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Radio>
                <Radio value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Radio>
                <Radio disabled value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Radio>
            </Inline>
            <Inline alignY="end">
                <Radio value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Radio>
                <Radio value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><MailIcon /><MailIcon />
                    </IconList>
                </Radio>
            </Inline>
            <Inline alignY="end">
                <Radio value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
                <Radio value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
                <Radio disabled value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
            </Inline>
            <Inline alignY="end">
                <Radio value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Radio>
                <Radio value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                    <Counter>60</Counter>
                </Radio>
            </Inline>
        </Stack>
    )
};

export const Reverse: RadioStory = {
    name: "reverse",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Radio reverse value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio reverse value="any" defaultChecked>Milky Way</Radio>
            </Inline>
            <Inline alignY="end">
                <Radio reverse value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Radio>
                <Radio reverse value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                </Radio>
            </Inline>
            <Inline alignY="end">
                <Radio reverse value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
                <Radio reverse value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
            </Inline>
            <Inline alignY="end">
                <Radio reverse value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Radio>
                <Radio reverse value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <IconList>
                        <MailIcon /><InfoIcon /><WarningIcon />
                    </IconList>
                    <Counter>60</Counter>
                </Radio>
            </Inline>
        </Stack>
    )
};

export const Validation: RadioStory = {
    name: "validation",
    render: () => (
        <Stack>
            <Inline>
                <Radio validationState="invalid" value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio validationState="invalid" value="any" defaultChecked>Milky Way</Radio>
                <Radio validationState="valid" value="any" defaultChecked>Milky Way</Radio>
            </Inline>
            <Inline>
                <Radio validationState="invalid" value="any" defaultChecked size="sm">
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Radio>
                <Radio validationState="invalid" value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <MailIcon />
                </Radio>
                <Radio validationState="invalid" value="any" defaultChecked>
                    <Text>Milky Way</Text>
                    <Counter>60</Counter>
                </Radio>
            </Inline>
        </Stack>
    )
};

export const States: RadioStory = {
    name: "states",
    render: () => (
        <Inline>
            <Stack>
                <Radio active value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio focus value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio hover value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio focus hover value="any" defaultChecked size="sm">Milky Way</Radio>
            </Stack>
            <Stack>
                <Radio active value="any" defaultChecked>Milky Way</Radio>
                <Radio focus value="any" defaultChecked>Milky Way</Radio>
                <Radio hover value="any" defaultChecked>Milky Way</Radio>
                <Radio focus hover value="any" defaultChecked>Milky Way</Radio>
            </Stack>
            <Stack>
                <Radio disabled value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio disabled active value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio disabled focus value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio disabled hover value="any" defaultChecked size="sm">Milky Way</Radio>
                <Radio disabled focus hover value="any" defaultChecked size="sm">Milky Way</Radio>
            </Stack>
            <Stack>
                <Radio disabled value="any" defaultChecked>Milky Way</Radio>
                <Radio disabled active value="any" defaultChecked>Milky Way</Radio>
                <Radio disabled focus value="any" defaultChecked>Milky Way</Radio>
                <Radio disabled hover value="any" defaultChecked>Milky Way</Radio>
                <Radio disabled focus hover value="any" defaultChecked>Milky Way</Radio>
            </Stack>
        </Inline>
    )
};

export const Overflow: RadioStory = {
    name: "overflow",
    render: () => (
        <Stack>
            <Flex alignItems="end" maxWidth="16rem">
                <Radio value="any" defaultChecked>PA-99-N2 event and possible exoplanet in galaxy</Radio>
            </Flex>
            <Flex alignItems="end" maxWidth="16rem">
                <Radio value="any" defaultChecked>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <IconList>
                        <MailIcon /><MailIcon />
                    </IconList>
                </Radio>
            </Flex>
            <Flex alignItems="end" maxWidth="16rem">
                <Radio value="any" defaultChecked>
                    <Text>PA-99-N2 event and possible exoplanet in galaxy</Text>
                    <Counter>60</Counter>
                </Radio>
            </Flex>
        </Stack>
    )
};

export const Zoom: RadioStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Radio value="any" defaultChecked>Milky Way</Radio>
            </Div>
            <Div className="zoom-out">
                <Radio value="any" defaultChecked>Milky Way</Radio>
            </Div>
        </Inline>
    )
};
