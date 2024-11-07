import { AccordionBuilderHeader, AccordionBuilderPanel } from "./useAccordionItems.ts";
import { AccordionHeader } from "./AccordionHeader.tsx";
import { AccordionPanel } from "./AccordionPanel.tsx";
import { ComponentProps, ElementType, SyntheticEvent, forwardRef } from "react";
import { Disclosure } from "../../disclosure/index.ts";
import { H1, H2, H3, H4, H5, H6 } from "../../typography/index.ts";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps, useEventCallback } from "../../shared/index.ts";
import { useAccordionContext } from "./AccordionContext.tsx";

const DefaultElement = "div";

export interface InnerAccordionItemProps extends InternalProps, Omit<StyledComponentProps<typeof DefaultElement>, "ref"> {
    item: {
        header: AccordionBuilderHeader;
        id: string;
        key: string;
        panel: AccordionBuilderPanel;
    };
}

function isHeading(type: ElementType | string) {
    return type === H1 ||
        type === H2 ||
        type === H3 ||
        type === H4 ||
        type === H5 ||
        type === H6;
}

export function InnerAccordionItem({
    forwardedRef,
    item: { header, id, key, panel },
    ...rest
}: InnerAccordionItemProps) {
    const { expandedKeys, onToggle } = useAccordionContext();

    const handleOpenChange = useEventCallback((event: SyntheticEvent) => {
        onToggle(event, key);
    });

    const {
        elementType: headerElementType,
        props: headerProps,
        ref: headerRef
    } = header;

    const {
        elementType: PanelType = AccordionPanel,
        props: panelProps,
        ref: panelRef
    } = panel;

    // If the provided header element is an heading component, then use the accordion default AccordionHeader component and the type of the provided heading component as the heading type.
    // Otherwise, render the provided custom component and let it handle the heading type.
    const [HeaderType, headingType]: [any, any] = isHeading(headerElementType) ? [AccordionHeader, headerElementType] : [headerElementType, undefined];

    return (
        <Disclosure
            {...mergeProps(
                rest,
                {
                    id,
                    onOpenChange: handleOpenChange,
                    open: expandedKeys.includes(key),
                    ref: forwardedRef
                }
            )}
        >
            <HeaderType
                {...headerProps}
                header={{
                    headingType,
                    key
                }}
                ref={headerRef}
            />
            <PanelType
                {...panelProps}
                panel={{
                    key
                }}
                ref={panelRef}
            />
        </Disclosure>
    );
}

InnerAccordionItem.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/accordion--default-story)
*/
export const AccordionItem = forwardRef<any, OmitInternalProps<InnerAccordionItemProps>>((props, ref) => (
    <InnerAccordionItem {...props} forwardedRef={ref} />
));

export type AccordionItemProps = ComponentProps<typeof AccordionItem>;
