import { mergeProps } from "@components/shared/index.ts";

export const H1 = ({ children, ...props }) => <h1 {...mergeProps(props, { className: "orbiter-doc-h1" })}>{children}</h1>;
export const H2 = ({ children, ...props }) => <h2 {...mergeProps(props, { className: "orbiter-doc-h2" })}>{children}</h2>;
export const H3 = ({ children, ...props }) => <h3 {...mergeProps(props, { className: "orbiter-doc-h3" })}>{children}</h3>;
export const H4 = ({ children, ...props }) => <h4 {...mergeProps(props, { className: "orbiter-doc-h4" })}>{children}</h4>;
export const H5 = ({ children, ...props }) => <h5 {...mergeProps(props, { className: "orbiter-doc-h5" })}>{children}</h5>;
export const H6 = ({ children, ...props }) => <h6 {...mergeProps(props, { className: "orbiter-doc-h6" })}>{children}</h6>;
