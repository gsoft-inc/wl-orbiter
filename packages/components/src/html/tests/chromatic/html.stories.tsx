import { A } from "@components/html";
import { Inline } from "@components/layout";
import { StyleProvider } from "@components/styling";
import { Meta, StoryObj } from "@storybook/react";
import { PropsWithChildren } from "react";

const meta = {
    title: "Chromatic/Html",
    component: StyleProvider,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof StyleProvider>;

export default meta;

type StyleProviderStory = StoryObj<typeof meta>;

const StyledAnchor = ({ children }: PropsWithChildren) => {
    return (
        <StyleProvider
            value={{
                "html-a": {
                    color: "red"
                }
            }}
        >
            <A href="#">{children}</A>
        </StyleProvider>
    );
};

export const Size: StyleProviderStory = {
    name: "size",
    render: () => (
        <A href="#">Google</A>
    )
};

export const StyleContext: StyleProviderStory = {
    name: "support style context",
    render: () => (
        <StyledAnchor>Google</StyledAnchor>
    )
};

export const Styling: StyleProviderStory = {
    name: "styling",
    render: () => (
        <Inline>
            <A border="warning" href="#">Google</A>
            <A className="border-red" href="#">Google</A>
            <A style={{ border: "1px solid red" }} href="#">Google</A>
        </Inline>
    )
};
