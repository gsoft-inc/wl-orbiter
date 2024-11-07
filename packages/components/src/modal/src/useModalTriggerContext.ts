import { DialogTriggerContextType, useDialogTriggerContext } from "../../dialog/index.ts";

export type ModalTriggerContextType = DialogTriggerContextType;

export function useModalTriggerContext() {
    return useDialogTriggerContext() as ModalTriggerContextType;
}
