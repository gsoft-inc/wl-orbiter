import "./Alert.css";

import { CheckIcon, InfoIcon, NotificationIcon, WarningIcon } from "../../icons";
import { CloseButton } from "../../button";
import { Content } from "../../view";
import { SlotProvider, cssModule, getSize, getSizeClass, mergeClasses, useId, useTextContent } from "../../shared";
import { Text } from "../../text";
import { Transition } from "../../transition";
import { any, bool, elementType, func, oneOf, oneOfType, string } from "prop-types";
import { forwardRef, useMemo } from "react";
import { isNil } from "lodash";

const ROLE = {
    info: "status",
    success: "status",
    warning: "critical",
    critical: "critical"
};

const HEADING_SIZE = {
    "sm": "2xs",
    "md": "xs",
    "lg": "sm"
};

const ACTION_SIZE = {
    "sm": "xs",
    "md": "sm",
    "lg": "md"
};

const DISMISS_SIZE = {
    "sm": "xs",
    "md": "sm",
    "lg": "md"
};

const propTypes = {
    /**
     * A controlled show value.
     */
    show: bool,
    /**
     * Style to use.
     */
    tone: oneOf(["info", "success", "warning", "critical"]),
    /**
     * Called when the dismiss button is clicked.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @returns {void}
     */
    onDismiss: func,
    /**
     * An alert can vary in size.
     */
    size: oneOf(["sm", "md", "lg"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

export function InnerAlert({
    show = true,
    tone = "info",
    onDismiss,
    size,
    as = "div",
    className,
    role: roleProp,
    children,
    forwardedRef,
    ...rest
}) {
    const content = useTextContent(() => (<Content><Text>{children}</Text></Content>), children);

    const role = useMemo(() => (roleProp ?? ROLE[tone]) ?? "alert", [tone, roleProp]);
    const contentId = useId(null, "o-ui-alert-content");

    const action = {
        variant: "ghost",
        shape: "rounded",
        size: ACTION_SIZE[getSize(size)],
        className: "o-ui-alert-action"
    };

    return (
        <Transition
            {...rest}
            show={show}
            enter="o-ui-fade-in"
            leave="o-ui-fade-out"
            className={mergeClasses(
                cssModule(
                    "o-ui-alert",
                    tone,
                    getSizeClass(size)
                ),
                className
            )}
            tabIndex="0"
            role={role}
            as={as}
            aria-describedby={contentId}
            ref={forwardedRef}
        >
            <SlotProvider
                slots={{
                    icon: {
                        size,
                        className: "o-ui-alert-icon"
                    },
                    content: {
                        id: contentId,
                        size,
                        className: "o-ui-alert-content",
                        as: Text,
                        UNSAFE_slots: {
                            heading: {
                                size: HEADING_SIZE[getSize(size)],
                                className: "o-ui-alert-title"
                            },
                            text: {
                                size: "inherit"
                            },
                            paragraph: {
                                size: "inherit"
                            },
                            link: {
                                size: "inherit",
                                underline: "dotted"
                            },
                            list: {
                                size: "inherit"
                            },
                            button: {
                                variant: "outline",
                                size
                            }
                        }
                    },
                    action: action,
                    button: action,
                    dismiss: {
                        size: DISMISS_SIZE[getSize(size)],
                        className: "o-ui-alert-dismiss"
                    }
                }}
            >
                {content}
                {!isNil(onDismiss) && <CloseButton slot="dismiss" onClick={onDismiss} />}
            </SlotProvider>
        </Transition>
    );
}

InnerAlert.propTypes = propTypes;

export const Alert = forwardRef((props, ref) => (
    <InnerAlert {...props} forwardedRef={ref} />
));

////////

const variations = [
    { tone: "info", icon: <NotificationIcon /> },
    { tone: "success", icon: <CheckIcon /> },
    { tone: "warning", icon: <WarningIcon /> },
    { tone: "critical", icon: <InfoIcon /> }
];

const [
    [InnerInfoAlert, InfoAlert],
    [InnerSuccessAlert, SuccessAlert],
    [InnerWarningAlert, WarningAlert],
    [InnerCriticalAlert, CriticalAlert]
] = Object.values(variations).map(({ tone, icon }) => {
    const InnerVariation = ({
        children,
        forwardedRef,
        ...rest
    }) => {
        return (
            <Alert
                tone={tone}
                {...rest}
                ref={forwardedRef}
            >
                {icon}
                <Content>
                    {children}
                </Content>
            </Alert>
        );
    };

    InnerVariation.propTypes = propTypes;

    const Variation = forwardRef((props, ref) => (
        <InnerVariation {...props} forwardedRef={ref} />
    ));

    return [InnerVariation, Variation];
});

export {
    InnerInfoAlert,
    InfoAlert,
    InnerSuccessAlert,
    SuccessAlert,
    InnerWarningAlert,
    WarningAlert,
    InnerCriticalAlert,
    CriticalAlert
};
