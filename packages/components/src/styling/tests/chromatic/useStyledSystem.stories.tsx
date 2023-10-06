import { Box } from "@components/box";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

const viewports = [640, 768, 1024, 1280, 1440];

// eslint-disable-next-line storybook/csf-component
export default {
    title: "Chromatic/UseStyledSystem",
    parameters: {
        chromatic: {
            delay: 100,
            viewports: viewports
        }
    }
} as ComponentMeta<never>;

type UseStyledSystemStory = ComponentStoryObj<never>;

export const EverySingleBreakpoints: UseStyledSystemStory = {
    storyName: "every single breakpoints",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-500", xs: "moss-500", sm: "amanita-500", md: "sapphire-500", lg: "rock-500", xl: "moss-500" }}
            color="#FFFFFF"
            width={960}
        >
            Space X
        </Box>
    )
};

export const MatchHigherBreakpoint: UseStyledSystemStory = {
    storyName: "match higher breakpoint",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-300", sm: "amanita-300" }}
            color="#FFFFFF"
            width={960}
        >
        Space X
        </Box>
    )
};

export const MatchBase: UseStyledSystemStory = {
    storyName: "match base",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-800" }}
            color="#FFFFFF"
            width={960}
        >
        Space X
        </Box>
    )
};
