import { DateRangeInput } from "@components/date-input/index.ts";
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateRangeInput-hopper/input",
    component: DateRangeInput,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof DateRangeInput>;

export default meta;

type DateRangeInputStory = StoryObj<typeof meta>;

export const Default: DateRangeInputStory = {
    name: "default",
    render: () => (
        <Stack>
            <DateRangeInput />
            <DateRangeInput fluid />
            <Div width="10%">
                <DateRangeInput fluid />
            </Div>
        </Stack>
    )
};

export const Placeholder: DateRangeInputStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <DateRangeInput placeholder="custom" />
            <DateRangeInput disabled placeholder="custom" />
            <DateRangeInput readOnly placeholder="custom" />
            <DateRangeInput fluid placeholder="custom" />
            <Div width="10%">
                <DateRangeInput fluid placeholder="custom" />
            </Div>
        </Stack>
    )
};

export const Value: DateRangeInputStory = {
    name: "value",
    render: () => (
        <Stack>
            <DateRangeInput defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            <DateRangeInput disabled defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            <DateRangeInput readOnly defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            <DateRangeInput defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            <DateRangeInput startDate={new Date(1970, 0, 5)} endDate={new Date(1971, 3, 10)} />
            <DateRangeInput fluid defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            <Div width="10%">
                <DateRangeInput fluid defaultStartDate={new Date(1970, 0, 5)} defaultEndDate={new Date(1971, 3, 10)} />
            </Div>
        </Stack>
    )
};

export const Validation: DateRangeInputStory = {
    name: "validation",
    render: () => (
        <Stack>
            <DateRangeInput validationState="invalid" />
            <DateRangeInput validationState="valid" />
        </Stack>
    )
};

export const States1: DateRangeInputStory = {
    name: "states 1",
    render: () => (
        <Stack>
            <DateRangeInput active />
            <DateRangeInput focus />
            <DateRangeInput hover />
            <DateRangeInput focus hover />
            <DateRangeInput readOnly />
        </Stack>
    )
};

export const States2: DateRangeInputStory = {
    name: "states 2",
    render: () => (
        <Stack>
            <DateRangeInput disabled />
            <DateRangeInput disabled active />
            <DateRangeInput disabled focus />
            <DateRangeInput disabled hover />
            <DateRangeInput disabled focus hover />
        </Stack>
    )
};

export const Zoom: DateRangeInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <DateRangeInput />
            </Div>
            <Div className="zoom-out'">
                <DateRangeInput />
            </Div>
        </Stack>
    )
};

export const Styling: DateRangeInputStory = {
    name: "styling",
    render: () => (
        <Stack>
            <DateRangeInput border="amanita-600" />
            <DateRangeInput className="border-red" />
            <DateRangeInput style={{ border: "1px solid red" }} />
        </Stack>
    )
};
