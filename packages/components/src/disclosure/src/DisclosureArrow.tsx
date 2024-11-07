import { AngleDownIcon } from "@hopper-ui/icons";
import { ComponentProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, omitProps, SlotProps, StyledComponentProps, cssModule, isNil, mergeProps, slot } from "../../shared/index.ts";
import { useDisclosureContext } from "./DisclosureContext.ts";
import { useStyledSystem } from "../../styling/index.ts";

const DefaultElement = "svg";

export interface InnerDisclosureArrowProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * A controlled open value that determined whether or not the arrow is up or down.
     */
    open?: boolean;
}

export function InnerDisclosureArrow(props: InnerDisclosureArrowProps) {
    const {
        forwardedRef,
        open,
        ...rest
    } = omitProps(useStyledSystem(props), ["size"]);
    const disclosureContext = useDisclosureContext();

    const isOpen = open ?? disclosureContext?.isOpen;

    if (isNil(isOpen)) {
        throw new Error("The disclosure arrow component must receive a controlled prop \"open\" or have a parent DisclosureContext.");
    }

    return (
        <AngleDownIcon
            {...mergeProps(
                rest,
                {
                    className: cssModule(
                        "o-ui-disclosure-arrow",
                        isOpen ? "up" : "down"
                    ),
                    ref: forwardedRef,
                    size: "sm"
                } as const
            )}
        />
    );
}

InnerDisclosureArrow.defaultElement = DefaultElement;

/**
 * A top / bottom pointing arrow to hint that activating the trigger will display additional content.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/disclosure-arrow--context)
*/
export const DisclosureArrow = slot("icon", forwardRef<any, OmitInternalProps<InnerDisclosureArrowProps>>((props, ref) => (
    <InnerDisclosureArrow {...props} forwardedRef={ref} />
)));

export type DisclosureArrowProps = ComponentProps<typeof DisclosureArrow>;
