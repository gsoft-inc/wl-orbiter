import { TextInput } from "@components/text-input/index.js";
import { augmentElement } from "@components/shared/index.js";

describe("augmentElement", () => {
    test("augment existing element props", () => {
        const element = augmentElement(<TextInput />, {
            placeholder: "SpaceX made it!"
        });

        expect(element.props.placeholder).toBe("SpaceX made it!");
    });
});
