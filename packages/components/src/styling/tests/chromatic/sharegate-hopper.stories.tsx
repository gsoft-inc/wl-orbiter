import {
    BackgroundColorMapping,
    BorderMapping,
    BoxShadowMapping,
    ColorMapping,
    FontSizeMapping,
    FontWeightMapping,
    LineHeightMapping,
    SizingMapping,
    SpacingMapping,
    ThemeProvider
} from "@components/styling";
import { Box, BoxProps } from "@components/box";
import { IconColorMapping } from "@hopper-ui/styled-system";
import { NoteIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Sharegate-hopper"
} as Meta<any>;

// eslint-disable-next-line storybook/csf-component
export default meta;

type ShareGateStory = StoryObj<any>;

function SmallSquare(props: BoxProps) {
    return (
        <Box
            {...props}
            width={320}
            height={320}
        />
    );
}

function LargeSquare(props: BoxProps) {
    return (
        <Box
            {...props}
            width="3.5rem"
            height="3.5rem"
        />
    );
}

export const BackgroundColor: ShareGateStory = {
    name: "background color",
    render: () => (
        <Stack>
            <Inline gap={0} wrap>
                {Object.keys(BackgroundColorMapping).map(x => <SmallSquare backgroundColor={x} key={x} />)}
            </Inline>
            <ThemeProvider colorScheme="dark">
                <Inline gap={0} wrap>
                    {Object.keys(BackgroundColorMapping).map(x => <SmallSquare backgroundColor={x} key={x} />)}
                </Inline>
            </ThemeProvider>
        </Stack>
    )
};

export const Border: ShareGateStory = {
    name: "border",
    render: () => (
        <Stack>
            <Inline gap={40} wrap>
                {Object.keys(BorderMapping).map(x => <SmallSquare border={x} key={x} />)}
            </Inline>
            <ThemeProvider colorScheme="dark">
                <Inline gap={40} wrap>
                    {Object.keys(BorderMapping).map(x => <SmallSquare border={x} key={x} />)}
                </Inline>
            </ThemeProvider>
        </Stack>
    )
};

export const BoxShadow: ShareGateStory = {
    name: "box shadow",
    render: () => (
        <Inline>
            {Object.keys(BoxShadowMapping).map(x => <LargeSquare boxShadow={x} key={x} />)}
        </Inline>
    )
};

export const Color: ShareGateStory = {
    name: "color",
    render: () => (
        <Stack>
            <Inline gap={0} wrap>
                {Object.keys(ColorMapping).map(x => <SmallSquare color={x} key={x}>T</SmallSquare>)}
            </Inline>
            <ThemeProvider colorScheme="dark">
                <Inline gap={0} wrap>
                    {Object.keys(ColorMapping).map(x => <SmallSquare color={x} key={x}>T</SmallSquare>)}
                </Inline>
            </ThemeProvider>
        </Stack>
    )
};

export const IconColors: ShareGateStory = {
    name: "icon colors",
    render: () => (
        <Stack>
            <Inline gap={0} wrap>
                {(Object.keys(IconColorMapping) as (keyof typeof IconColorMapping)[]).map(x => <NoteIcon fill={x} key={x} />)}
            </Inline>
            <ThemeProvider colorScheme="dark">
                <Inline gap={0} wrap>
                    {(Object.keys(IconColorMapping) as (keyof typeof IconColorMapping)[]).map(x => <NoteIcon fill={x} key={x} />)}
                </Inline>
            </ThemeProvider>
        </Stack>
    )
};

export const FontSize: ShareGateStory = {
    name: "font size",
    render: () => (
        <>{Object.keys(FontSizeMapping).map(x => <Box fontSize={x} key={x}>Space exploration</Box>)}</>
    )
};

export const FontWeight: ShareGateStory = {
    name: "font weight",
    render: () => (
        <>{Object.keys(FontWeightMapping).map(x => <Box fontWeight={x as keyof typeof FontWeightMapping} key={x}>Space exploration</Box>)}</>
    )
};

export const LineHeight: ShareGateStory = {
    name: "line height",
    render: () => (
        <Inline>
            {Object.keys(LineHeightMapping).map(x => <Box lineHeight={x} key={x}>That's one small step for man, one giant leap for mankind.</Box>)}
        </Inline>
    )
};

export const Spacing: ShareGateStory = {
    name: "spacing",
    render: () => (
        <Stack>
            {Object.keys(SpacingMapping).map(x => <Box width={x} height="1.25rem" backgroundColor="#000" key={x} />)}
        </Stack>
    )
};

export const Sizing: ShareGateStory = {
    name: "sizing",
    render: () => (
        <Stack>
            {Object.keys(SizingMapping).map(x => <Box width={x} height="1.25rem" backgroundColor="#000" key={x} />)}
        </Stack>
    )
};
