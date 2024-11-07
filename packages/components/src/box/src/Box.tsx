import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledHtmlAttributes, omitProps } from "../../shared/index.ts"
import { getHtmlElementType } from "../../html/index.ts"
import { useStyledSystem } from "../../styling/index.ts"

const DefaultElement = "div";

export interface InnerBoxProps extends SlotProps, InternalProps, StyledHtmlAttributes {
    /**
    * @ignore
    */
    children?: ReactNode;
}

export function InnerBox(props: InnerBoxProps) {
    const {
        as = DefaultElement,
        children,
        forwardedRef,
        ...rest
    } = omitProps(useStyledSystem(props), ["slot"]);

    const As = getHtmlElementType(as);

    return (
        <As
            {...rest}
            ref={forwardedRef}
        >
            {children}
        </As>
    );
}

InnerBox.defaultElement = DefaultElement;

/**
 * A box is a general purpose component that can be used to compose new components, use the slot system or render style props.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/box--page)
*/
export const Box = forwardRef<any, OmitInternalProps<InnerBoxProps>>((props, ref) => (
    <InnerBox {...props} forwardedRef={ref} />
));

export type BoxProps = ComponentProps<typeof Box>;
