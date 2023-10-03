import { AbstractDialogProps, Dialog } from "../../dialog";
import { Children, ComponentProps, ReactElement, ReactNode, forwardRef, useMemo } from "react";
import { Content } from "../../placeholders";
import { Div } from "../../html";
import { OmitInternalProps, augmentElement, getSlotKey, isNil, mergeProps, useSlots } from "../../shared";
import { StyleProvider } from "../../styling";

const DefaultElement = "section";

export type InnerModalProps = AbstractDialogProps<typeof DefaultElement>;

function useModalContentMarkup(content: ReactElement) {
    return useMemo(() => {
        const before: ReactNode[] = [];
        const cards: ReactNode[] = [];
        const after: ReactNode[] = [];

        let hasEncounteredCard = false;

        Children.forEach(content.props.children, (x: ReactElement, index) => {
            if (getSlotKey(x) === "card") {
                cards.push(augmentElement(x, {
                    className: "o-ui-modal-choice",
                    fluid: true,
                    key: index
                }));

                hasEncounteredCard = true;
            } else {
                if (hasEncounteredCard) {
                    after.push(x);
                } else {
                    before.push(x);
                }
            }
        });

        const hasCards = cards.length > 0;

        if (hasCards && cards.length !== 2) {
            throw new Error("A choice modal must have exactly 2 card components.");
        }

        return {
            contentMarkup: (
                <Content {...content.props}>
                    {before}
                    {!hasCards ? undefined : (
                        <StyleProvider
                            value={{
                                button: {
                                    variant: "secondary"
                                }
                            }}
                        >
                            <Div className="o-ui-modal-choice-container">{cards}</Div>
                        </StyleProvider>
                    )}
                    {after}
                </Content>
            ),
            hasCards
        };
    }, [content]);
}

export function InnerModal({
    as = DefaultElement,
    children,
    dismissable = true,
    forwardedRef,
    zIndex = 1,
    ...rest
}: InnerModalProps) {
    const { button, "button-group": buttonGroup, content, footer, header, heading, illustration, image } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        button: null,
        "button-group": null,
        content: {
            className: "o-ui-modal-content"
        },
        footer: null,
        header: null,
        heading: null,
        illustration: null,
        image: null
    }), []));

    const { contentMarkup, hasCards } = useModalContentMarkup(content);

    const size = useMemo(() => {
        if (!isNil(image) || !isNil(illustration)) {
            return "md" as const;
        }

        if (hasCards) {
            return "lg" as const;
        }

        return "sm" as const;
    }, [image, illustration, hasCards]);

    return (
        <Dialog
            {...mergeProps(
                rest,
                {
                    as,
                    dismissable,
                    ref: forwardedRef,
                    size,
                    zIndex
                }
            )}
        >
            {image}
            {illustration}
            {heading}
            {header}
            {contentMarkup}
            {footer}
            {button}
            {buttonGroup}
        </Dialog>
    );
}

InnerModal.defaultElement = DefaultElement;

/**
 * A modal focus the user’s attention exclusively on one task or piece of information via a dialog that sits on top of the page content.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/modal--default-story)
*/
export const Modal = forwardRef<any, OmitInternalProps<InnerModalProps>>((props, ref) => (
    <InnerModal {...props} forwardedRef={ref} />
));

export type ModalProps = ComponentProps<typeof Modal>;
