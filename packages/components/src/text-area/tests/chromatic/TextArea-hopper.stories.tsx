import { Inline, Stack } from "@components/layout/index.ts";

import { CrossButton } from "@components/button/index.ts";
import { Div } from "@components/html/index.ts";
import { TextArea } from "@components/text-area/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/TextArea-hopper",
    component: TextArea,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof TextArea>;

export default meta;

type TextAreaStory = StoryObj<typeof meta>;

export const Default: TextAreaStory = {
    name: "default",
    render: () => (
        <Stack>
            <TextArea aria-label="Label" />
            <TextArea loading aria-label="Label" />
            <TextArea disabled aria-label="Label" />
            <TextArea readOnly aria-label="Label" />
            <TextArea fluid aria-label="Label"></TextArea>
            <Div width="10%">
                <TextArea fluid aria-label="Label"></TextArea>
            </Div>
            <TextArea loading fluid aria-label="Label"></TextArea>
        </Stack>
    )
};


export const Placeholder: TextAreaStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <TextArea placeholder="Where to?" />
            <TextArea loading placeholder="Where to?" />
            <TextArea disabled placeholder="Where to?" />
            <TextArea readOnly placeholder="Where to?" />
            <TextArea fluid placeholder="Where to?"></TextArea>
            <Div width="10%">
                <TextArea fluid placeholder="Where to?"></TextArea>
            </Div>
            <TextArea loading fluid placeholder="Where to?"></TextArea>
        </Stack>
    )
};

export const Value: TextAreaStory = {
    name: "value",
    render: () => (
        <Stack>
            <TextArea defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextArea loading defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextArea disabled defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextArea readOnly defaultValue="SpaceX will win the race!" aria-label="Label" />
            <Inline>
                <TextArea defaultValue="SpaceX will win the race!" aria-label="Label" />
                <TextArea value="SpaceX will win the race!" aria-label="Label" />
            </Inline>
            <TextArea fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextArea>
            <Div width="10%">
                <TextArea fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextArea>
            </Div>
            <TextArea loading fluid defaultValue="SpaceX will win the race!" aria-label="Label"></TextArea>
        </Stack>
    )
};

export const Button: TextAreaStory = {
    name: "button",
    render: () => (
        <Stack>
            <TextArea button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
            <TextArea button={<CrossButton aria-label="Clear value" />} defaultValue="SpaceX will win the race!" aria-label="Label" />
            <TextArea disabled button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
            <TextArea readOnly button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
            <TextArea loading button={<CrossButton aria-label="Clear value" />} placeholder="Where to?" />
        </Stack>
    )
};

export const Validation: TextAreaStory = {
    name: "validation",
    render: () => (
        <Inline>
            <TextArea validationState="invalid" placeholder="Where to?" />
            <TextArea validationState="valid" placeholder="Where to?" />
        </Inline>
    )
};

export const States: TextAreaStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <TextArea loading placeholder="Where to?" />
                <TextArea disabled placeholder="Where to?" />
                <TextArea readOnly placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextArea active placeholder="Where to?" />
                <TextArea loading active placeholder="Where to?" />
                <TextArea disabled active placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextArea focus placeholder="Where to?" />
                <TextArea loading focus placeholder="Where to?" />
                <TextArea disabled focus placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextArea hover placeholder="Where to?" />
                <TextArea loading hover placeholder="Where to?" />
                <TextArea disabled hover placeholder="Where to?" />
            </Inline>
            <Inline alignY="end">
                <TextArea focus hover placeholder="Where to?" />
                <TextArea loading focus hover placeholder="Where to?" />
                <TextArea disabled focus hover placeholder="Where to?" />
            </Inline>
        </Stack>
    )
};

export const Autosize: TextAreaStory = {
    name: "autosize",
    render: () => (
        <Inline alignX="start">
            <TextArea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a eros nec urna mollis sollicitudin id et lacus. Nam in feugiat urna, eget volutpat sem. Duis ornare, eros nec accumsan consectetur, nunc nisi elementum quam, egestas posuere elit purus a neque. Nunc risus mi, interdum id nisl et, tempor pulvinar elit." aria-label="Label" />
            <TextArea maxRows={5} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a eros nec urna mollis sollicitudin id et lacus. Nam in feugiat urna, eget volutpat sem. Duis ornare, eros nec accumsan consectetur, nunc nisi elementum quam, egestas posuere elit purus a neque. Nunc risus mi, interdum id nisl et, tempor pulvinar elit." aria-label="Label" />
        </Inline>
    )
};

export const NoResize: TextAreaStory = {
    name: "no resize",
    render: () => (
        <TextArea resize="none" aria-label="Label" />
    )
};


export const Rows: TextAreaStory = {
    name: "rows",
    render: () => (
        <TextArea rows={12} aria-label="Label" />
    )
};

export const Zoom: TextAreaStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <TextArea aria-label="Label" />
            </Div>
            <Div className="zoom-out">
                <TextArea aria-label="Label" />
            </Div>
        </Stack>
    )
};

export const Styling: TextAreaStory = {
    name: "styling",
    render: () => (
        <Inline>
            <TextArea border="amanita-600" aria-label="Label" />
            <TextArea className="bg-red" aria-label="Label" />
            <TextArea style={{ backgroundColor: "red" }} aria-label="Label" />
            <TextArea wrapperProps={{ border: "amanita-600" }} aria-label="Label" />
            <TextArea wrapperProps={{ className: "border-red" }} aria-label="Label" />
            <TextArea wrapperProps={{ style: { border: "1px solid red" } }} aria-label="Label" />
        </Inline>
    )
};
