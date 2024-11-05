import { DateInput } from "@components/date-input";
import { subMonths, subWeeks } from "date-fns";
import { useCallback, useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/DateInput",
    component: DateInput,
    id: "date-input"
} as Meta<typeof DateInput>;

export default meta;

type DateInputStory = StoryObj<typeof meta>;

export const Default: DateInputStory = {
    render: () => (
        <DateInput />
    )
};

export const Value: DateInputStory = {
    render: () => (
        <DateInput defaultValue={new Date(1970, 0, 5)} />
    )
};

export const Presets: DateInputStory = {
    render: () => (
        <DateInput
            presets={[
                { text: "Last week", date: subWeeks(new Date(), 1) },
                { text: "Last month", date: subMonths(new Date(), 1) },
                { text: "Last 3 months", date: subMonths(new Date(), 3) },
                { text: "Last 6 months", date: subMonths(new Date(), 6) }
            ]}
        />
    )
};

export const ExpandedPresets: DateInputStory = {
    render: () => (
        <DateInput
            presets={[
                { text: "7 D", date: subWeeks(new Date(), 1) },
                { text: "1 M", date: subMonths(new Date(), 1) },
                { text: "3 M", date: subMonths(new Date(), 3) },
                { text: "6 M", date: subMonths(new Date(), 6) }
            ]}
            presetsVariant="expanded"
        />
    )
};

export const Disabled: DateInputStory = {
    render: () => (
        <DateInput disabled />
    )
};

export const ReadOnly: DateInputStory = {
    render: () => (
        <DateInput readOnly />
    )
};

export const Fluid: DateInputStory = {
    render: () => (
        <DateInput fluid />
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const DateValidation: DateInputStory = {
    render: () => {
        const [value, setValue] = useState(null);

        const isValid = useMemo(() => !value || value > new Date(1970, 0, 5), [value]);

        return (
            <DateInput
                onDateChange={(event, newDate) => {
                    setValue(newDate);
                    console.log(newDate);
                }}
                validationState={isValid ? "valid" : "invalid"}
                value={value}
            />
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: DateInputStory = {
    render: () => {
        const [date, setDate] = useState(null);

        const handleDateChange = useCallback((event, newDate) => {
            setDate(newDate);
            console.log(newDate);
        }, [setDate]);

        return (
            <DateInput
                onDateChange={handleDateChange}
                value={date}
            />
        );
    }
};
