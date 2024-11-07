import { mergeProps } from "../../../packages/components/src/shared";

export const LI = props => <li {...mergeProps(props, { className: "orbiter-doc-li" })} />;
