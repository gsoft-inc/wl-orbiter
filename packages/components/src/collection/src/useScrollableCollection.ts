import { CollectionNode } from "./useCollection";
import { RefObject, useState } from "react";
import { isNil, useIsomorphicLayoutEffect } from "../../shared";

interface UseScrollableCollectionOptions {
    borderHeight?: number;
    boundaryElement?: HTMLElement;
    disabled?: boolean;
    dividerSelector?: string;
    itemSelector?: string;
    maxHeight?: number;
    paddingHeight?: number;
    sectionSelector?: string;
}

function toPixels(value: string) {
    if (isNil(value)) {
        return 0;
    }

    if (value.endsWith("rem")) {
        return parseFloat(value) * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    return parseInt(value);
}

function getOuterHeight(element: HTMLElement) {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);

    return clientRect.height + toPixels(computedStyle.marginTop) + toPixels(computedStyle.marginBottom);
}

export function useScrollableCollection(containerRef: RefObject<Element>, nodes: CollectionNode[],
    {
        borderHeight = 0,
        boundaryElement,
        disabled,
        dividerSelector,
        itemSelector,
        maxHeight = 500,
        paddingHeight = 0,
        sectionSelector
    }: UseScrollableCollectionOptions = {}) {
    const [collectionHeight, setCollectionHeight] = useState<string>();

    useIsomorphicLayoutEffect(() => {
        if (!disabled) {
            if (!isNil(containerRef.current)) {
                const adjustedMaxHeight = maxHeight + borderHeight + paddingHeight;

                let height = borderHeight + paddingHeight;

                const elements = !isNil(itemSelector) || !isNil(sectionSelector) || !isNil(dividerSelector)
                    ? containerRef.current.querySelectorAll([itemSelector, sectionSelector, dividerSelector].filter(x => x).join(", "))
                    : Array.from(containerRef.current.children);

                elements.forEach((x: HTMLElement) => {
                    const outerHeight = getOuterHeight(x);

                    if (height + outerHeight > adjustedMaxHeight) {
                        return false;
                    }

                    height += outerHeight;
                });

                if (boundaryElement) {
                    const { offsetHeight: boundaryHeight } = boundaryElement;

                    const { y: containerY } = containerRef.current.getBoundingClientRect();

                    // If the container and direction is bottom is overflowing the boundary, adjust the height
                    if (height + containerY > boundaryHeight) {
                        height = boundaryHeight - containerY;
                        // If the container and direction is top is overflowing the boundary, adjust the height
                    } else if (containerY < 0) {
                        height = height + containerY;
                    }
                }

                setCollectionHeight(`${height}px`);
            }
        }
        // nodes must be in the dependency array in order to be able to recompute new element selected by the querySelectorAll
    }, [containerRef, nodes, maxHeight, borderHeight, paddingHeight, itemSelector, sectionSelector, dividerSelector, disabled]);

    return isNil(collectionHeight) ? {} : {
        style: {
            height: collectionHeight
        }
    };
}
