import { DateInput } from "@components/date-input/index.ts";
import { Div } from "@components/html/index.ts";
import { Stack } from "@components/layout/index.ts";
import { subMonths, subWeeks } from "date-fns";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateInput/compact presets",
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
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                fluid
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "Last week", date: subWeeks(new Date(), 1) },
                        { text: "Last month", date: subMonths(new Date(), 1) },
                        { text: "Last 3 months", date: subMonths(new Date(), 3) },
                        { text: "Last 6 months", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="compact"
                    fluid
                />
            </Div>
        </Stack>
    )
};

export const Placeholder: DateInputStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                disabled
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                readOnly
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                fluid
                placeholder="custom"
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "Last week", date: subWeeks(new Date(), 1) },
                        { text: "Last month", date: subMonths(new Date(), 1) },
                        { text: "Last 3 months", date: subMonths(new Date(), 3) },
                        { text: "Last 6 months", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="compact"
                    fluid
                    placeholder="custom"
                />
            </Div>
        </Stack>
    )
};

export const Value: DateInputStory = {
    name: "value",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                disabled
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                readOnly
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                value={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                fluid
                defaultValue={new Date(1970, 0, 5)}
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "Last week", date: subWeeks(new Date(), 1) },
                        { text: "Last month", date: subMonths(new Date(), 1) },
                        { text: "Last 3 months", date: subMonths(new Date(), 3) },
                        { text: "Last 6 months", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="compact"
                    fluid
                    defaultValue={new Date(1970, 0, 5)}
                />
            </Div>
        </Stack>
    )
};

export const Validation: DateInputStory = {
    name: "validation",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="valid"
            />
        </Stack>
    )
};

export const States1: DateInputStory = {
    name: "states 1",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                active
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                focus
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                focus
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                disabled
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                readOnly
                placeholder="Where to?"
            />
        </Stack>
    )
};

export const States2: DateInputStory = {
    name: "states 2",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                active
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                focus
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                focus
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                disabled
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                validationState="invalid"
                readOnly
                placeholder="Where to?"
            />
        </Stack>
    )
};

export const Zoom: DateInputStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <DateInput
                    presets={[
                        { text: "Last week", date: subWeeks(new Date(), 1) },
                        { text: "Last month", date: subMonths(new Date(), 1) },
                        { text: "Last 3 months", date: subMonths(new Date(), 3) },
                        { text: "Last 6 months", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="compact"
                />
            </Div>
            <Div className="zoom-out'">
                <DateInput
                    presets={[
                        { text: "Last week", date: subWeeks(new Date(), 1) },
                        { text: "Last month", date: subMonths(new Date(), 1) },
                        { text: "Last 3 months", date: subMonths(new Date(), 3) },
                        { text: "Last 6 months", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="compact"
                />
            </Div>
        </Stack>
    )
};

export const Styling: DateInputStory = {
    name: "styling",
    render: () => (
        <Stack>
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                border="amanita-600"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                className="border-red"
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                style={{ border: "1px solid red" }}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                wrapperProps={{ className: "border-red" }}
            />
            <DateInput
                presets={[
                    { text: "Last week", date: subWeeks(new Date(), 1) },
                    { text: "Last month", date: subMonths(new Date(), 1) },
                    { text: "Last 3 months", date: subMonths(new Date(), 3) },
                    { text: "Last 6 months", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="compact"
                wrapperProps={{ style: { border: "1px solid red" } }}
            />
        </Stack>
    )
};
