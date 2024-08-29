import "./CheckeredBackground.css";

import { Div, DivProps } from "@components/html/index.js";
import { mergeProps } from "@components/shared/index.js";

export function CheckeredBackground({ children, ...rest }: DivProps) {
    return (
        <Div
            {...mergeProps(
                rest,
                {
                    color: "neutral",
                    paddingLeft: 80,
                    className: "o-ui-sb-checkered-background-preview"
                }
            )}
        >
            {children}
        </Div>
    );
}
