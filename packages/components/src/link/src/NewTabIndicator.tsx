import { Span } from "../../html/index.ts"
import { VisuallyHidden } from "../../visually-hidden/index.ts"

export function NewTabIndicator() {
    return (
        <VisuallyHidden as={Span}>(opens in a new tab)</VisuallyHidden>
    );
}
