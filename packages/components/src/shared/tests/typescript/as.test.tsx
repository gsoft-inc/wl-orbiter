import { Button } from "@components/button/index.ts";
import { ComponentProps } from "react";
import { Div } from "@components/html/index.ts";
import { as } from "@components/shared/index.ts";
import { expectAssignable } from "@test-utils";

interface RouterLinkProps {
    a: string;
    b?: boolean;
}

const RouterLink = ({ a, b }: RouterLinkProps) => {
    return <Div>{b && a}</Div>;
};

const RouterButton = as(Button, RouterLink);

type RouterButtonProps = ComponentProps<typeof RouterButton>;

expectAssignable<RouterButtonProps>({ variant: "secondary", a: "a", b: false, children: null });

// @ts-expect-error
expectAssignable<RouterButtonProps>({ c: "c", children: null });
