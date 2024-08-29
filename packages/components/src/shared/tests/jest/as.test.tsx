import { createRef, forwardRef } from "react";
import { render, waitFor } from "@test-utils";

import { Div } from "@components/html/index.js";
import { TextLink } from "@components/link/index.js";
import { as } from "@components/shared/index.js";

const RouterLink = forwardRef<HTMLDivElement, { to: string }>((props, ref) => {
    return <Div ref={ref}>{props.to}</Div>;
});

test("support ref", async () => {
    const ref = createRef<any>();
    const ButtonLink = as(TextLink, RouterLink);

    render(
        <ButtonLink to="aa" ref={ref}>
            Content
        </ButtonLink>
    );

    await waitFor(() => expect(ref.current).not.toBeNull());

    expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    expect(ref.current.tagName).toBe("DIV");
});
