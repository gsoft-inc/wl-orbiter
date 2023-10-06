import "./CheckeredBackground.css";

import { Div, DivProps } from "@components/html";
import { mergeProps } from "@components/shared";

export function CheckeredBackground({ children, ...rest }: DivProps) {
    return (
        <Div
            {...mergeProps(
                rest,
                {
                    color: "neutral-text",
                    paddingLeft: 2,
                    className: "o-ui-sb-checkered-background-preview"
                }
            )}
        >
            {children}
        </Div>
    );
}
