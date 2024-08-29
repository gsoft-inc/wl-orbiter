import { Div } from "@components/html/index.js";
import "./highlight.css";

export function Highlight({ children, ...rest }) {
  return (
    <Div className="highlight" {...rest}>
      {children}
    </Div>
  );
}
