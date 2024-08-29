import { MarginTopProp } from "@components/styling/index.js";
import { adaptInputStylingProps } from "@components/input/index.js";
import { expectAssignable } from "@test-utils";

const result = adaptInputStylingProps({
    marginTop: 10,
    randomProps: "randomValue",
    wrapperProps: {
        anotherRandomProps: "anotherRandomValue"
    }
}, {
    className: "earth"
});

expectAssignable<{
    randomProps: string;
    wrapperProps: {
        anotherRandomProps: string;
        className?: string;
        marginTop?: MarginTopProp;
    };
}>(result);
