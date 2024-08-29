import "./Banner.css";

import { Div, DivProps } from "@components/html/index.js";
import { mergeProps } from "@components/shared/index.js";

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
