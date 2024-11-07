import { IllustratedMessage } from "@components/illustrated-message/index.ts";
import { SvgImage } from "@components/image/index.ts";
import { NoResults } from "./assets/index.tsx";
import { Heading } from "@components/typography/index.ts";
import { Content } from "@components/placeholders/index.ts";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/IllustratedMessage",
    component: IllustratedMessage,
    id: "illustrated-message"
} as Meta<typeof IllustratedMessage>;

export default meta;

type IllustratedMessageStory = StoryObj<typeof meta>;

export const NoResultsStory: IllustratedMessageStory = {
    render: () => (
        <IllustratedMessage>
            <SvgImage aria-label="Galaxy" src={NoResults} stroke="neutral" />
            <Heading>Can't find "Saturn"</Heading>
            <Content>Please try another search term.</Content>
        </IllustratedMessage>
    )
};

export const Horizontal: IllustratedMessageStory = {
    render: () => (
        <IllustratedMessage orientation="horizontal">
            <SvgImage aria-label="Galaxy" src={NoResults} stroke="neutral" />
            <Heading>Can't find "Saturn"</Heading>
            <Content>Please try another search term.</Content>
        </IllustratedMessage>
    )
};
