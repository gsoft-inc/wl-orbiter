import "./Banner.css";

import { Div, DivProps } from "@components/html/index.ts";
import { mergeProps } from "@components/shared/index.ts";

export function Banner({ children, ...rest }: DivProps) {
    return (
        <Div
            {...mergeProps(
                rest,
                {
                    className: "highlight o-ui-sb-banner"
                }
            )}
        >
            {children}
        </Div>
    );
}
