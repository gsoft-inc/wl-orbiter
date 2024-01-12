import { Box } from "../../box";
import { CheckmarkIcon } from "@hopper-ui/icons";
import { CollectionItem } from "../../collection";
import { ComponentProps, FocusEvent, KeyboardEvent, MouseEvent, ReactNode, forwardRef, useMemo } from "react";
import {
    InteractionProps,
    InternalProps,
    Keys,
    OmitInternalProps,
    StyledComponentProps,
    cssModule,
    isNil,
    mergeProps,
    useEventCallback,
    useRefState,
    useSlots
} from "../../shared";
import { OptionKeyProp } from "./Listbox";
import { Text } from "../../typography";
import { TooltipTrigger } from "../../tooltip";
import { useListboxContext } from "./ListboxContext";

const DefaultElement = "div";

export interface InnerListboxOptionProps extends InternalProps, InteractionProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the option is disabled.
     */
    disabled?: boolean;
    /**
    * Matching collection item.
    */
    item: CollectionItem;
}

export function InnerListboxOption({
    active,
    as = DefaultElement,
    children,
    disabled,
    focus,
    forwardedRef,
    hover,
    id,
    item: { key, tooltip },
    ...rest
}: InnerListboxOptionProps) {
    const {
        focusManager,
        focusOnHover,
        onFocus,
        onSelect,
        selectedKeys,
        selectionMode
    } = useListboxContext();

    // TODO: should we use debouncing instead?
    const [hasMouseOverRef, setHasMouseOver] = useRefState(false);

    const handleClick = useEventCallback((event: MouseEvent) => {
        onSelect(event, key);
    });

    // Hotfix for https://bugzilla.mozilla.org/show_bug.cgi?id=1487102
    const handleKeyUp = useEventCallback((event: KeyboardEvent) => {
        if (event.key === Keys.space) {
            event.preventDefault();
        }
    });

    const handleFocus = useEventCallback((event: FocusEvent) => {
        // Mouse over check to ensure we don't call the onFocus handler twice when focusOnHover is on.
        if (!hasMouseOverRef.current) {
            // Required for virtual focus.
            const activeElement = focusManager.focusKey(key);

            if (!isNil(onFocus)) {
                onFocus(event, key, activeElement);
            }
        }
    });

    // Move focus to the option on mouse hover.
    const handleMouseEnter = useEventCallback((event: MouseEvent) => {
        setHasMouseOver(true);

        const activeElement = focusManager.focusKey(key);

        if (!isNil(onFocus)) {
            onFocus(event, activeElement.getAttribute(OptionKeyProp), activeElement);
        }
    });

    const handleMouseLeave = useEventCallback(() => {
        setHasMouseOver(false);
    });

    const { avatar, description, "end-icon": endIcon, icon, text } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        avatar: {
            className: "o-ui-listbox-option-avatar",
            size: "sm"
        },
        description: {
            className: "o-ui-listbox-option-description",
            id: `${id}-description`,
            size: "xs"
        },
        "end-icon": {
            className: "o-ui-listbox-option-end-icon",
            size: "md"
        },
        icon: {
            className: "o-ui-listbox-option-start-icon",
            size: "md"
        },
        text: {
            className: "o-ui-listbox-option-label",
            id: `${id}-label`,
            size: "sm"
        }
    }), [id]));

    const labelId = text?.props?.id;
    const descriptionId = description?.props?.id;
    console.log("endicon", endIcon);

    const optionMarkup = (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-describedby": description && descriptionId,
                    "aria-disabled": disabled,
                    "aria-labelledby": labelId,
                    "aria-selected": !disabled && selectedKeys.includes(key),
                    as,
                    className: cssModule(
                        "o-ui-listbox-option",
                        description && "has-description",
                        focusOnHover && "no-hover",
                        active && "active",
                        focus && "focus",
                        hover && "hover"
                    ),
                    id,
                    onClick: !disabled ? handleClick : undefined,
                    [OptionKeyProp as string]: key,
                    onFocus: !disabled ? handleFocus : undefined,
                    onKeyUp: !disabled ? handleKeyUp : undefined,
                    onMouseEnter: !disabled && focusOnHover ? handleMouseEnter : undefined,
                    onMouseLeave: !disabled ? handleMouseLeave : undefined,
                    ref: forwardedRef,
                    role: "option",
                    tabIndex: !disabled ? -1 : undefined
                }
            )}
        >
            {icon}
            {avatar}
            {text}
            {description}
            {endIcon}
            {selectionMode !== "none" && <CheckmarkIcon aria-hidden="true" className="o-ui-listbox-option-checkmark" size="sm" />}
        </Box>
    );

    if (!isNil(tooltip)) {
        const { content: tooltipContent, props: tooltipProps } = tooltip;

        return (
            <TooltipTrigger
                {...mergeProps(
                    tooltipProps,
                    {
                        position: "left" as const
                    }
                )}
            >
                {optionMarkup}
                {tooltipContent}
            </TooltipTrigger>
        );
    }

    return optionMarkup;
}

InnerListboxOption.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/listbox--default-story)
*/
export const ListboxOption = forwardRef<any, OmitInternalProps<InnerListboxOptionProps>>((props, ref) => (
    <InnerListboxOption {...props} forwardedRef={ref} />
));

export type ListboxOptionProps = ComponentProps<typeof ListboxOption>;
