import { H1, H2, H3, H4, H5, H6, LI, P } from "./typography";
import { Highlight } from "./highlight";

export const mdxComponents = {
    blockquote: Highlight,
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    li: LI,
    p: P
};
