import { A } from "@components/html/index.js";
import { ComponentProps, createRef } from "react";
import { expectAssignable } from "@test-utils";

type AProps = ComponentProps<typeof A>;

expectAssignable<AProps>({ href: "https://www.google.com", rel: "external", target: "_blank" });

expectAssignable<AProps>({ width: "100px", display: "block", color: "red" });

expectAssignable<AProps>({ className: "toto", style: { border: "1px solid red" } });

expectAssignable<AProps>({ ref: createRef() });

// @ts-expect-error
expectAssignable<AProps>({ readOnly });

