import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledHtmlAttributes, InteractionProps } from "../../shared/index.ts"

export interface InnerItemProps extends InternalProps, InteractionProps, StyledHtmlAttributes {
    /**
     * React children.
     */
    children?: ReactNode;
    /**
     * A unique key to identify the item.
     */
    key?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function InnerItem(props: InnerItemProps): ReactNode {
    return null;
}

export const Item = forwardRef<any, OmitInternalProps<InnerItemProps>>((props, ref) => (
    <InnerItem {...props} forwardedRef={ref} />
));

export type ItemProps = ComponentProps<typeof Item>;
