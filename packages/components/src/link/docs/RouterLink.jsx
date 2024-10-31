import { Box } from "@components/box";

// Dummy component to demonstrate how to use with React Router.
export const RouterLink = ({
    to,
    children,
    ...rest
}) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Box
            as="a"
            {...rest}
            href={to}
        >
            {children}
        </Box>
    );
};
