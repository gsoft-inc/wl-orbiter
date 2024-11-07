import { mergeProps } from "../../../packages/components/src/shared";

export const H1 = props => <h1 {...mergeProps(props, { className: "orbiter-doc-h1" })} />;
export const H2 = props => <h2 {...mergeProps(props, { className: "orbiter-doc-h2" })} />;
export const H3 = props => <h3 {...mergeProps(props, { className: "orbiter-doc-h3" })} />;
export const H4 = props => <h4 {...mergeProps(props, { className: "orbiter-doc-h4" })} />;
export const H5 = props => <h5 {...mergeProps(props, { className: "orbiter-doc-h5" })} />;
export const H6 = props => <h6 {...mergeProps(props, { className: "orbiter-doc-h6" })} />;
