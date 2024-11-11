import { H1, H2, H3, H4, H5, H6, LI, P } from "./typography/index.ts";
import { Highlight } from "./highlight/index.ts";
import { MDXProvider } from "@mdx-js/react";
import type { ComponentProps } from "react";

export const mdxComponents: ComponentProps<typeof MDXProvider>["components"] = {
    // @ts-ignore
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
