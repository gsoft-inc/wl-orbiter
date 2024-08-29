import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";

const DefaultElement = "div";

export interface InnerListboxSectionProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The section name.
     */
    title: string;
}

export function InnerListboxSection({
    as = DefaultElement,
    children,
    forwardedRef,
    id,
    title,
    ...rest
}: InnerListboxSectionProps) {
    return (
        <>
            <Box
                {...mergeProps(
                    rest,
                    {
                        "aria-hidden": true,
                        as,
                        className: "o-ui-listbox-section",
                        id,
                        ref: forwardedRef,
                        role: "presentation"
                    }
                )}
            >
                {title}
            </Box>
            <Box
                aria-labelledby={id}
                role="group"
            >
                {children}
            </Box>
        </>
    );
}

InnerListboxSection.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/listbox--default-story)
*/
export const ListboxSection = forwardRef<any, OmitInternalProps<InnerListboxSectionProps>>((props, ref) => (
    <InnerListboxSection {...props} forwardedRef={ref} />
));

export type ListboxSectionProps = ComponentProps<typeof ListboxSection>;
