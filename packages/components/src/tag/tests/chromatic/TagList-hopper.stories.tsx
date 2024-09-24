import { Counter } from "@components/counter";
import { Div } from "@components/html";
import { Dot } from "@components/dot";
import { QuestionIcon, LightbulbIcon, NotificationIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Item } from "@components/collection";
import { TagList } from "@components/tag";
import { Text } from "@components/typography";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/TagList",
    component: TagList
} as ComponentMeta<typeof TagList>;

type TagListStory = ComponentStoryObj<typeof TagList>;

export const Default: TagListStory = {
    storyName: "default",
    render: () => (
        <Stack>
            <TagList>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
            <TagList size="sm">
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
        </Stack>
    )
};

export const ItemWithIicon: TagListStory = {
    storyName: "item with an icon",
    render: () => (
        <TagList>
            <Item key="mercury">
                <LightbulbIcon />
                <Text>Mercury Program</Text>
            </Item>
            <Item key="gemini">
                <NotificationIcon />
                <Text>Gemini Program</Text>
            </Item>
            <Item key="apollo">
                <QuestionIcon />
                <Text>Apollo Program</Text>
            </Item>
        </TagList>
    )
};

export const ItemWithDot: TagListStory = {
    storyName: "item with a dot",
    render: () => (
        <TagList>
            <Item key="mercury">
                <Dot color="primary" />
                <Text>Mercury Program</Text>
            </Item>
            <Item key="gemini">
                <Dot color="primary" />
                <Text>Gemini Program</Text>
            </Item>
            <Item key="apollo">
                <Dot color="primary" />
                <Text>Apollo Program</Text>
            </Item>
        </TagList>
    )
};

export const ItemWithCounter: TagListStory = {
    storyName: "item with a counter",
    render: () => (
        <TagList>
            <Item key="mercury">
                <Text>Mercury Program</Text>
                <Counter variant="divider">60</Counter>
            </Item>
            <Item key="gemini">
                <Text>Gemini Program</Text>
                <Counter variant="divider">60</Counter>
            </Item>
            <Item key="apollo">
                <Text>Apollo Program</Text>
                <Counter variant="divider">60</Counter>
            </Item>
        </TagList>
    )
};

export const WithClearButton: TagListStory = {
    storyName: "with clear button",
    render: () => (
        <Stack>
            <TagList onClear={() => {}}>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
            <TagList size="sm" onClear={() => {}}>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
        </Stack>
    )
};

export const WithClearButtonEmpty: TagListStory = {
    storyName: "with clear button & empty",
    render: () => (
        <TagList onClear={() => {}}>
        </TagList>
    )
};

export const Readonly: TagListStory = {
    storyName: "readonly",
    render: () => (
        <Stack>
            <TagList readOnly>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
            <TagList readOnly onClear={() => {}}>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
        </Stack>
    )
};

export const Validation: TagListStory = {
    storyName: "validation",
    render: () => (
        <Stack>
            <TagList validationState="invalid">
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
            <TagList readOnly onClear={() => {}} validationState="invalid">
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
            <TagList validationState="valid">
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
            </TagList>
        </Stack>
    )
};

export const MultipleRows: TagListStory = {
    storyName: "multiple rows",
    render: () => (
        <Stack>
            <Div width="24rem">
                <TagList>
                    <Item key="mercury">Mercury Program</Item>
                    <Item key="gemini">Gemini Program</Item>
                    <Item key="apollo">Apollo Program</Item>
                    <Item key="skylab">Skylab</Item>
                    <Item key="soyuz">Apollo–Soyuz Test Project</Item>
                    <Item key="artemis">Artemis Program</Item>
                    <Item key="mercury-2">Mercury Program</Item>
                    <Item key="gemini-2">Gemini Program</Item>
                    <Item key="apollo-3">Apollo Program</Item>
                    <Item key="skylab-4">Skylab</Item>
                    <Item key="soyuz-5">Apollo–Soyuz Test Project</Item>
                    <Item key="artemis-6">Artemis Program</Item>
                </TagList>
            </Div>
            <Div width="24rem">
                <TagList onClear={() => {}}>
                    <Item key="mercury">Mercury Program</Item>
                    <Item key="gemini">Gemini Program</Item>
                    <Item key="apollo">Apollo Program</Item>
                    <Item key="skylab">Skylab</Item>
                    <Item key="soyuz">Apollo–Soyuz Test Project</Item>
                    <Item key="artemis">Artemis Program</Item>
                    <Item key="mercury-2">Mercury Program</Item>
                    <Item key="gemini-2">Gemini Program</Item>
                    <Item key="apollo-2">Apollo Program</Item>
                    <Item key="skylab-2">Skylab</Item>
                    <Item key="soyuz-2">Apollo–Soyuz Test Project</Item>
                    <Item key="artemis-2">Artemis Program</Item>
                </TagList>
            </Div>
        </Stack>
    )
};

export const Styling: TagListStory = {
    storyName: "styling",
    render: () => (
        <Inline>
            <TagList border="warning">
                <Item key="earth">Earth</Item>
                <Item border="warning" key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </TagList>
            <TagList className="border-red">
                <Item key="earth">Earth</Item>
                <Item className="border-red" key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </TagList>
            <TagList style={{ border: "1px solid red" }}>
                <Item key="earth">Earth</Item>
                <Item style={{ border: "1px solid red" }} key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </TagList>
        </Inline>
    )
};
