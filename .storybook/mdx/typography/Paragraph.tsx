import { mergeProps } from "@components/shared/index.ts";

export const P = props => <p {...mergeProps(props, { className: "orbiter-doc-p" })} />;
