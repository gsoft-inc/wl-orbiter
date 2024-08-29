import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { useInputGroupAddonProps } from "../../input-group/index.js";

const DefaultElement = "div";

export interface InnerTextAddonProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
}

export function InnerTextAddon(props: InnerTextAddonProps) {
    const [inputGroupAddonProps] = useInputGroupAddonProps();

    const {
        as = DefaultElement,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        inputGroupAddonProps
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-input-group-text-addon",
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerTextAddon.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/input-group--default-story)
*/
export const TextAddon = forwardRef<any, OmitInternalProps<InnerTextAddonProps>>((props, ref) => (
    <InnerTextAddon {...props} forwardedRef={ref} />
));

export type TextAddonProps = ComponentProps<typeof TextAddon>;
