import { CollectionNode, isDivider, isItem } from "./useCollection.ts";
import { getRawSlots, isNil } from "../../shared/index.ts";

export function getItemText(item: CollectionNode): string {
    if (isDivider(item) || isItem(item)) {
        const { stringValue, text } = getRawSlots(item.content, ["text"]);

        return !isNil(text)
            ? text.props?.children ?? ""
            : stringValue ?? "";
    }

    return "";
}
