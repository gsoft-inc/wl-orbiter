import { ComponentProps, forwardRef } from "react";
import { DialogTrigger, InnerDialogTrigger, InnerDialogTriggerProps } from "../../dialog";
import { OmitInternalProps } from "../../shared";

export type InnerAlertTriggerProps = Omit<InnerDialogTriggerProps, "dismissable">;

export function InnerAlertTrigger({
    forwardedRef,
    ...rest
}: InnerAlertTriggerProps) {
    return (
        <DialogTrigger
            {...rest}
            dismissable
            ref={forwardedRef}
        />
    );
}

InnerAlertTrigger.defaultElement = InnerDialogTrigger.defaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/alert--default-story)
*/
export const AlertTrigger = forwardRef<any, OmitInternalProps<InnerAlertTriggerProps>>((props, ref) => (
    <InnerAlertTrigger {...props} forwardedRef={ref} />
));

export type AlertTriggerProps = ComponentProps<typeof AlertTrigger>;
