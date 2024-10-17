import { Box } from "@components/box";
import { Meta, StoryObj } from "@storybook/react";

const viewports = [640, 768, 1024, 1280, 1440];

const meta = {
    title: "Chromatic/UseStyledSystem-hopper",
    parameters: {
        chromatic: {
            delay: 100,
            viewports: viewports
        }
    }
} as Meta<never>;

// eslint-disable-next-line storybook/csf-component
export default meta;

type UseStyledSystemStory = StoryObj<any>;

export const EverySingleBreakpoints: UseStyledSystemStory = {
    name: "every single breakpoints",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-500", xs: "moss-500", sm: "amanita-500", md: "sapphire-500", lg: "rock-500", xl: "moss-500" }}
            color="samoyed"
            width={960}
        >
            Space X
        </Box>
    )
};

export const MatchHigherBreakpoint: UseStyledSystemStory = {
    name: "match higher breakpoint",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-300", sm: "amanita-300" }}
            color="samoyed"
            width={960}
        >
        Space X
        </Box>
    )
};

export const MatchBase: UseStyledSystemStory = {
    name: "match base",
    render: () => (
        <Box
            backgroundColor={{ base: "sapphire-800" }}
            color="samoyed"
            width={960}
        >
        Space X
        </Box>
    )
};
