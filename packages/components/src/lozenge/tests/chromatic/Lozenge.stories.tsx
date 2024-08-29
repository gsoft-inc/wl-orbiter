import { IconList } from "@components/icons/index.js";
import { SparklesIcon } from "@hopper-ui/icons";
import { Div } from "@components/html/index.js";
import { Inline, Stack } from "@components/layout/index.js";
import { Lozenge } from "@components/lozenge/index.js";
import { Text } from "@components/typography/index.js";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Lozenge",
    component: Lozenge
} as ComponentMeta<typeof Lozenge>;

type LozengeStory = ComponentStoryObj<typeof Lozenge>;

export const Default: LozengeStory = {
    storyName: "default",
    render: () => (
        <Inline alignY="end">
            <Lozenge size="sm">New</Lozenge>
            <Lozenge>New</Lozenge>
        </Inline>
    )
};

export const Variants: LozengeStory = {
    storyName: "variants",
    render: () => (
        <Inline alignY="end">
            <Lozenge size="sm">New</Lozenge>
            <Lozenge >New</Lozenge>
            <Lozenge variant="warning" size="sm">New</Lozenge>
            <Lozenge variant="warning">New</Lozenge>
            <Lozenge variant="positive" size="sm">New</Lozenge>
            <Lozenge variant="positive">New</Lozenge>
            <Lozenge variant="negative" size="sm">New</Lozenge>
            <Lozenge variant="negative">New</Lozenge>
            <Lozenge variant="informative" size="sm">New</Lozenge>
            <Lozenge variant="informative">New</Lozenge>
            <Inline alignY="end">
                <Lozenge size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="warning" size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="warning">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="positive" size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="positive">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="negative" size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="negative">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="informative" size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="informative">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
            </Inline>
        </Inline>
    )
};

export const Icon: LozengeStory = {
    storyName: "icon",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Lozenge size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
            </Inline>
            <Div>
                <Lozenge>
                    <IconList>
                        <SparklesIcon /><SparklesIcon />
                    </IconList>
                    <Text>New</Text>
                </Lozenge>
            </Div>
        </Stack>
    )
};

export const HighlightAndVariant: LozengeStory = {
    storyName: "highlight and variant",
    render: () => (
        <Stack>
            <Inline alignY="end">
                <Lozenge highlight size="sm">New</Lozenge>
                <Lozenge highlight>New</Lozenge>
                <Lozenge variant="warning" highlight size="sm">New</Lozenge>
                <Lozenge variant="warning" highlight>New</Lozenge>
                <Lozenge variant="positive" highlight size="sm">New</Lozenge>
                <Lozenge variant="positive" highlight>New</Lozenge>
                <Lozenge variant="negative" highlight size="sm">New</Lozenge>
                <Lozenge variant="negative" highlight>New</Lozenge>
                <Lozenge highlight variant="informative" size="sm">New</Lozenge>
                <Lozenge highlight variant="informative">New</Lozenge>
            </Inline>
            <Inline alignY="end">
                <Lozenge highlight size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge highlight>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="warning" highlight size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="warning" highlight>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="positive" highlight size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="positive" highlight>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="negative" highlight size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="negative" highlight>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="informative" highlight size="sm">
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
                <Lozenge variant="informative" highlight>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
            </Inline>
        </Stack>
    )
};

export const InheritParentProperties: LozengeStory = {
    storyName: "inherit parent properties",
    render: () => (
        <Inline alignY="end">
            <Lozenge textTransform="uppercase">New</Lozenge>
            <Lozenge color="red" highlight>
                <SparklesIcon />
                <Text>New</Text>
            </Lozenge>
        </Inline>
    )
};

export const Fluid: LozengeStory = {
    storyName: "fluid",
    render: () => (
        <Div width="500px">
            <Inline>
                <Lozenge fluid>New</Lozenge>
                <Lozenge fluid>
                    <SparklesIcon />
                    <Text>New</Text>
                </Lozenge>
            </Inline>
        </Div>
    )
};


export const Zoom: LozengeStory = {
    storyName: "zoom",
    render: () => (
        <Inline>
            <Div className="zoom-in">
                <Lozenge>New</Lozenge>
            </Div>
            <Div className="zoom-out">
                <Lozenge>New</Lozenge>
            </Div>
        </Inline>
    )
};

export const Styling: LozengeStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <Lozenge border="warning">New</Lozenge>
            <Lozenge className="border-red">New</Lozenge>
            <Lozenge
                style={{
                    border: "1px solid red"
                }}
            >New</Lozenge>
        </Inline>
    )
};
