import { Box } from "@components/box/index.js";
import { as } from "@components/shared/index.js";
import { forwardRef } from "react";

const A = as(Box, "a");

// Dummy component to demonstrate how to use with React Router.
export const RouterLink = forwardRef(({
    to,
    children,
    ...rest
}, ref) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <A
            {...rest}
            href={to}
            ref={ref}
        >
            {children}
        </A>
    );
});
