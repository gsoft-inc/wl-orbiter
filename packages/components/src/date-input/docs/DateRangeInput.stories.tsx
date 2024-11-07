import { DateRangeInput } from "@components/date-input/index.ts";
import { subMonths, subWeeks } from "date-fns";
import { useCallback, useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/DateRangeInput",
    component: DateRangeInput,
    id: "date-range-input"
} as Meta<typeof DateRangeInput>;

export default meta;

type DateRangeInputStory = StoryObj<typeof meta>;

export const Default: DateRangeInputStory = {
    render: () => (
        <DateRangeInput />
    )
};

export const Value: DateRangeInputStory = {
    render: () => (
        <DateRangeInput defaultEndDate={new Date(2021, 0, 5)} defaultStartDate={new Date(1970, 0, 5)} />
    )
};

export const Presets: DateRangeInputStory = {
    render: () => (
        <DateRangeInput
            presets={[
                { text: "Last week", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                { text: "Last month", startDate: subMonths(new Date(), 1), endDate: new Date() },
                { text: "Last 3 months", startDate: subMonths(new Date(), 3), endDate: new Date() },
                { text: "Last 6 months", startDate: subMonths(new Date(), 6), endDate: new Date() }
            ]}
        />
    )
};

export const ExpandedPresets: DateRangeInputStory = {
    render: () => (
        <DateRangeInput
            presets={[
                { text: "7 D", startDate: subWeeks(new Date(), 1), endDate: new Date() },
                { text: "1 M", startDate: subMonths(new Date(), 1), endDate: new Date() },
                { text: "3 M", startDate: subMonths(new Date(), 3), endDate: new Date() },
                { text: "1 Y", startDate: subMonths(new Date(), 6), endDate: new Date() }
            ]}
            presetsVariant="expanded"
        />
    )
};

export const Disabled: DateRangeInputStory = {
    render: () => (
        <DateRangeInput disabled />
    )
};

export const ReadOnly: DateRangeInputStory = {
    render: () => (
        <DateRangeInput readOnly />
    )
};

export const Fluid: DateRangeInputStory = {
    render: () => (
        <DateRangeInput fluid />
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const DateRangeValidation: DateRangeInputStory = {
    render: () => {
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);

        const isValid = useMemo(() => (!startDate || startDate >= new Date(1970, 0, 5)) && (!endDate || endDate <= new Date(2021, 0, 5)), [startDate, endDate]);

        return (
            <DateRangeInput
                endDate={endDate}
                onDatesChange={(event, newStartDate, newEndDate) => {
                    setStartDate(newStartDate);
                    setEndDate(newEndDate);

                    console.log(newStartDate, newEndDate);
                }}
                startDate={startDate}
                validationState={isValid ? "valid" : "invalid"}
            />
        );
    }
};

export const Form: DateRangeInputStory = {
    render: () => (
        <form>
            <DateRangeInput name="filter" />
        </form>
    )
};

export const Condrolled: DateRangeInputStory = {
    render: () => {
        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(null);

        const handleDatesChange = useCallback((event, newStartDate, newEndDate) => {
            setStartDate(newStartDate);
            setEndDate(newEndDate);
            console.log(newStartDate, newEndDate);
        }, [setStartDate, setEndDate]);

        return (
            <DateRangeInput
                endDate={endDate}
                onDatesChange={handleDatesChange}
                startDate={startDate}
            />
        );
    }
};
