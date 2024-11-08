import { Tag, TagList } from "@components/tag";
import { CatIcon, LightbulbIcon, MailIcon, NotificationIcon, ReportIcon, RocketIcon, SettingsIcon, SparklesIcon } from "@hopper-ui/icons";
import { Flex, Inline, Stack } from "@components/layout";
import { Section, Item } from "@components/collection";
import { DisclosureArrow } from "@components/disclosure";
import { Button } from "@components/button";
import { Counter } from "@components/counter";
import { Dot } from "@components/dot";
import { Menu, MenuTrigger } from "@components/menu";
import { IconList } from "@components/icons";
import { Text } from "@components/typography";
import { Avatar } from "@components/avatar";
import { useCallback, useMemo, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Tag",
    component: Tag,
    id: "tag"
} as Meta<typeof Tag>;

export default meta;

type TagStory = StoryObj<typeof meta>;

export const Default: TagStory = {
    render: () => (
        <Tag>Falcon 9</Tag>
    )
};

export const AvatarStory: TagStory = {
    render: () => (
        <Tag>
            <Avatar name="Alan Shepard" />
            <Text>Alan Shepard</Text>
        </Tag>
    )
};

export const Icon: TagStory = {
    render: () => (
        <Tag>
            <SparklesIcon />
            <Text>Falcon 9</Text>
        </Tag>
    )
};

export const EndIcon: TagStory = {
    render: () => (
        <Tag>
            <Text>Falcon 9</Text>
            <IconList slot="end-icon">
                <CatIcon />
                <SparklesIcon />
                <RocketIcon />
            </IconList>
        </Tag>
    )
};

export const DotStory: TagStory = {
    render: () => (
        <Tag>
            <Dot color="--hop-sapphire-600" />
            <Text>Falcon 9</Text>
        </Tag>
    )
};

export const CounterStory: TagStory = {
    render: () => (
        <Tag>
            <Text>Falcon 9</Text>
            <Counter variant="divider">6</Counter>
        </Tag>
    )
};

export const Removable: TagStory = {
    render: () => (
        <Tag onRemove={() => { }}>Falcon 9</Tag>
    )
};

export const Size: TagStory = {
    render: () => (
        <Inline alignY="center">
            <Tag size="sm">Falcon 9</Tag>
            <Tag>Falcon 9</Tag>
        </Inline>
    )
};

export const Fluid: TagStory = {
    render: () => (
        <Tag fluid>
            <SparklesIcon />
            <Text>Falcon 9</Text>
            <Counter>6</Counter>
        </Tag>
    )
};

export const Outline: TagStory = {
    render: () => (
        <Tag variant="outline">Falcon 9</Tag>
    )
};

export const Validation: TagStory = {
    render: () => (
        <Inline alignY="end">
            <Tag onRemove={() => { }} validationState="invalid">Falcon 9</Tag>
        </Inline>
    )
};

export const CustomColor: TagStory = {
    render: () => (
        <Tag
            style={{
                backgroundColor: "#FFF6E7",
                color: "var(--hop-sunken-treasure-800)",
                border: "1px solid #FEE9C3"
            }}
        >
            Falcon 9
        </Tag>
    )
};

export const TagListStory: TagStory = {
    render: () => (
        <TagList>
            <Item key="mercury">Mercury Program</Item>
            <Item key="gemini">Gemini Program</Item>
            <Item key="apollo">Apollo Program</Item>
            <Item key="artemis">Artemis Program</Item>
        </TagList>
    )
};

export const TagListClearable: TagStory = {
    render: () => (
        <TagList onClear={() => { }}>
            <Item key="mercury">Mercury Program</Item>
            <Item key="gemini">Gemini Program</Item>
            <Item key="apollo">Apollo Program</Item>
            <Item key="artemis">Artemis Program</Item>
        </TagList>
    )
};

export const TagListSize: TagStory = {
    render: () => (
        <Stack>
            <TagList size="sm">
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
                <Item key="artemis">Artemis Program</Item>
            </TagList>
            <TagList>
                <Item key="mercury">Mercury Program</Item>
                <Item key="gemini">Gemini Program</Item>
                <Item key="apollo">Apollo Program</Item>
                <Item key="artemis">Artemis Program</Item>
            </TagList>
        </Stack>
    )
};

export const TagListDynamicItems: TagStory = {
    render: () => (
        <TagList>
            {[
                { key: "mercury", value: "Mercury Program", icon: <SparklesIcon /> },
                { key: "gemini", value: "Gemini Program" },
                { key: "apollo", value: "Apollo Program", icon: <NotificationIcon /> },
                { key: "artemis", value: "Artemis Program", icon: <LightbulbIcon /> }
            ].map(x => (
                <Item key={x.key}>
                    {x.icon}
                    <Text>{x.value}</Text>
                </Item>
            ))}
        </TagList>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const TagsPicker: TagStory = {
    render: () => {
        const Tags = [
            {
                title: "1950",
                items: [
                    { key: "mercury", value: "Mercury Program", icon: <SparklesIcon /> }
                ]
            },
            {
                title: "1960",
                items: [
                    { key: "gemini", value: "Gemini Program", icon: <MailIcon /> }
                ]
            },
            {
                title: "1970",
                items: [
                    { key: "apollo", value: "Apollo Program", icon: <NotificationIcon /> },
                    { key: "skylab", value: "Skylab", icon: <ReportIcon /> },
                    { key: "soyuz", value: "Apollo–Soyuz Test Project", icon: <SettingsIcon /> }
                ]
            },
            {
                title: "2010",
                items: [
                    { key: "artemis", value: "Artemis Program", icon: <LightbulbIcon /> }
                ]
            }
        ];

        function TagsPickerFn() {
            const [selectedKeys, setSelectedKeys] = useState([]);

            const handleSelectionChange = useCallback((event, newKeys) => {
                setSelectedKeys(newKeys);
            }, [setSelectedKeys]);

            const handleRemoveTag = useCallback((event, key) => {
                setSelectedKeys(selectedKeys.filter(x => x !== key));
            }, [selectedKeys, setSelectedKeys]);

            const handleClearTags = useCallback(() => {
                setSelectedKeys([]);
            }, [setSelectedKeys]);

            const denormalizedTags = useMemo(() =>
                Tags.reduce((acc, x) => {
                    x.items.forEach(item => {
                        acc[item.key] = item;
                    });

                    return acc;
                }, {}), []);

            return (
                <Flex>
                    <MenuTrigger closeOnSelect={false}>
                        <Button marginRight={80} variant="secondary">
                            <Text>{selectedKeys.length > 0 ? "Programs" : "All programs"}</Text>
                            {selectedKeys.length > 0 && <Counter variant="divider">{selectedKeys.length}</Counter>}
                            <DisclosureArrow slot="end-icon" />
                        </Button>
                        <Menu
                            onSelectionChange={handleSelectionChange}
                            selectedKeys={selectedKeys}
                            selectionMode="multiple"
                        >
                            {Tags.map(x =>
                                <Section key={x.title} title={x.title}>
                                    {x.items.map(y =>
                                        <Item key={y.key}>
                                            {y.icon}
                                            <Text>{y.value}</Text>
                                        </Item>
                                    )}
                                </Section>
                            )}
                        </Menu>
                    </MenuTrigger>
                    <TagList
                        onClear={handleClearTags}
                        onRemove={handleRemoveTag}
                    >
                        {selectedKeys.map(x => {
                            const tag = denormalizedTags[x];

                            return (
                                <Item key={tag.key}>
                                    {tag.icon}
                                    <Text>{tag.value}</Text>
                                </Item>
                            );
                        })}
                    </TagList>
                </Flex>
            );
        }

        return (
            <TagsPickerFn />
        );
    }
};
