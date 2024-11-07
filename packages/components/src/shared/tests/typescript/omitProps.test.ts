import { expectAssignable } from "@test-utils";
import { omitProps } from "@components/shared/index.ts";

interface MyObject {
    a: string;
    b: string;
    c?: string;
}

const obj: MyObject = {
    a: "param1",
    b: "param2"
};

const result = omitProps(obj, ["a"]);

expectAssignable<Omit<MyObject, "a">>(result);
expectAssignable<string>(result.b);
expectAssignable<string>(result.c);

// @ts-expect-error
expectAssignable<any>(result.a);

// @ts-expect-error
expectAssignable<MyObject>(result);
