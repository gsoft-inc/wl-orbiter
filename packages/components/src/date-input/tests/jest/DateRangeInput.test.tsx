import { act, fireEvent, screen, waitFor, within, renderWithTheme } from "@test-utils";
import { Button } from "@components/button";
import { DateRangeInput } from "@components/date-input";
import { GroupField } from "@components/field";
import { Keys } from "@components/shared";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";

// Using userEvent.type with a string having multiple characters doesn't work because of the mask. Only the last character ends up being typed.
// Providing an option.delay fix the problem but we get the following warning: "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one."
function type(element: HTMLElement, text: string) {
    return Promise.all([...text].map(x => {
        return userEvent.type(element, x);
    }));
}

function backspace(element: HTMLElement, times = 1) {
    const promises: Promise<void>[] = [];
    for (let x = 0; x < times; x += 1) {
        promises.push(userEvent.type(element, "{backspace}"));
    }

    return Promise.all(promises);
}

function getStartDateInput(container: HTMLElement, name = "date-range") {
    // containers are used here since we can't find the input by name otherwise,
    // and we can't use placeholder since it's the same for the start and end date inputs
    return container.querySelector(`:scope [name=${name}-start-date]`) as HTMLElement;
}

function getEndDateInput(container: HTMLElement, name = "date-range") {
    // containers are used here since we can't find the input by name otherwise,
    // and we can't use placeholder since it's the same for the start and end date inputs
    return container.querySelector(`:scope [name=${name}-end-date]`) as HTMLElement;
}

// ***** Behaviors *****

test("when a valid date has been entered in the start date input, move focus to the end date input", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "01012020");

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());
});

test("when the focus is in the end date input and the end date input value is empty, move focus to the start date input on backspace keypress", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "01012020");

    act(() => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());

    await backspace(getEndDateInput(container));

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when the focus is in the end date input and the end date input value is empty, keep focus in the end date input on non digit character keypress", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "01012020");

    act(() => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());

    await type(getEndDateInput(container), "ab");

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());
});

test("when the focus is in the end date input and the end date input value is not empty, move focus to the start date input on the next backspace keypress following the clearing of the end date input value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await type(getEndDateInput(container), "01012020");

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());

    await backspace(getEndDateInput(container), 9);

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when the focus is in the start date input, tab keypress move the focus to the end date input", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await userEvent.tab();

    await waitFor(() => expect(getEndDateInput(container)).toHaveFocus());
});

test("when the focus is in the end date input, shift + tab keypress move the focus to the start date input", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput name="date-range" />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await userEvent.tab({ shift: true });

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when the start date is greater than the end date, reset the start date to the end date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            defaultEndDate={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "02022021");

    await userEvent.click(document.body);

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getStartDateInput(container).focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("01/01/2020"));
});

test("when the end date is lower than the start date, reset the end date to the start date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            defaultStartDate={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await type(getEndDateInput(container), "02022019");

    await userEvent.click(document.body);

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("01/01/2020"));
});

test("when the start date is lower than the min date, reset the start date to the min date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            min={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "02022019");

    await userEvent.click(document.body);

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getStartDateInput(container).focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("01/01/2020"));
});

test("when the start date is greater than the max date, reset the start date to the max date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            max={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "02022021");

    await userEvent.click(document.body);

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getStartDateInput(container).focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue("01/01/2020"));
});

test("when the end date is lower than the min date, reset the end date to the min date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            min={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await type(getEndDateInput(container), "02022019");

    await userEvent.click(document.body);

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("01/01/2020"));
});

test("when the end date is greater than the max date, reset the end date to the max date value", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            max={new Date(2020, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await type(getEndDateInput(container), "02022021");

    await userEvent.click(document.body);

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));

    act(() => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(getEndDateInput(container)).toHaveValue("01/01/2020"));
});

test("clear both dates on clear button click", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            defaultStartDate={new Date(2020, 0, 1)}
            defaultEndDate={new Date(2021, 0, 1)}
            name="date-range"
        />
    );

    await userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue(""));
    await waitFor(() => expect(getEndDateInput(container)).toHaveValue(""));
});

test("clear both dates on esc keypress", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            defaultStartDate={new Date(2020, 0, 1)}
            defaultEndDate={new Date(2021, 0, 1)}
            name="date-range"
        />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    fireEvent.keyDown(getStartDateInput(container), { key: Keys.esc });

    await waitFor(() => expect(getStartDateInput(container)).toHaveValue(""));
    await waitFor(() => expect(getEndDateInput(container)).toHaveValue(""));
});

test("tab keypress from outside will focus the start date input", async () => {
    const { container } = renderWithTheme(
        <>
            <Button data-testid="previous">Previous</Button>
            <DateRangeInput
                defaultStartDate={new Date(2020, 0, 1)}
                defaultEndDate={new Date(2021, 0, 1)}
                name="date-range"
            />
        </>
    );

    act(() => {
        screen.getByTestId("previous").focus();
    });

    await waitFor(() => expect(screen.getByTestId("previous")).toHaveFocus());

    await userEvent.tab();

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("shift + tab keypress from outside will focus the start date input", async () => {
    renderWithTheme(
        <>
            <DateRangeInput
                defaultStartDate={new Date(2020, 0, 1)}
                defaultEndDate={new Date(2021, 0, 1)}
                name="date-range"
                data-testid="date-range-input"
            />
            <Button data-testid="after">After</Button>
        </>
    );

    act(() => {
        screen.getByTestId("after").focus();
    });

    await waitFor(() => expect(screen.getByTestId("after")).toHaveFocus());

    await userEvent.tab({ shift: true });

    // the clear button get focused
    await waitFor(() => expect(within(screen.getByTestId("date-range-input")).getByRole("button")).toHaveFocus());
});

test("when autofocus is true, the date range input is focused on render", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            autoFocus
            name="date-range"
            data-testid="date-range-input"
        />
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).toHaveClass("o-ui-date-range-input-focus"));
    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when autofocus is true and the date range input is disabled, the date range input is not focused on render", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            disabled
            autoFocus
            name="date-range"
            data-testid="date-range-input"
        />
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).not.toHaveClass("o-ui-date-range-input-focus"));
    await waitFor(() => expect(getStartDateInput(container)).not.toHaveFocus());
});

test("when autofocus is true and the date range input is readonly, the date range input is not focused on render", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            readOnly
            autoFocus
            name="date-range"
            data-testid="date-range-input"
        />
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).not.toHaveClass("o-ui-date-range-input-focus"));
    await waitFor(() => expect(getStartDateInput(container)).not.toHaveFocus());
});

test("when autofocus is specified with a delay, the date range input is focused after the delay", async () => {
    const { container } = renderWithTheme(
        <DateRangeInput
            autoFocus={10}
            name="date-range"
            data-testid="date-range-input"
        />
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).not.toHaveClass("o-ui-date-range-input-focus"));

    expect(getStartDateInput(container)).not.toHaveFocus();

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

describe("compact presets", () => {
    test("when a preset is selected, both inputs are filled with the preset dates", async () => {
        const { container } = renderWithTheme(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="compact"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByLabelText("Date presets"));

        expect(await screen.findByRole("menu")).toBeInTheDocument();

        await userEvent.click(screen.getByRole("menuitemradio"));

        await waitFor(() => expect(getStartDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));
        await waitFor(() => expect(getEndDateInput(container)).toHaveValue("Tue, Jan 7, 2020"));

        act(() => {
            getStartDateInput(container).focus();
        });

        await waitFor(() => expect(getStartDateInput(container)).toHaveValue("01/01/2020"));

        act(() => {
            getEndDateInput(container).focus();
        });

        await waitFor(() => expect(getEndDateInput(container)).toHaveValue("07/01/2020"));
    });

    test("when a preset is selected, the preset menu trigger is focused", async () => {
        renderWithTheme(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="compact"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByLabelText("Date presets"));

        expect(await screen.findByRole("menu")).toBeInTheDocument();

        await userEvent.click(screen.getByRole("menuitemradio"));

        await waitFor(() => expect(screen.getByLabelText("Date presets")).toHaveFocus());
    });

    test("when a preset is selected from the menu, the selected item of the menu match the selected preset", async () => {
        renderWithTheme(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="compact"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByLabelText("Date presets"));

        expect(await screen.findByRole("menu")).toBeInTheDocument();

        await userEvent.click(screen.getByRole("menuitemradio"));

        await waitFor(() => expect(screen.getByRole("menuitemradio")).toHaveAttribute("aria-checked", "true"));
    });

    test("when dates match a preset, the selected item of the menu match the preset", async () => {
        renderWithTheme(
            <DateRangeInput
                startDate={new Date(2020, 0, 1)}
                endDate={new Date(2020, 0, 7)}
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="compact"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByLabelText("Date presets"));

        expect(await screen.findByRole("menu")).toBeInTheDocument();

        await waitFor(() => expect(screen.getByRole("menuitemradio")).toHaveAttribute("aria-checked", "true"));
    });
});

describe("extended presets", () => {
    test("when a preset is selected, both inputs are filled with the preset dates", async () => {
        const { container } = renderWithTheme(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="expanded"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByRole("radio"));

        await waitFor(() => expect(getStartDateInput(container)).toHaveValue("Wed, Jan 1, 2020"));
        await waitFor(() => expect(getEndDateInput(container)).toHaveValue("Tue, Jan 7, 2020"));

        act(() => {
            getStartDateInput(container).focus();
        });

        await waitFor(() => expect(getStartDateInput(container)).toHaveValue("01/01/2020"));

        act(() => {
            getEndDateInput(container).focus();
        });

        await waitFor(() => expect(getEndDateInput(container)).toHaveValue("07/01/2020"));
    });

    test("when a preset is selected, the toggled button match the selected preset", async () => {
        renderWithTheme(
            <DateRangeInput
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="expanded"
                name="date-range"
            />
        );

        await userEvent.click(screen.getByRole("radio"));

        await waitFor(() => expect(screen.getByRole("radio")).toHaveAttribute("aria-checked", "true"));
    });

    test("when dates match a preset, the toggled button match the preset", async () => {
        renderWithTheme(
            <DateRangeInput
                startDate={new Date(2020, 0, 1)}
                endDate={new Date(2020, 0, 7)}
                presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
                presetsVariant="expanded"
                name="date-range"
            />
        );

        await waitFor(() => expect(screen.getByRole("radio")).toHaveAttribute("aria-checked", "true"));
    });
});

// ***** Aria *****

test("when is not in a group field, role is \"group\"", async () => {
    renderWithTheme(
        <DateRangeInput data-testid="date-range-input" />
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).toHaveAttribute("role", "group"));
});

test("when is in a group field, a role attribute is not rendered", async () => {
    renderWithTheme(
        <GroupField>
            <DateRangeInput data-testid="date-range-input" />
        </GroupField>
    );

    await waitFor(() => expect(screen.getByTestId("date-range-input")).not.toHaveAttribute("role"));
});

// ***** Api *****

test("when a start date is applied, call onDatesChange with the new start date", async () => {
    const handler = jest.fn();

    const { container } = renderWithTheme(
        <DateRangeInput
            onDatesChange={handler}
            name="date-range"
        />
    );

    act(() => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "01012020");

    await userEvent.click(document.body);

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), new Date(2020, 0, 1), null));
});

test("when an end date is applied, call onDatesChange with the new end date", async () => {
    const handler = jest.fn();

    const { container } = renderWithTheme(
        <DateRangeInput
            onDatesChange={handler}
            name="date-range"
        />
    );

    act(() => {
        getEndDateInput(container).focus();
    });

    await type(getEndDateInput(container), "01012020");

    await userEvent.click(document.body);

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), null, new Date(2020, 0, 1)));
});

test("when the start date and the end date are applied, call onDatesChange with both dates", async () => {
    const handler = jest.fn();

    const { container } = renderWithTheme(
        <DateRangeInput
            onDatesChange={handler}
            name="date-range"
        />
    );

    await act(async () => {
        getStartDateInput(container).focus();
    });

    await type(getStartDateInput(container), "01012020");

    await act(async () => {
        getEndDateInput(container).focus();
    });

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), new Date(2020, 0, 1), null));

    await type(getEndDateInput(container), "01012021");

    await userEvent.click(document.body);

    await waitFor(() => expect(handler).toHaveBeenLastCalledWith(expect.anything(), new Date(2020, 0, 1), new Date(2021, 0, 1)));
    await waitFor(() => expect(handler).toHaveBeenCalledTimes(2));
});

test("when the dates are cleared, call onDatesChange with null for both dates", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <DateRangeInput
            defaultStartDate={new Date(2020, 0, 1)}
            defaultEndDate={new Date(2021, 0, 1)}
            onDatesChange={handler}
        />
    );

    await userEvent.click(screen.getByRole("button"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), null, null));
});

test("when a preset is selected, call onDatesChange with both dates", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <DateRangeInput
            presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
            onDatesChange={handler}
            name="date-range"
        />
    );

    await userEvent.click(screen.getByLabelText("Date presets"));

    expect(await screen.findByRole("menu")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("menuitemradio"));

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(handler).toHaveBeenCalledWith(expect.anything(), new Date(2020, 0, 1), new Date(2020, 0, 7)));
});

test("can focus the start date input with the focus api", async () => {
    const ref = createRef<HTMLElement>();

    const { container } = renderWithTheme(
        <DateRangeInput
            name="date-range"
            ref={ref}
        />
    );

    act(() => {
        ref.current.focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when compact presets are provided, can focus the start date input with the focus api", async () => {
    const ref = createRef<HTMLElement>();

    const { container } = renderWithTheme(
        <DateRangeInput
            presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
            presetsVariant="compact"
            name="date-range"
            ref={ref}
        />
    );

    act(() => {
        ref.current.focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

test("when expanded presets are provided, can focus the start date input with the focus api", async () => {
    const ref = createRef<HTMLElement>();

    const { container } = renderWithTheme(
        <DateRangeInput
            presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
            presetsVariant="expanded"
            name="date-range"
            ref={ref}
        />
    );

    act(() => {
        ref.current.focus();
    });

    await waitFor(() => expect(getStartDateInput(container)).toHaveFocus());
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <DateRangeInput ref={ref} />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when compact presets are provided, ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <DateRangeInput
            presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
            presetsVariant="compact"
            ref={ref}
        />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when expanded presets are provided, ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <DateRangeInput
            presets={[{ text: "Preset 1", startDate: new Date(2020, 0, 1), endDate: new Date(2020, 0, 7) }]}
            presetsVariant="expanded"
            ref={ref}
        />
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <DateRangeInput
            ref={node => {
                refNode = node;
            }}
        />
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = jest.fn();

    renderWithTheme(
        <DateRangeInput ref={handler} />
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});


