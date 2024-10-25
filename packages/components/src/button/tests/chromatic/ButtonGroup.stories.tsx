import { AddIcon } from "@hopper-ui/icons";
import { Button, ButtonGroup, IconButton } from "@components/button";
import { Div } from "@components/html";
import { Inline, Stack } from "@components/layout";
import { TextLinkAsButton } from "@components/link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/ButtonGroup",
    component: ButtonGroup,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof ButtonGroup>;

export default meta;

type ButtonGroupStory = StoryObj<typeof meta>;

export const Default: ButtonGroupStory = {
    name: "default",
    render: () => (
        <Stack>
            <ButtonGroup size="sm">
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
            </ButtonGroup>
        </Stack>
    )
};

export const ButtonGroupIconButton: ButtonGroupStory = {
    name: "icon button",
    render: () => (
        <Inline gap={800}>
            <Stack>
                <ButtonGroup size="sm">
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                </ButtonGroup>
                <ButtonGroup>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                </ButtonGroup>
            </Stack>
            <Stack>
                <ButtonGroup size="sm">
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                </ButtonGroup>
                <ButtonGroup>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                    <IconButton variant="secondary" aria-label="Add"><AddIcon /></IconButton>
                </ButtonGroup>
            </Stack>
        </Inline>
    )
};

export const Fluid: ButtonGroupStory = {
    name: "fluid",
    render: () => (
        <ButtonGroup fluid>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </ButtonGroup>
    )
};

export const Disabled: ButtonGroupStory = {
    name: "disabled",
    render: () => (
        <ButtonGroup disabled>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </ButtonGroup>
    )
};

export const Align: ButtonGroupStory = {
    name: "align",
    render: () => (
        <Stack>
            <ButtonGroup align="start">
                <Button variant="tertiary">Reset</Button>
                <Button variant="primary">Submit form</Button>
            </ButtonGroup>
            <ButtonGroup align="end">
                <Button variant="tertiary">Reset</Button>
                <Button variant="primary">Submit form</Button>
            </ButtonGroup>
            <ButtonGroup align="center">
                <Button variant="tertiary">Reset</Button>
                <Button variant="primary">Submit form</Button>
            </ButtonGroup>
            <ButtonGroup>
                <TextLinkAsButton href="#">Reset</TextLinkAsButton>
                <Button variant="secondary">Submit form</Button>
            </ButtonGroup>
        </Stack>
    )
};

export const Zoom: ButtonGroupStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <ButtonGroup>
                    <Button variant="tertiary">Reset</Button>
                    <Button variant="primary">Submit form</Button>
                </ButtonGroup>
            </Div>
            <Div className="zoom-out">
                <ButtonGroup>
                    <Button variant="tertiary">Reset</Button>
                    <Button variant="primary">Submit form</Button>
                </ButtonGroup>
            </Div>
        </Stack>
    )
};

