import { DateRangeInput } from "@components/date-input";
import { Div } from "@components/html";
import { Stack } from "@components/layout";
import { subMonths, subWeeks } from "date-fns";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateRangeInput-hopper/expanded presets",
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
                presetsVariant="expanded"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
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
                    presetsVariant="expanded"
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
                presetsVariant="expanded"
                placeholder="custom"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                    presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                    presetsVariant="expanded"
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
                presetsVariant="expanded"
                validationState="invalid"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
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
                presetsVariant="expanded"
                active
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
                focus
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
                hover
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
                disabled
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                presetsVariant="expanded"
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
                    presetsVariant="expanded"
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
                    presetsVariant="expanded"
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
                presetsVariant="expanded"
                border="amanita-600"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
                className="border-red"
            />
            <DateRangeInput
                presets={[
                    { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                    { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                    { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                    { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
                ]}
                presetsVariant="expanded"
                style={{ border: "1px solid red" }}
            />
        </Stack>
    )
};
