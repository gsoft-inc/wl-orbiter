import { AddIcon } from "@hopper-ui/icons";
import { Button, ButtonGroup, IconButton } from "@components/button/index.js";
import { Div } from "@components/html/index.js";
import { Inline, Stack } from "@components/layout/index.js";
import { TextLinkAsButton } from "@components/link/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/ButtonGroup",
    component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

type ButtonGroupStory = ComponentStoryObj<typeof ButtonGroup>;

export const Default: ButtonGroupStory = {
    storyName: "default",
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
    storyName: "icon button",
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
    storyName: "fluid",
    render: () => (
        <ButtonGroup fluid>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </ButtonGroup>
    )
};

export const Disabled: ButtonGroupStory = {
    storyName: "disabled",
    render: () => (
        <ButtonGroup disabled>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </ButtonGroup>
    )
};

export const Align: ButtonGroupStory = {
    storyName: "align",
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
    storyName: "zoom",
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

