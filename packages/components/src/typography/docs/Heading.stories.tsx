import { H1, H2, H3, H4, H5, H6, Heading } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Heading",
    component: Heading,
    id: "heading"
} as Meta<typeof Heading>;

export default meta;

type HeadingStory = StoryObj<typeof meta>;

export const Default: HeadingStory = {
    render: () => (
        <Heading>Houston, Tranquillity Base here. The Eagle has landed.</Heading>
    )
};

export const Size: HeadingStory = {
    render: () => (
        <>
            <Heading>Houston, Tranquillity Base here. The Eagle has landed.</Heading>
            <H2 size="xs">Houston, Tranquillity Base here. The Eagle has landed.</H2>
        </>
    )
};

export const HeadingElements: HeadingStory = {
    render: () => (
        <>
            <H1>Houston, Tranquillity Base here. The Eagle has landed.</H1>
            <H2>Houston, Tranquillity Base here. The Eagle has landed.</H2>
            <H3>Houston, Tranquillity Base here. The Eagle has landed.</H3>
            <H4>Houston, Tranquillity Base here. The Eagle has landed.</H4>
            <H5>Houston, Tranquillity Base here. The Eagle has landed.</H5>
            <H6>Houston, Tranquillity Base here. The Eagle has landed.</H6>
        </>
    )
};
