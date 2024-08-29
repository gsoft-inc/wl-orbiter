import { CollectionNode, isDivider, isItem } from "./useCollection.js";
import { getRawSlots, isNil } from "../../shared/index.js";

export function getItemText(item: CollectionNode): string {
    if (isDivider(item) || isItem(item)) {
        const { stringValue, text } = getRawSlots(item.content, ["text"]);

        return !isNil(text)
            ? text.props?.children ?? ""
            : stringValue ?? "";
    }

    return "";
}
