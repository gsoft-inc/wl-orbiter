import { FlexAlignment, FlexOrientation } from "../../layout/index.ts"
import { GapProp } from "../../styling/index.ts"
import { Ref } from "react";
import { ValidationState } from "../../input/index.ts"
import { cssModule, normalizeSize } from "../../shared/index.ts"
import { useFieldContext } from "../../field/index.ts"

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const Gap = {
    horizontal: {
        "sm": 160,
        "md": "1.25rem"
    },
    vertical: {
        "sm": 80,
        "md": "0.75rem"
    }
} as const;
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export interface UseGroupInputProps {
    cssModule?: string;
    disabled?: boolean;
    gap?: GapProp;
    groupRef: Ref<any>;
    isInField?: boolean;
    orientation?: FlexOrientation;
    required?: boolean;
    reverse?: boolean;
    role?: "group" | "radiogroup";
    size?: "sm" | "md";
    validationState?: ValidationState;
    wrap?: boolean;
}

export interface UseGroupInputReturn {
    groupProps: {
        align?: FlexAlignment;
        "aria-disabled"?: boolean;
        "aria-invalid"?: boolean;
        "aria-orientation"?: FlexOrientation;
        "aria-required"?: boolean;
        className?: string;
        gap?: GapProp;
        inline?: boolean;
        orientation?: FlexOrientation;
        ref?: Ref<any>;
        role?: "group" | "radiogroup";
        wrap?: boolean;
    };
    itemProps: {
        disabled?: boolean;
        reverse?: boolean;
        size?: "sm" | "md";
        validationState?: ValidationState;
    };
}

export function useGroupInput({
    cssModule: module,
    disabled,
    gap,
    groupRef,
    isInField,
    orientation,
    required,
    reverse,
    role = "group",
    size,
    validationState,
    wrap
}: UseGroupInputProps): UseGroupInputReturn {
    const [{ hasLabel, hasMessage }] = useFieldContext();

    return {
        groupProps: {
            align: orientation === "vertical"
                ? reverse ? "end" : "start"
                : undefined,
            "aria-disabled": disabled ? true : undefined,
            "aria-invalid": validationState === "invalid" ? true : undefined,
            "aria-orientation": role !== "group" ? orientation : undefined,
            "aria-required": required ? true : undefined,
            className: cssModule(
                module,
                hasLabel && "has-label",
                hasMessage && "has-message"

            ),
            gap: gap ?? Gap[orientation][normalizeSize(size)],
            inline: reverse,
            orientation,
            ref: groupRef,
            role: !isInField ? role : undefined,
            wrap
        },
        itemProps: {
            disabled,
            reverse,
            size,
            validationState
        }
    };
}
