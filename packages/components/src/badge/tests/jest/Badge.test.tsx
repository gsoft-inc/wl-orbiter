import { Badge, BadgeProps } from "@components/badge/index.js";
import { Div } from "@components/html/index.js";
import { Text } from "@components/typography/index.js";
import { forwardRef, createRef } from "react";
import { renderWithTheme, waitFor } from "@test-utils";

const SquareBadge = forwardRef<HTMLElement, BadgeProps>(({ children, ...rest }, ref) => {
    return (
        <Badge
            {...rest}
            ref={ref}
        >
            {children}
            <Div width="45px" height="45px" />
        </Badge>
    );
});

// ***** Refs *****

test("ref is a DOM element", async () => {
    const ref = createRef<HTMLElement>();

    renderWithTheme(
        <SquareBadge ref={ref}>
            <Text>100</Text>
        </SquareBadge>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});

test("when using a callback ref, ref is a DOM element", async () => {
    let refNode: HTMLElement = null;

    renderWithTheme(
        <SquareBadge
            ref={node => {
                refNode = node;
            }}
        >
            <Text>100</Text>
        </SquareBadge>
    );

    await waitFor(() => expect(refNode).not.toBeNull());

    expect(refNode instanceof HTMLElement).toBeTruthy();
    expect(refNode.tagName).toBe("DIV");
});

test("set ref once", async () => {
    const handler = vi.fn();

    renderWithTheme(
        <SquareBadge ref={handler}>
            <Text>100</Text>
        </SquareBadge>
    );

    await waitFor(() => expect(handler).toHaveBeenCalledTimes(1));
});
