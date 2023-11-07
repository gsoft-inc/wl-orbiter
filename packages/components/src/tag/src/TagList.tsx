import { Box } from "../../box";
import { Button } from "../../button";
import { CollectionItem, useCollection } from "../../collection";
import { ComponentProps, ReactNode, SyntheticEvent, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, isNil, mergeProps, useEventCallback } from "../../shared";
import { Tag, TagProps } from "./Tag";
import { ValidationState } from "../../input";

const DefaultElement = "div";

export interface InnerTagListProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Called when all items are cleared from the list.
     * @param {SyntheticEvent} event - React's original event.
     * @returns {void}
     */
    onClear?: (event: SyntheticEvent) => void;
    /**
     * Called when an item is removed from the list.
     * @param {SyntheticEvent} event - React's original event.
     * @param {string} key - The item key.
     * @returns {void}
     */
    onRemove?: (event: SyntheticEvent, key: string) => void;
    /**
     * Whether or not tag items should be render as readonly.
     */
    readOnly?: boolean;
    /**
     * A tag list can vary in size.
     */
    size?: "sm" | "md";
    /**
     * Whether or not the tag list should display as "valid" or "invalid".
     */
    validationState?: ValidationState;
}

export interface TagItemProps extends Omit<TagProps, "children"> {
    item?: CollectionItem;
    onRemove: any;
    readOnly: boolean;
    size: "sm" | "md";
}

function TagItem({
    item,
    onRemove,
    readOnly,
    size,
    ...rest
}: TagItemProps) {
    const handleRemove = useEventCallback((event: SyntheticEvent) => {
        if (!isNil(onRemove)) {
            onRemove(event, item.key);
        }
    });

    return (
        <Tag
            {...mergeProps(
                item.props,
                rest,
                {
                    className: "o-ui-tag-list-item",
                    onRemove: !readOnly ? handleRemove : undefined,
                    size
                }
            )}
        >
            {item.content}
        </Tag>
    );
}

export function InnerTagList({
    as = DefaultElement,
    children,
    forwardedRef,
    onClear,
    onRemove,
    readOnly,
    size,
    validationState,
    ...rest
}: InnerTagListProps) {
    const nodes = useCollection(children);

    const clearButtonMarkup = !isNil(onClear) && !readOnly && nodes.length > 0 && (
        <Button
            className="o-ui-tag-list-clear-button"
            onClick={onClear}
            size={size}
            variant="tertiary"
        >
            Clear all
        </Button>
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-tag-list",
                    ref: forwardedRef
                }
            )}
        >
            {nodes.map((x: CollectionItem) => (
                <TagItem
                    item={x}
                    key={x.key}
                    onRemove={onRemove}
                    readOnly={readOnly}
                    size={size}
                    validationState={validationState}
                />
            ))}
            {clearButtonMarkup}
        </Box>
    );
}

InnerTagList.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/tag--default-story)
*/
export const TagList = forwardRef<any, OmitInternalProps<InnerTagListProps>>((props, ref) => (
    <InnerTagList {...props} forwardedRef={ref} />
));

export type TagListProps = ComponentProps<typeof TagList>;
