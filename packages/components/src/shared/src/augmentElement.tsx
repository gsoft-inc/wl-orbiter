import { ReactElement, RefAttributes, cloneElement } from "react";
import { Size, SizeAdapter, normalizeSize } from "./size.ts";
import { mergeProps } from "./mergeProps.ts";
import { getElementRef } from "./getElementRef.tsx";

export function augmentElement(element: ReactElement & RefAttributes<any>, newProps: Record<string, any>) {
    const augmentedProps = mergeProps({ ...element.props, ref: getElementRef(element) }, newProps);

    return cloneElement(element, augmentedProps);
}

type RecordWithSize = { size: Size } & Record<string, any>;

export function createEmbeddableAdapter<T extends Size>(sizeAdapter: SizeAdapter<T>) {
    return <Props extends RecordWithSize>(element: ReactElement<Props, any>, { size, ...props }: Props) => {
        const newProps = {
            ...props,
            size: sizeAdapter[normalizeSize(size)]
        };

        return augmentElement(element, newProps);
    };
}
