import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, StyledComponentProps, cssModule, mergeProps } from "../../shared/index.ts"
import { ResponsiveProp, StyleProvider, useResponsiveValue } from "../../styling/index.ts"
import { IconContext } from "@hopper-ui/icons";
import { Text } from "../../typography/index.ts"

export const FieldMessageDefaultElement = "div";

export interface SharedFieldMessageProps extends InternalProps, StyledComponentProps<typeof FieldMessageDefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the field take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
}

export interface InnerFieldMessageProps extends Omit<SharedFieldMessageProps, "forwardedRef"> {
    /**
     * The style to use.
     */
    variant: "neutral" | "success" | "error";
}

export function getValidationProps(validationState: string) {
    const isValid = validationState === "valid";
    const isError = validationState === "invalid";

    return {
        isError,
        isHelp: !isValid && !isError,
        isValid
    };
}

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const FieldMessage = forwardRef<any, InnerFieldMessageProps>(({
    as = FieldMessageDefaultElement,
    children,
    fluid,
    variant,
    ...rest
}, ref) => {
    const fluidValue = useResponsiveValue(fluid);

    return (
        <Text
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-field-message",
                        variant,
                        fluidValue && "fluid"
                    ),
                    ref,
                    size: "sm" as const
                }
            )}
        >
            <StyleProvider
                value={{
                    "html-a": {
                        color: "inherit"
                    },
                    "html-ol": {
                        color: "inherit"
                    },
                    "html-p": {
                        color: "inherit"
                    },
                    "html-ul": {
                        color: "inherit"
                    },
                    icon: {
                        size: "sm"
                    },
                    link: {
                        color: "inherit"
                    },
                    p: {
                        color: "inherit"
                    },
                    text: {
                        color: "inherit"
                    }
                }}
            >
                <IconContext.Provider value={{ size: "sm" }}>
                    {children}
                </IconContext.Provider>
            </StyleProvider>
        </Text>
    );
});

export type FieldMessageProps = ComponentProps<typeof FieldMessage>;
