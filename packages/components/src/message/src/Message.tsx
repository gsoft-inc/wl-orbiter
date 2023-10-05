import { AlertMajorIcon, CheckMajorIcon, InfoCircleMajorIcon, WarningMajorIcon } from "../../icons";
import { ComponentProps, MouseEvent, ReactNode, forwardRef, useMemo } from "react";
import { Content } from "../../placeholders";
import { CrossButton } from "../../button";
import { InternalProps, OmitInternalProps, StyledComponentProps, augmentElement, cssModule, isNil, mergeProps, useMergedRefs, useSlots } from "../../shared";
import { StyleProvider } from "../../styling";
import { Text, TextProps } from "../../typography";
import { Transition } from "../../transition";

const DefaultElement = "div";

const MessageContent = forwardRef<any, TextProps>(({
    children,
    ...rest
}, ref) => {
    return (
        <Text
            {...rest}
            ref={ref}
        >
            <StyleProvider
                value={{
                    heading: {
                        className: "o-ui-message-title"
                    },
                    "html-a": {
                        color: "inherit"
                    },
                    link: {
                        color: "inherit"
                    }
                }}
            >
                {children}
            </StyleProvider>
        </Text>
    );
});

export interface InnerMessageProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Called when the dismiss button is clicked.
     * @param {MouseEvent} event - React's original synthetic event.
     * @returns {void}
     */
    onDismiss?: (event: MouseEvent) => void;
    /**
     * A controlled show value.
     */
    show?: boolean;
    /**
     * The style to use.
     */
    variant?: "informative" | "warning" | "positive" | "negative";
}

const Role = {
    informative: "status",
    negative: "alert",
    positive: "status",
    warning: "alert"
};

const Icon = {
    informative: <InfoCircleMajorIcon />,
    negative: <AlertMajorIcon />,
    positive: <CheckMajorIcon />,
    warning: <WarningMajorIcon />
};

export function InnerMessage({
    as = DefaultElement,
    children,
    forwardedRef,
    onDismiss,
    role: roleProp,
    show = true,
    variant = "informative",
    ...rest
}: InnerMessageProps) {
    const ref = useMergedRefs(forwardedRef);

    const { button, content } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Content
        },
        button: {
            className: "o-ui-message-action",
            inherit: true,
            size: "sm",
            variant: "secondary"
        },
        content: {
            as: MessageContent,
            className: "o-ui-message-content"
        }
    }), []));

    const iconMarkup = augmentElement(Icon[variant], {
        className: "o-ui-message-icon"
    });

    const dismissMarkup = !isNil(onDismiss) && (
        <CrossButton
            aria-label="Dismiss"
            className="o-ui-message-dismiss"
            inherit
            onClick={onDismiss}
            size="sm"
        />
    );

    return (
        <Transition
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-message",
                        variant,
                        onDismiss && "dismissable"
                    ),
                    enter: "o-ui-fade-in",
                    leave: "o-ui-fade-out",
                    ref,
                    role: (roleProp ?? Role[variant]) ?? "alert",
                    show
                }
            )}
        >
            {iconMarkup}
            {content}
            {button}
            {dismissMarkup}
        </Transition>
    );
}

InnerMessage.defaultElement = DefaultElement;

/**
 * A message is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/message--default-story)
*/
export const Message = forwardRef<any, OmitInternalProps<InnerMessageProps>>((props, ref) => (
    <InnerMessage {...props} forwardedRef={ref} />
));

export type MessageProps = ComponentProps<typeof Message>;
