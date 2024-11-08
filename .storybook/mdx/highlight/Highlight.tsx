import { Div, DivProps } from "@components/html";
import "./highlight.css";

export function Highlight({ children, ...rest }: Omit<DivProps, "className">) {
    return (
        <Div
            className="highlight"
            {...rest}
        >
            {children}
        </Div>
    );
}
