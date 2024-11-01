import { IllustratedMessage } from "@components/illustrated-message";
import { SvgImage } from "@components/image";
import { NoResults } from "./assets";
import { Heading } from "@components/typography";
import { Content } from "@components/placeholders";

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
