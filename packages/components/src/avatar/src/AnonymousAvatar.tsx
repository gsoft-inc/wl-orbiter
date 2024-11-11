import { Box } from "../../box/index.ts";
import { ComponentProps, forwardRef } from "react";
import {
    InternalProps,
    OmitInternalProps,
    SlotProps,
    StyledComponentProps,
    cssModule,
    mergeProps,
    normalizeSize,
    slot
} from "../../shared/index.ts";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts";
import { AnonymousIcon } from "./svgs.tsx";

const DefaultElement = "div";

export interface InnerAnonymousAvatarProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement | "image"> {
    /**
     * See [WCAG](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html).
     */
    "aria-label": string;
    /**
     * An avatar can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">;
}

export function InnerAnonymousAvatar({
    "aria-label": ariaLabel,
    as = DefaultElement,
    forwardedRef,
    size,
    ...rest
}: InnerAnonymousAvatarProps) {
    const sizeValue = useResponsiveValue(size);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-label": ariaLabel,
                    as,
                    className: cssModule(
                        "o-ui-avatar",
                        normalizeSize(sizeValue),
                        "anonymous"
                    ),
                    ref: forwardedRef
                }
            )}
        >
            <AnonymousIcon className="o-ui-avatar-icon o-ui-avatar-anonymous-icon" />
        </Box>
    );
}

InnerAnonymousAvatar.defaultElement = DefaultElement;

/**
 * An anonymous avatar is a graphical representation of a user who wants to remain anonymous and typically appears in list and card views, along side a user's information and/or content that they have created
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/avatar--default-story)
*/
export const AnonymousAvatar = slot("avatar", forwardRef<any, OmitInternalProps<InnerAnonymousAvatarProps>>((props, ref) => (
    <InnerAnonymousAvatar {...props} forwardedRef={ref} />
)));

export type AnonymousAvatarProps = ComponentProps<typeof AnonymousAvatar>;
