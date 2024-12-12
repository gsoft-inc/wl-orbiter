import { Children, ReactElement, ReactNode, Ref, RefAttributes, useMemo } from "react";
import { Content, Header } from "../../placeholders/index.ts";
import { isNil, mergeProps, resolveChildren } from "../../shared/index.ts";
import { getElementRef } from "@components/collection/index.ts";

export interface PanelType {
    disabled?: boolean;
    elementType?: ReactElement["type"];
    index?: number;
    key: string;
    panelId: string;
    props?: Record<string, any>;
    ref?: Ref<any>;
    tabId: string;
}

export interface TabType {
    disabled?: boolean;
    elementType?: ReactElement["type"];
    index?: number;
    key: string;
    panelId: string;
    props?: Record<string, any>;
    ref?: Ref<any>;
    tabId: string;
}

export class TabsBuilder {
    private rootId;

    constructor(rootId: string) {
        this.rootId = rootId;
    }

    build(children: ReactNode): [TabType[], PanelType[]] {
        const tabs: TabType[] = [];
        const panels: PanelType[] = [];

        let index = 0;

        Children.toArray(children).filter(x => x).forEach((element: ReactElement, position) => {
            const key = !isNil(element.key) ? element.key.toString().replace(".", "").replace("$", "") : position.toString();

            const [header, content] = Children.toArray(resolveChildren(element.props.children)) as [ReactElement & RefAttributes<any>, ReactElement & RefAttributes<any>];

            if (isNil(header) || isNil(content)) {
                throw new Error("A tabs item must have an <Header> and a <Content>.");
            }

            const tabId = this.makeId(header, "tab", key);
            const panelId = this.makeId(content, "panel", key);

            tabs.push({
                // Use a custom type if available otherwise let the Tab component choose his default type.
                elementType: header.type !== Header ? header.type : undefined,
                index: index++,
                key,
                panelId,
                props: mergeProps(header.props, element.props),
                ref: getElementRef(header),
                tabId
            });

            index++;

            panels.push({
                // Use a custom type if available otherwise let the Tab component choose his default type.
                elementType: content.type !== Content ? content.type : undefined,
                index: index++,
                key,
                panelId,
                props: content.props,
                ref: getElementRef(content),
                tabId
            });
        });

        return [tabs, panels];
    }

    private makeId({ props: { id } }: Record<string, any>, type: "tab" | "panel", key: string): string {
        return id ?? `${this.rootId}-${type}-${key}`;
    }
}

export function useTabsItems(children: ReactNode, rootId: string) {
    const builder = useMemo(() => new TabsBuilder(rootId), [rootId]);

    return useMemo(() => builder.build(children), [builder, children]);
}
