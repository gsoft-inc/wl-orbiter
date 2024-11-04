import { Inline, Stack } from "@components/layout";

import { CrossButton } from "@components/button";
import { Div } from "@components/html";
import { SearchIcon } from "@hopper-ui/icons";
import { TextInput } from "@components/text-input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TextInput",
    component: TextInput,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof TextInput>;

export default meta;

type TextInputStory = StoryObj<typeof meta>;

export const Default: TextInputStory = {
    name: "default",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <TextInput aria-label="Label" />
                <TextInput aria-label="Label" size="sm" />
            </Inline>
            <TextInput active aria-label="Label" />
            <Inline alignY="center">
                <TextInput loading aria-label="Label" />
                <TextInput loading aria-label="Label" size="sm" />
            </Inline>
            <TextInput disabled aria-label="Label"></TextInput>
            <TextInput readOnly aria-label="Label"></TextInput>
            <TextInput fluid aria-label="Label"></TextInput>
            <Div width="10%">
                <TextInput fluid aria-label="Label"></TextInput>
            </Div>
            <TextInput loading fluid aria-label="Label"></TextInput>
        </Stack>
    )
};

export const Placeholder: TextInputStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <TextInput placeholder="Where to?" />
                <TextInput placeholder="Where to?" size="sm" />
            </Inline>
            <TextInput active placeholder="Where to?" />
            <TextInput loading placeholder="Where to?" />
            <TextInput disabled placeholder="Where to?"></TextInput>
            <TextInput readOnly placeholder="Where to?"></TextInput>
            <TextInput fluid placeholder="Where to?"></TextInput>
            <Div width="10%">
                <TextInput fluid placeholder="Where to?"></TextInput>
            </Div>
            <TextInput loading fluid placeholder="Where to?"></TextInput>
        </Stack>
    )
};

export const Value: TextInputStory = {
    name: "value",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <TextInput defaultValue="SpaceX will win the race!" aria-label="Label" />
                <TextInput defaultValue="SpaceX will win the race!" aria-label="Label" size="sm" />
            </Inline>
            <TextInput active defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextInput loading defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextInput disabled defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextInput readOnly defaultValue="SpaceX will win the race!" aria-label="Label" />
            <Inline>
                <TextInput defaultValue="SpaceX will win the race!" aria-label="Label" />
                <TextInput value="SpaceX will win the race!" aria-label="Label" />
            </Inline>
            <TextInput fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextInput>
            <Div width="10%">
                <TextInput fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextInput>
            </Div>
            <TextInput loading fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextInput>
        </Stack>
    )
};

export const Icon: TextInputStory = {
    name: "icon",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <TextInput icon={<SearchIcon />} placeholder="Where to?" aria-label="Label" />
                <TextInput icon={<SearchIcon />} placeholder="Where to?" aria-label="Label" size="sm" />
            </Inline>
            <TextInput icon={<SearchIcon />} defaultValue="SpaceX will win the race!" placeholder="Where to?" />
            <TextInput active icon={<SearchIcon />} placeholder="Where to?" />
            <TextInput loading icon={<SearchIcon />} placeholder="Where to?" />
            <TextInput disabled icon={<SearchIcon />} placeholder="Where to?" />
            <TextInput readOnly icon={<SearchIcon />} placeholder="Where to?" />
            <TextInput fluid icon={<SearchIcon />} placeholder="Where to?" />
            <Div width="10%">
                <TextInput fluid icon={<SearchIcon />} placeholder="Where to?" />
            </Div>
        </Stack>
    )
};

export const Button: TextInputStory = {
    name: "button",
    render: () => (
        <Stack>
            <Inline alignY="center">
                <TextInput button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
                <TextInput button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" size="sm" />
            </Inline>
            <TextInput button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" defaultValue="SpaceX will win the race!" />
            <Inline>
                <TextInput disabled button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
                <TextInput readOnly button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
            </Inline>
            <TextInput loading button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
            <TextInput active button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
        </Stack>
    )
};

export const Validation: TextInputStory = {
    name: "validation",
    render: () => (
        <Inline>
            <TextInput validationState="invalid" placeholder="Where to?" />
            <TextInput validationState="valid" placeholder="Where to?" />
        </Inline>
    )
};

export const States: TextInputStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextInput loading placeholder="Where to?" />
                <TextInput disabled placeholder="Where to?" />
                <TextInput readOnly placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextInput active placeholder="Where to?" />
                <TextInput loading active placeholder="Where to?" />
                <TextInput disabled active placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextInput focus placeholder="Where to?" />
                <TextInput loading focus placeholder="Where to?" />
                <TextInput disabled focus placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextInput hover placeholder="Where to?" />
                <TextInput loading hover placeholder="Where to?" />
                <TextInput disabled hover placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextInput focus hover placeholder="Where to?" />
                <TextInput loading focus hover placeholder="Where to?" />
                <TextInput disabled focus hover placeholder="Where to?" />
            </Inline>
        </Stack>
    )
};

export const Zoom: TextInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Inline alignY="center">
                    <TextInput placeholder="Where to?" />
                    <TextInput placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
            <Div className="zoom-out">
                <Inline alignY="center">
                    <TextInput placeholder="Where to?" />
                    <TextInput placeholder="Where to?" size="sm" />
                </Inline>
            </Div>
        </Stack>
    )
};

export const Styling: TextInputStory = {
    name: "styling",
    render: () => (
        <Inline>
            <TextInput border="amanita-600" aria-label="Label" />
            <TextInput className="bg-red" aria-label="Label" />
            <TextInput style={{ backgroundColor: "red" }} aria-label="Label" />
            <TextInput wrapperProps={{ border: "amanita-500" }} aria-label="Label" />
            <TextInput wrapperProps={{ className: "border-red" }} aria-label="Label" />
            <TextInput wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" />
        </Inline>
    )
};
