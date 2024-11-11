import { Button } from "@components/button/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Div } from "@components/html/index.ts";
import { IconList } from "@components/icons/index.ts";
import { StartOverIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout/index.ts";
import { Text } from "@components/typography/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button/secondary (inherit)",
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
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>Button</Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>Button</Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary" inherit>Button</Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary" inherit>Button</Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>Button</Button>
                </Div>
            </Div>
            <Div width="10%">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>Button</Button>
                </Div>
            </Div>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading fluid variant="secondary" inherit>Button</Button>
                </Div>
            </Div>
        </Stack>
    )
};

export const Icon: ButtonStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Div>
            <Stack>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Stack>
        </Stack>
    )
};

export const EndIcon: ButtonStory = {
    name: "end icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Div>
            <Stack>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Stack>
        </Stack>
    )
};

export const CounterStory: ButtonStory = {
    name: "counter",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Div>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary" inherit>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
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
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button active size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button active variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading active variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading focus variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button hover size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button hover variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading hover variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus hover size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus hover variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading focus hover variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled active size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled active variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled hover size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled hover variant="secondary" inherit>Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus hover size="sm" variant="secondary" inherit>Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus hover variant="secondary" inherit>Button</Button>
                    </Div>
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
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>Button</Button>
                </Div>
            </Div>
            <Div className="zoom-out">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary" inherit>Button</Button>
                </Div>
            </Div>
        </Inline>
    )
};
