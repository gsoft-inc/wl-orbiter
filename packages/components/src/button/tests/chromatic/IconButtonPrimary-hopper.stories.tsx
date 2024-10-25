import { AddIcon } from "@hopper-ui/icons";
import { IconButton } from "@components/button";
import { Inline, Stack } from "@components/layout";
import { Div } from "@components/html";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/IconButton-hopper/primary",
    component: IconButton,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof IconButton>;

export default meta;

type IconButtonStory = StoryObj<typeof meta>;

export const Default: IconButtonStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <IconButton size="2xs" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton size="xs" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton size="sm" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
            </Inline>
            <Inline alignY="end">
                <IconButton loading size="2xs" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton loading size="xs" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton loading size="sm" aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
                <IconButton loading aria-label="Add" variant="primary">
                    <AddIcon />
                </IconButton>
            </Inline>
        </Stack>
    )
};

export const States: IconButtonStory = {
    name: "states",
    render: () => (
        <Inline gap="4.5rem">
            <Stack>
                <Inline alignY="end">
                    <IconButton active size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton active size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton active size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton active aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton loading active aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton focus size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton loading focus aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton hover size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton hover size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton hover size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton loading hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton focus hover size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus hover size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus hover size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton focus hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton loading focus hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
            </Stack>
            <Stack>
                <Inline alignY="end">
                    <IconButton disabled size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton disabled active size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled active size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled active size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled active aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton disabled focus size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton disabled hover size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled hover size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled hover size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
                <Inline alignY="end">
                    <IconButton disabled focus hover size="2xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus hover size="xs" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus hover size="sm" aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                    <IconButton disabled focus hover aria-label="Add" variant="primary">
                        <AddIcon />
                    </IconButton>
                </Inline>
            </Stack>
        </Inline>
    )
};

export const Zoom: IconButtonStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <IconButton variant="primary">
                    <AddIcon />
                </IconButton>
            </Div>
            <Div className="zoom-out">
                <IconButton variant="primary">
                    <AddIcon />
                </IconButton>
            </Div>
        </Inline>
    )
};
