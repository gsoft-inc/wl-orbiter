import { ErrorMessage, ErrorMessageProps, HelpMessage, HelpMessageProps, ValidMessage, ValidMessageProps } from "@components/field/index.js";
import { createRef, forwardRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const Help = forwardRef<HTMLElement, Omit<HelpMessageProps, "children">>((props, ref) => {
    return (
        <HelpMessage
            {...props}
            ref={ref}
        >
            Help!
        </HelpMessage>
    );
});

const Error = forwardRef<HTMLElement, Omit<ErrorMessageProps, "children">>((props, ref) => {
    return (
        <ErrorMessage
            {...props}
            ref={ref}
        >
            Error!
        </ErrorMessage>
    );
});

const Valid = forwardRef<HTMLElement, Omit<ValidMessageProps, "children">>((props, ref) => {
    return (
        <ValidMessage
            {...props}
            ref={ref}
        >
            Valid!
        </ValidMessage>
    );
});

// ***** Refs *****

[
    [Help, "help"],
    [Error, "error"],
    [Valid, "valid"]
].forEach(([Element, id]) => {
    // eslint-disable-next-line jest/valid-title
    describe(id, () => {
        test("ref is a DOM element", async () => {
            const ref = createRef<HTMLElement>();

            renderWithTheme(
                <Element ref={ref} />
            );

            await waitFor(() => expect(ref.current).not.toBeNull());

            expect(ref.current instanceof HTMLElement).toBeTruthy();
            expect(ref.current.tagName).toBe("DIV");
        });

        test("when using a callback ref, ref is a DOM element", async () => {
            let refNode: HTMLElement = null;

            renderWithTheme(
                <Element
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
            const handler = vi.fn();

            renderWithTheme(
                <Element ref={handler} />
            );

            await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
        });
    });
});
