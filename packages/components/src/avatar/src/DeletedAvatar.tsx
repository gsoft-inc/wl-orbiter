import { Box } from "../../box";
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
} from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { DeletedIcon } from "./svgs";

const DefaultElement = "div";

export interface InnerDeletedAvatarProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement | "image"> {
    /**
     * The label to display for the avatar.
     */
    "aria-label": string;
    /**
     * An avatar can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl">;
}

export function InnerDeletedAvatar({
    "aria-label": ariaLabel,
    as = DefaultElement,
    forwardedRef,
    size,
    ...rest
}: InnerDeletedAvatarProps) {
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
                        "deleted"
                    ),
                    ref: forwardedRef
                }
            )}
        >
            <DeletedIcon className="o-ui-avatar-icon o-ui-avatar-deleted-icon" />
        </Box>
    );
}

InnerDeletedAvatar.defaultElement = DefaultElement;

/**
 * A deleted avatar is a graphical representation of a user that has been deleted and typically appears in list and card views, along side a user's information and/or content that they have created.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/avatar--default-story)
*/
export const DeletedAvatar = slot("avatar", forwardRef<any, OmitInternalProps<InnerDeletedAvatarProps>>((props, ref) => (
    <InnerDeletedAvatar {...props} forwardedRef={ref} />
)));

export type DeletedAvatarProps = ComponentProps<typeof DeletedAvatar>;
