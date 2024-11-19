import { DateRangeInput } from "@components/date-input/index.ts";
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";
import { subMonths, subWeeks } from "date-fns";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateRangeInput/compact presets",
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
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                fluid
            />
            <Div width="10%">
                <DateRangeInput
                    presets={[
                        { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                        { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                        { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                        { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                    ]}
                    presetsVariant="compact"
                    fluid
                />
            </Div>
        </Stack>
    )
};

export const Placeholder: DateRangeInputStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                placeholder="custom"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                placeholder="custom"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                readOnly
                placeholder="custom"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                fluid
                placeholder="custom"
            />
            <Div width="10%">
                <DateRangeInput
                    presets={[
                        { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                        { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                        { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                        { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                    ]}
                    presetsVariant="compact"
                    fluid
                    placeholder="custom"
                />
            </Div>
        </Stack>
    )
};

export const Value: DateRangeInputStory = {
    name: "value",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                defaultStartDate={new Date(1970, 0, 5)}
                defaultEndDate={new Date(1971, 3, 10)}
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                defaultStartDate={new Date(1970, 0, 5)}
                defaultEndDate={new Date(1971, 3, 10)}
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                readOnly
                defaultStartDate={new Date(1970, 0, 5)}
                defaultEndDate={new Date(1971, 3, 10)}
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                defaultStartDate={new Date(1970, 0, 5)}
                defaultEndDate={new Date(1971, 3, 10)}
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                startDate={new Date(1970, 0, 5)}
                endDate={new Date(1971, 3, 10)}
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                fluid
                defaultStartDate={new Date(1970, 0, 5)}
                defaultEndDate={new Date(1971, 3, 10)}
            />
            <Div width="10%">
                <DateRangeInput
                    presets={[
                        { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                        { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                        { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                        { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                    ]}
                    presetsVariant="compact"
                    fluid
                    defaultStartDate={new Date(1970, 0, 5)}
                    defaultEndDate={new Date(1971, 3, 10)}
                />
            </Div>
        </Stack>
    )
};

export const Validation: DateRangeInputStory = {
    name: "validation",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                validationState="invalid"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                validationState="valid"
            />
        </Stack>
    )
};

export const States1: DateRangeInputStory = {
    name: "states 1",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                active
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                focus
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                hover
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                focus
                hover
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                readOnly
            />
        </Stack>
    )
};

export const States2: DateRangeInputStory = {
    name: "states 2",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                active
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                focus
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                hover
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                disabled
                focus
                hover
            />
        </Stack>
    )
};

export const Zoom: DateRangeInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <DateRangeInput
                    presets={[
                        { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                        { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                        { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                        { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                    ]}
                    presetsVariant="compact"
                />
            </Div>
            <Div className="zoom-out'">
                <DateRangeInput
                    presets={[
                        { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                        { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                        { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                        { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                    ]}
                    presetsVariant="compact"
                />
            </Div>
        </Stack>
    )
};

export const Styling: DateRangeInputStory = {
    name: "styling",
    render: () => (
        <Stack>
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                border="amanita-600"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                className="border-red"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="compact"
                style={{ border: "1px solid red" }}
            />
        </Stack>
    )
};
