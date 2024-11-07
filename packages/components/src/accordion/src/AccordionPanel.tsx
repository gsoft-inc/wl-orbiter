import { Box } from "../../box/index.ts";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps, omitProps } from "../../shared/index.ts";

const DefaultElement = "div";

export interface InnerAccordionPanelProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The panel item props
     */
    panel?: {
        key: string;
    };
}

export function InnerAccordionPanel(props: InnerAccordionPanelProps) {
    const {
        as = DefaultElement,
        children,
        forwardedRef,
        ...rest
    } = omitProps(props, ["panel"]);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-accordion-panel",
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerAccordionPanel.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/accordion--default-story)
*/
export const AccordionPanel = forwardRef<any, OmitInternalProps<InnerAccordionPanelProps>>((props, ref) => (
    <InnerAccordionPanel {...props} forwardedRef={ref} />
));

export type AccordionPanelProps = ComponentProps<typeof AccordionPanel>;
