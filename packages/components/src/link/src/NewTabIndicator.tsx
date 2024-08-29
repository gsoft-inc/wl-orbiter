import { Span } from "../../html/index.js";
import { VisuallyHidden } from "../../visually-hidden/index.js";

export function NewTabIndicator() {
    return (
        <VisuallyHidden as={Span}>(opens in a new tab)</VisuallyHidden>
    );
}
