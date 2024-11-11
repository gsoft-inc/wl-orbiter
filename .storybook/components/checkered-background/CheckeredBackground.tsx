import "./CheckeredBackground.css";

import { Div, DivProps } from "@components/html/index.ts";
import { mergeProps } from "@components/shared/index.ts";

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
