import { mergeProps } from "@components/shared/index.ts";

export const LI = props => <li {...mergeProps(props, { className: "orbiter-doc-li" })} />;
