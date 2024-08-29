import { DialogTriggerContextType, useDialogTriggerContext } from "../../dialog/index.js";

export type ModalTriggerContextType = DialogTriggerContextType;

export function useModalTriggerContext() {
    return useDialogTriggerContext() as ModalTriggerContextType;
}
