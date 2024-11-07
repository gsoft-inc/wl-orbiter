import { Button } from "@components/button/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { IconList, Text } from "@hopper-ui/components";
import { StartOverIcon } from "@hopper-ui/icons";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Button-hopper/secondary (inherit)",
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
                    <Button size="sm" variant="secondary">Button</Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">Button</Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary">Button</Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary">Button</Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">Button</Button>
                </Div>
            </Div>
            <Div width="10%">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">Button</Button>
                </Div>
            </Div>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading fluid variant="secondary">Button</Button>
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
                    <Button size="sm" variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary">
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
            </Div>
            <Stack>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">
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
                    <Button size="sm" variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary">
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Div>
            <Stack>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">
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
                    <Button size="sm" variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button size="sm" variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
            </Inline>
            <Inline alignY="end">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading size="sm" variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button loading variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Inline>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button disabled variant="secondary">
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Div>
            <Div>
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button fluid variant="secondary">
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
                        <Button active size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button active variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading active variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading focus variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button hover size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button hover variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading hover variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus hover size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button focus hover variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button loading focus hover variant="secondary">Button</Button>
                    </Div>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled active size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled active variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled hover size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled hover variant="secondary">Button</Button>
                    </Div>
                </Inline>
                <Inline alignY="end">
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus hover size="sm" variant="secondary">Button</Button>
                    </Div>
                    <Div color="sunken-treasure-600" backgroundColor="koi-25">
                        <Button disabled focus hover variant="secondary">Button</Button>
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
                    <Button variant="secondary">Button</Button>
                </Div>
            </Div>
            <Div className="zoom-out">
                <Div color="sunken-treasure-600" backgroundColor="koi-25">
                    <Button variant="secondary">Button</Button>
                </Div>
            </Div>
        </Inline>
    )
};
