import { Counter } from "@components/counter/index.js";
import { Div } from "@components/html/index.js";
import { IconList } from "@components/icons/index.js";
import { StartOverIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout/index.js";
import { Text } from "@components/typography/index.js";
import { cloneElement } from "react";

function Button({ element, ...rest }) {
    return cloneElement(element, rest);
}

export function createButtonTestSuite(element, stories) {
    return stories
        .add("default", () =>
            <Stack>
                <Inline alignY="end">
                    <Button size="sm" element={element}>Button</Button>
                    <Button element={element}>Button</Button>
                </Inline>
                <Inline alignY="end">
                    <Button loading size="sm" element={element}>Button</Button>
                    <Button loading element={element}>Button</Button>
                </Inline>
                <Div>
                    <Button fluid element={element}>Button</Button>
                </Div>
                <Div width="10%">
                    <Button fluid element={element}>Button</Button>
                </Div>
                <Div>
                    <Button loading fluid element={element}>Button</Button>
                </Div>
            </Stack>
        )
        .add("icon", () =>
            <Stack>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                    <Button element={element}>
                        <IconList>
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                        <Text>Button</Text>
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button loading size="sm" element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button loading element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Inline>
                <Div>
                    <Button disabled element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                </Div>
                <Stack>
                    <Button fluid element={element}>
                        <StartOverIcon />
                        <Text>Button</Text>
                    </Button>
                    <Button fluid element={element}>
                        <Text>Button</Text>
                    </Button>
                </Stack>
            </Stack>
        )
        .add("end icon", () =>
            <Stack>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                    <Button element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                    <Button element={element}>
                        <Text>Button</Text>
                        <IconList slot="end-icon">
                            <StartOverIcon /><StartOverIcon /><StartOverIcon />
                        </IconList>
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button loading size="sm" element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                    <Button loading element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Inline>
                <Div>
                    <Button disabled element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Div>
                <Stack>
                    <Button fluid element={element}>
                        <Text>Button</Text>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                    <Button fluid element={element}>
                        <Text>Button</Text>
                    </Button>
                </Stack>
            </Stack>
        )
        .add("counter", () =>
            <Stack>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                    <Button element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button size="sm" element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                    <Button element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                        <StartOverIcon slot="end-icon" />
                    </Button>
                </Inline>
                <Inline alignY="end">
                    <Button loading size="sm" element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                    <Button loading element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Inline>
                <Div>
                    <Button disabled element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
                <Div>
                    <Button fluid element={element}>
                        <Text>Button</Text>
                        <Counter variant="divider">15</Counter>
                    </Button>
                </Div>
            </Stack>
        )
        .add("states", () =>
            <Inline>
                <Stack>
                    <Inline alignY="end">
                        <Button active size="sm" element={element}>Button</Button>
                        <Button active element={element}>Button</Button>
                        <Button loading active element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button focus size="sm" element={element}>Button</Button>
                        <Button focus element={element}>Button</Button>
                        <Button loading focus element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button hover size="sm" element={element}>Button</Button>
                        <Button hover element={element}>Button</Button>
                        <Button loading hover element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button focus hover size="sm" element={element}>Button</Button>
                        <Button focus hover element={element}>Button</Button>
                        <Button loading focus hover element={element}>Button</Button>
                    </Inline>
                </Stack>
                <Stack>
                    <Inline alignY="end">
                        <Button disabled size="sm" element={element}>Button</Button>
                        <Button disabled element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button disabled active size="sm" element={element}>Button</Button>
                        <Button disabled active element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button disabled focus size="sm" element={element}>Button</Button>
                        <Button disabled focus element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button disabled hover size="sm" element={element}>Button</Button>
                        <Button disabled hover element={element}>Button</Button>
                    </Inline>
                    <Inline alignY="end">
                        <Button disabled focus hover size="sm" element={element}>Button</Button>
                        <Button disabled focus hover element={element}>Button</Button>
                    </Inline>
                </Stack>
            </Inline>
        )
        .add("zoom", () =>
            <Inline>
                <Div className="zoom-in">
                    <Button element={element}>Button</Button>
                </Div>
                <Div className="zoom-out'">
                    <Button element={element}>Button</Button>
                </Div>
            </Inline>
        );
}
