import { Button, ButtonGroup } from "@components/button/index.ts";
import { Div } from "@components/html/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { TextLinkAsButton } from "@components/link/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: ButtonGroup,
    title: "Chromatic/ButtonGroup/vertical"
} as Meta<typeof ButtonGroup>;

export default meta;

type ButtonGroupStory = StoryObj<typeof meta>;

export const Default: ButtonGroupStory = {
    name: "default",
    render: () => (
        <ButtonGroup orientation="vertical">
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </ButtonGroup>
    )
};


export const Size: ButtonGroupStory = {
    name: "size",
    render: () => (
        <Inline alignY="end">
            <ButtonGroup orientation="vertical" size="sm">
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
            </ButtonGroup>
            <ButtonGroup orientation="vertical">
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
                <Button variant="secondary">Cutoff</Button>
            </ButtonGroup>
        </Inline>
    )
};


export const Align: ButtonGroupStory = {
    name: "align",
    render: () => (
        <Stack>
            <Inline>
                <ButtonGroup align="start" orientation="vertical">
                    <Button variant="secondary">Reset</Button>
                    <Button variant="secondary">Submit form</Button>
                </ButtonGroup>
                <ButtonGroup align="end" orientation="vertical">
                    <Button variant="secondary">Reset</Button>
                    <Button variant="secondary">Submit form</Button>
                </ButtonGroup>
                <ButtonGroup align="center" orientation="vertical">
                    <Button variant="secondary">Reset</Button>
                    <Button variant="secondary">Submit form</Button>
                </ButtonGroup>
            </Inline>
            <ButtonGroup orientation="vertical">
                <TextLinkAsButton href="#">Reset</TextLinkAsButton>
                <Button variant="secondary">Submit form</Button>
            </ButtonGroup>
        </Stack>
    )
};

export const Zoom: ButtonGroupStory = {
    name: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <ButtonGroup orientation="vertical">
                    <Button variant="tertiary">Reset</Button>
                    <Button variant="primary">Submit form</Button>
                </ButtonGroup>
            </Div>
            <Div className="zoom-out">
                <ButtonGroup orientation="vertical">
                    <Button variant="tertiary">Reset</Button>
                    <Button variant="primary">Submit form</Button>
                </ButtonGroup>
            </Div>
        </Inline>
    )
};
