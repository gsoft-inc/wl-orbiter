/**
 * @jest-environment node
 */
import { AddIcon } from "@components/icons";
import { Link } from "@components/link";
import { renderToString } from "react-dom/server";

test("Server-side rendering: renders on a server without crashing", () => {
    const renderOnServer = () =>
        renderToString(
            <Link external href="#" aria-label="Add">
                <AddIcon />
            </Link>
        );

    expect(renderOnServer).not.toThrow();
});
