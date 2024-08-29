import { arrayify } from "@components/shared/index.js";
import { expectAssignable } from "@test-utils";

expectAssignable<number[]>(arrayify(1));
expectAssignable<number[]>(arrayify([1]));
expectAssignable<string[]>(arrayify(["1"]));
expectAssignable<string[]>(arrayify(["1"]));

// @ts-expect-error
expectAssignable<number[]>(arrayify(["1"]));

// @ts-expect-error
expectAssignable<number[]>(arrayify("1"));

// @ts-expect-error
expectAssignable<string[]>(arrayify([1]));
