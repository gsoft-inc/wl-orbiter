import { Box } from "../../box/index.js";
import { Children, ComponentProps, ReactElement, ReactNode, forwardRef, useMemo } from "react";
import { ClearFieldContext, useFieldInputProps } from "../../field/index.js";
import { ClearToolbar, useToolbarProps } from "../../toolbar/index.js";
import { InputGroupContext } from "./InputGroupContext.js";
import {
    InternalProps,
    OmitInternalProps,
    StyledComponentProps,
    cssModule,
    getSlotKey,
    isNil,
    mergeProps,
    omitProps,
    resolveChildren,
    useHasChild,
    useMergedRefs
} from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.js";
import { TextAddon } from "./TextAddon.js";

const DefaultElement = "div";

export interface InnerInputGroupProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the input group is disabled.
     */
    disabled?: boolean;
    /**
     * Whether or not the input group take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not the input group is readonly.
     */
    readOnly?: boolean;
}

function toAddon(element: ReactElement, key?: number): ReactNode {
    if (getSlotKey(element) === "text") {
        return (
            <TextAddon key={key}>
                {element}
            </TextAddon>
        );
    }

    return element;
}

export function InnerInputGroup({
    as = DefaultElement,
    children,
    disabled,
    fluid,
    forwardedRef,
    readOnly,
    ...rest
}: InnerInputGroupProps) {
    const fluidValue = useResponsiveValue(fluid);

    const [toolbarProps] = useToolbarProps();
    const [fieldProps] = useFieldInputProps();

    const inputProps = mergeProps(
        {
            disabled,
            fluid: fluidValue,
            readOnly
        },
        omitProps(toolbarProps, ["orientation"]),
        fieldProps
    );

    const ref = useMergedRefs(forwardedRef);

    const transformedChildren = useMemo(() => {
        const elements = Children.toArray(resolveChildren(children)).filter(x => !isNil(x));

        if (elements.length <= 1) {
            throw new Error("An input group component must have 2 or 3 children.");
        }

        return Children
            .toArray(children)
            .reduce((acc: ReactNode[], x: ReactElement, index) => {
                acc.push(toAddon(x, index));

                return acc;
            }, []) as ReactNode[];
    }, [children]);

    const hasTextInput = useHasChild(".o-ui-input-group-text-input", ref);
    const hasDateInput = useHasChild(".o-ui-date-input-in-group", ref);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-input-group",
                        fluidValue && "fluid",
                        hasTextInput && "has-text-input",
                        hasDateInput && "has-date-input"
                    ),
                    ref
                }
            )}
        >
            <ClearToolbar>
                <ClearFieldContext>
                    <InputGroupContext.Provider value={inputProps}>
                        {transformedChildren}
                    </InputGroupContext.Provider>
                </ClearFieldContext>
            </ClearToolbar>
        </Box>
    );
}

InnerInputGroup.defaultElement = DefaultElement;

/**
 * An input group combines an input component with addons.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/input-group--default-story)
*/
export const InputGroup = forwardRef<any, OmitInternalProps<InnerInputGroupProps>>((props, ref) => (
    <InnerInputGroup {...props} forwardedRef={ref} />
));

export type InputGroupProps = ComponentProps<typeof InputGroup>;
