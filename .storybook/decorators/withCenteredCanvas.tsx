import { Div } from "@components/html/index.ts";
import { Flex } from "@components/layout/index.ts";
import { isChromatic } from "../env.ts";

export function withCenteredCanvas(story, context) {
    const { parameters, viewMode } = context;
    const { canvasLayout } = parameters;

    if (viewMode !== "story" && !isChromatic) {
        return story();
    }

    return (
        <Flex
            position="fixed"
            top="0"
            left="0"
            right="0"
            marginTop="3.5rem"
            alignItems="center"
        >
            <Div
                width="90%"
                // Important for chromatic tests.
                height="600px"
                marginRight="auto"
                marginLeft="auto"
                style={canvasLayout}
            >
                {story()}
            </Div>
        </Flex>
    );
}
