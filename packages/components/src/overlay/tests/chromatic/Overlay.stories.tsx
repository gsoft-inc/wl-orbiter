import { Box, BoxProps } from "@components/box/index.ts";
import { Overlay } from "@components/overlay/index.ts";
import { ThemeProvider } from "@components/styling/index.ts";
import { augmentElement, mergeProps, useMergedRefs } from "@components/shared/index.ts";
import { forwardRef, ReactElement, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Overlay",
    component: Overlay,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Overlay>;

export default meta;

type OverlayStory = StoryObj<typeof meta>;

function PrimaryBox({ children, ...rest }: BoxProps) {
    return (
        <Box
            {...rest}
            backgroundColor="sapphire-600"
            height="4rem"
            width="4rem"
        >
            {children}
        </Box>
    );
}

const Boundary = forwardRef<any, BoxProps>(({
    children,
    ...rest
},
ref) => {
    const [boundaryElement, setBoundaryElement] = useState();

    const containerRef = useMergedRefs(setBoundaryElement, ref);

    const content = augmentElement(children as ReactElement, {
        containerElement: boundaryElement
    });

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    ref: containerRef
                }
            )}
        >
            {content}
        </Box>
    );
});

export const InheritTheme: OverlayStory = {
    name: "inherit theme",
    render: () => (
        <ThemeProvider colorScheme="light">
            <Boundary>
                <Overlay show>
                    <PrimaryBox />
                </Overlay>
            </Boundary>
        </ThemeProvider>
    )
};

export const StyledSystem: OverlayStory = {
    name: "styled system",
    render: () => (
        <Boundary>
            <Overlay border="warning" show>
                <PrimaryBox />
            </Overlay>
        </Boundary>
    )
};

export const ClassName: OverlayStory = {
    name: "className",
    render: () => (
        <Boundary>
            <Overlay className="border-red" show>
                <PrimaryBox />
            </Overlay>
        </Boundary>
    )
};

export const Style: OverlayStory = {
    name: "style",
    render: () => (
        <Boundary>
            <Overlay style={{ border: "1px solid red" }} show>
                <PrimaryBox />
            </Overlay>
        </Boundary>
    )
};
