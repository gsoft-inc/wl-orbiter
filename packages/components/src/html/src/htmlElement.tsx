import { ElementRef, ElementType, PropsWithChildren, forwardRef } from "react";
import { SlotProps, StyledComponentProps, mergeProps } from "../../shared/index.ts"
import { useStyleProps, useStyledSystem } from "../../styling/index.ts"

// Adding the "as" prop to the HTML element components is not an ideal solution but a necessary one for now until we completly remove "as" support from Orbiter.
// We must do this, because a component like Button which support the "as" prop also need to use the HtmlButton component as a base element to benefit from our CSS normalizing.
export type HtmlElementProps<T extends ElementType> = SlotProps & StyledComponentProps<T> & {
    as?: ElementType;
};

// Not using Box otherwise it adds too many layers of components since these HTML elements components are also used in Orbiter own components.
export function htmlElement<T extends ElementType>(name: string, elementType: T) {
    return forwardRef<ElementRef<T>, HtmlElementProps<T>>((props, ref) => {
        const [styleProps] = useStyleProps<HtmlElementProps<T>>(name);

        const mergedProps = mergeProps(
            styleProps,
            props
        ) as PropsWithChildren<HtmlElementProps<T>>;

        const {
            as = elementType,
            children,
            ...rest
        } = useStyledSystem(mergedProps);

        const As = as as ElementType;

        return (
            <As
                {...mergeProps<any>(
                    rest,
                    {
                        className: "o-ui-element",
                        ref
                    }
                )}
            >
                {children}
            </As>
        );
    });
}


