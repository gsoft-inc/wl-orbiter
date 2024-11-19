import { AbstractGroupProps, Group } from "../../group/index.ts";
import { AvatarText } from "./Avatar.tsx";
import { Box } from "../../box/index.ts";
import { Children, ComponentProps, ReactElement, forwardRef } from "react";
import { OmitInternalProps, augmentElement, cssModule, isNil, mergeClasses, mergeProps, normalizeSize } from "../../shared/index.ts";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts";
import { Tooltip, TooltipTrigger } from "../../tooltip/index.ts";

const DefaultElement = "div";

export interface InnerAvatarGroupProps extends Omit<AbstractGroupProps<typeof DefaultElement>, "gap" | "orientation"> {
    /**
     * The avatars of the group can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl">;
}

interface RemainingAvatarsProps {
    avatars: ReactElement[];
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function RemainingAvatars({ avatars, size, ...rest }: RemainingAvatarsProps) {
    return (
        <TooltipTrigger>
            <Box
                {...mergeProps(
                    rest,
                    {
                        className: mergeClasses(
                            "o-ui-avatar-group-remainings",
                            cssModule(
                                "o-ui-avatar",
                                normalizeSize(size)
                            )
                        )
                    }
                )}
            >
                <AvatarText size={size}>
                    {`+${avatars.length}`}
                </AvatarText>
            </Box>
            <Tooltip>
                <ul className="o-ui-avatar-group-remainings-list">
                    {avatars.filter((x: ReactElement) => !isNil(x?.props?.name) || !isNil(x?.props?.["aria-label"])).map((x: ReactElement) => {
                        const name = x?.props?.name || x?.props?.["aria-label"];

                        return (
                            <li className="o-ui-avatar-group-remainings-list-item" key={name}>
                                {augmentElement(x, {
                                    className: "o-ui-avatar-group-remainings-list-item-avatar",
                                    size: "sm"
                                })}
                                <span>{name}</span>
                            </li>
                        );
                    })}
                </ul>
            </Tooltip>
        </TooltipTrigger>
    );
}

const AvailableSlots = 4;

export function InnerAvatarGroup({
    as = DefaultElement,
    children,
    forwardedRef,
    size,
    wrap = true,
    ...rest
}: InnerAvatarGroupProps) {
    const sizeValue = useResponsiveValue(size);
    const wrapValue = useResponsiveValue(wrap);

    const avatars = Children.toArray(children);

    const isExceeding = avatars.length > AvailableSlots;

    const shownAvatars = isExceeding ? avatars.slice(0, AvailableSlots - 1) : avatars;
    const remainingAvatars = isExceeding ? avatars.slice(AvailableSlots - 1) : null;

    const avatarsMarkup = shownAvatars.map((x: ReactElement) => {
        const name = x?.props?.name || x?.props?.["aria-label"];

        return (
            <TooltipTrigger key={name}>
                {augmentElement(x, {
                    size: sizeValue
                })}
                <Tooltip>{name}</Tooltip>
            </TooltipTrigger>
        );
    });

    const remainingAvatarsMarkup = remainingAvatars && (
        <RemainingAvatars
            avatars={remainingAvatars as ReactElement[]}
            size={sizeValue}
        />
    );

    return (
        <Group
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-avatar-group",
                    gap: 0 as const,
                    orientation: "horizontal" as const,
                    ref: forwardedRef,
                    wrap: wrapValue
                }
            )}
        >
            {avatarsMarkup}
            {remainingAvatarsMarkup}
        </Group>
    );
}

InnerAvatarGroup.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/avatar--default-story)
*/
export const AvatarGroup = forwardRef<any, OmitInternalProps<InnerAvatarGroupProps>>((props, ref) => (
    <InnerAvatarGroup {...props} forwardedRef={ref} />
));

export type AvatarGroupProps = ComponentProps<typeof AvatarGroup>;
