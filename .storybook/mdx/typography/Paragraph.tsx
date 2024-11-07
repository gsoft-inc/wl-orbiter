import { mergeProps } from "../../../packages/components/src/shared";

export const P = props => <p {...mergeProps(props, { className: "orbiter-doc-p" })} />;
