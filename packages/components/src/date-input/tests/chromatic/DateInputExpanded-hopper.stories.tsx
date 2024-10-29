import { DateInput } from "@components/date-input";
import { Div } from "@components/html";
import { Stack } from "@components/layout";
import { subMonths, subWeeks } from "date-fns";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/DateInput-hopper/expanded presets",
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                fluid
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "7 D", date: subWeeks(new Date(), 1) },
                        { text: "1 M", date: subMonths(new Date(), 1) },
                        { text: "3 M", date: subMonths(new Date(), 3) },
                        { text: "6 M", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                disabled
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                readOnly
                placeholder="custom"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                fluid
                placeholder="custom"
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "7 D", date: subWeeks(new Date(), 1) },
                        { text: "1 M", date: subMonths(new Date(), 1) },
                        { text: "3 M", date: subMonths(new Date(), 3) },
                        { text: "6 M", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                disabled
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                readOnly
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                defaultValue={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                value={new Date(1970, 0, 5)}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                fluid
                defaultValue={new Date(1970, 0, 5)}
            />
            <Div width="10%">
                <DateInput
                    presets={[
                        { text: "7 D", date: subWeeks(new Date(), 1) },
                        { text: "1 M", date: subMonths(new Date(), 1) },
                        { text: "3 M", date: subMonths(new Date(), 3) },
                        { text: "6 M", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                active
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                focus
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                focus
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                disabled
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
                active
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
                focus
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
                focus
                hover
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                validationState="invalid"
                disabled
                placeholder="Where to?"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
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
                        { text: "7 D", date: subWeeks(new Date(), 1) },
                        { text: "1 M", date: subMonths(new Date(), 1) },
                        { text: "3 M", date: subMonths(new Date(), 3) },
                        { text: "6 M", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="expanded"
                />
            </Div>
            <Div className="zoom-out'">
                <DateInput
                    presets={[
                        { text: "7 D", date: subWeeks(new Date(), 1) },
                        { text: "1 M", date: subMonths(new Date(), 1) },
                        { text: "3 M", date: subMonths(new Date(), 3) },
                        { text: "6 M", date: subMonths(new Date(), 6) }
                    ]}
                    presetsVariant="expanded"
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
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                border="amanita-600"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                className="border-red"
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                style={{ border: "1px solid red" }}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                wrapperProps={{ className: "border-red" }}
            />
            <DateInput
                presets={[
                    { text: "7 D", date: subWeeks(new Date(), 1) },
                    { text: "1 M", date: subMonths(new Date(), 1) },
                    { text: "3 M", date: subMonths(new Date(), 3) },
                    { text: "6 M", date: subMonths(new Date(), 6) }
                ]}
                presetsVariant="expanded"
                wrapperProps={{ style: { border: "1px solid red" } }}
            />
        </Stack>
    )
};
