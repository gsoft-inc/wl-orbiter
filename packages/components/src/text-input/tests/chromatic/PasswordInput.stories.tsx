import { Inline, Stack } from "@components/layout";
import { Div } from "@components/html";
import { PasswordInput } from "@components/text-input";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/PasswordInput",
    component: PasswordInput
} as ComponentMeta<typeof PasswordInput>;

type PasswordInputStory = ComponentStoryObj<typeof PasswordInput>;

export const Default: PasswordInputStory = {
    storyName: "default",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordInput aria-label="Label" />
                <PasswordInput aria-label="Label" size="sm" />
            </Inline>
            <PasswordInput disabled aria-label="Label"></PasswordInput>
            <PasswordInput readOnly aria-label="Label"></PasswordInput>
            <PasswordInput fluid aria-label="Label"></PasswordInput>
            <Div width="10%">
                <PasswordInput fluid aria-label="Label"></PasswordInput>
            </Div>
        </Stack>
    )
};

export const Placeholder: PasswordInputStory = {
    storyName: "placeholder",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordInput placeholder="What's your secret?" />
                <PasswordInput placeholder="What's your secret?" size="sm" />
            </Inline>
            <PasswordInput disabled placeholder="What's your secret?"></PasswordInput>
            <PasswordInput readOnly placeholder="What's your secret?"></PasswordInput>
            <PasswordInput fluid placeholder="What's your secret?"></PasswordInput>
            <Div width="10%">
                <PasswordInput fluid placeholder="What's your secret?"></PasswordInput>
            </Div>
        </Stack>
    )
};

export const Value: PasswordInputStory = {
    storyName: "value",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <PasswordInput defaultValue="test123!" aria-label="Label" />
                <PasswordInput defaultValue="test123!" aria-label="Label" size="sm" />
            </Inline>
            <PasswordInput disabled defaultValue="test123!" aria-label="Label" />
            <PasswordInput readOnly defaultValue="test123!" aria-label="Label" />
            <Inline>
                <PasswordInput placeholder="What's your secret?" defaultValue="test123!" />
                <PasswordInput value="test123!" aria-label="Label" />
            </Inline>
            <PasswordInput fluid defaultValue="test123!" aria-label="Label"></PasswordInput>
            <Div width="10%">
                <PasswordInput fluid defaultValue="test123!" aria-label="Label"></PasswordInput>
            </Div>
        </Stack>
    )
};

export const States: PasswordInputStory = {
    storyName: "states",
    render: () => (
        <Stack>
            <PasswordInput active placeholder="What's your secret?" />
            <Inline>
                <PasswordInput focus placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" focus placeholder="What's your secret?" />
            </Inline>
            <Inline>
                <PasswordInput hover placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" hover placeholder="What's your secret?" />
            </Inline>
            <Inline>
                <PasswordInput focus hover placeholder="What's your secret?" />
                <PasswordInput defaultValue="test123!" focus hover placeholder="What's your secret?" />
            </Inline>
            <PasswordInput disabled placeholder="What's your secret?" />
            <PasswordInput readOnly placeholder="What's your secret?" />
        </Stack>
    )
};

export const Zoom: PasswordInputStory = {
    storyName: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline alignY="center">
                    <PasswordInput placeholder="What's your secret?" />
                    <PasswordInput placeholder="What's your secret?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <PasswordInput placeholder="What's your secret?" />
                    <PasswordInput placeholder="What's your secret?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: PasswordInputStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <PasswordInput border="amanita-600" aria-label="Label" />
            <PasswordInput className="border-red" aria-label="Label" />
            <PasswordInput style={{ border: "1px solid red" }} aria-label="Label" />
            <PasswordInput wrapperProps={{ className: "border-red" }} aria-label="Label" />
            <PasswordInput wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" />
        </Inline>
    )
};
