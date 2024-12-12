import { ReactElement, Ref } from "react";

/**
 * `ref` is passed as prop in React 19, whereas `ref` is directly attached to
 * children in React 18 below check is to ensure `ref` is accessible in both
 * cases
 */
export function getElementRef(element: ReactElement): Ref<any> {
    return element.props.propertyIsEnumerable("ref") ? element.props.ref : (element as any).ref;
}