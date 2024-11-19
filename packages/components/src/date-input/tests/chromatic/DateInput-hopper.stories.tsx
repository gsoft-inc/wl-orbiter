import { DateInput } from "@components/date-input/index.ts";
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateInput-hopper/input",
    component: DateInput,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof DateInput>;

export default meta;

type DateInputStory = StoryObj<typeof meta>;

export const Default: DateInputStory = {
    name: "default",
    render: () => (
        <Stack>
            <DateInput />
            <DateInput fluid />
            <Div width="10%">
                <DateInput fluid />
            </Div>
        </Stack>
    )
};

export const Placeholder: DateInputStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <DateInput placeholder="custom" />
            <DateInput disabled placeholder="custom" />
            <DateInput readOnly placeholder="custom" />
            <DateInput fluid placeholder="custom" />
            <Div width="10%">
                <DateInput fluid placeholder="custom" />
            </Div>
        </Stack>
    )
};

export const Value: DateInputStory = {
    name: "value",
    render: () => (
        <Stack>
            <DateInput defaultValue={new Date(1970, 0, 5)} />
            <DateInput disabled defaultValue={new Date(1970, 0, 5)} />
            <DateInput readOnly defaultValue={new Date(1970, 0, 5)} />
            <DateInput defaultValue={new Date(1970, 0, 5)} />
            <DateInput value={new Date(1970, 0, 5)} />
            <DateInput fluid defaultValue={new Date(1970, 0, 5)} />
            <Div width="10%">
                <DateInput fluid defaultValue={new Date(1970, 0, 5)} />
            </Div>
        </Stack>
    )
};

export const Validation: DateInputStory = {
    name: "validation",
    render: () => (
        <Stack>
            <DateInput validationState="invalid" />
            <DateInput validationState="valid" />
        </Stack>
    )
};

export const States1: DateInputStory = {
    name: "states 1",
    render: () => (
        <Stack>
            <DateInput active placeholder="Where to?" />
            <DateInput focus placeholder="Where to?" />
            <DateInput hover placeholder="Where to?" />
            <DateInput focus hover placeholder="Where to?" />
            <DateInput disabled placeholder="Where to?" />
            <DateInput readOnly placeholder="Where to?" />
        </Stack>
    )
};

export const States2: DateInputStory = {
    name: "states 2",
    render: () => (
        <Stack>
            <DateInput validationState="invalid" active placeholder="Where to?" />
            <DateInput validationState="invalid" focus placeholder="Where to?" />
            <DateInput validationState="invalid" hover placeholder="Where to?" />
            <DateInput validationState="invalid" focus hover placeholder="Where to?" />
            <DateInput validationState="invalid" disabled placeholder="Where to?" />
            <DateInput validationState="invalid" readOnly placeholder="Where to?" />
        </Stack>
    )
};

export const Zoom: DateInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <DateInput />
            </Div>
            <Div className="zoom-out'">
                <DateInput />
            </Div>
        </Stack>
    )
};

export const Styling: DateInputStory = {
    name: "styling",
    render: () => (
        <Stack>
            <DateInput border="amanita-600" />
            <DateInput className="border-red" />
            <DateInput style={{ border: "1px solid red" }} />
            <DateInput wrapperProps={{ className: "border-red" }} />
            <DateInput wrapperProps={{ style: { border: "1px solid red" } }} />
        </Stack>
    )
};
