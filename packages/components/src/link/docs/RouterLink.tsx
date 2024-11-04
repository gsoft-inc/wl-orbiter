import { Box, BoxProps } from "@components/box";

interface RouterLinkProps extends Omit<BoxProps, "href"> {
    to?: BoxProps["href"];
}

// Dummy component to demonstrate how to use with React Router.
export const RouterLink = ({
    to,
    children,
    ...rest
}: RouterLinkProps) => {
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
