import { NotificationIcon } from "@hopper-ui/icons";
import { Content, Header } from "@components/placeholders";
import { Inline } from "@components/layout";
import { Tabs } from "@components/tabs";

import { Item } from "@components/collection";
import { Text, Tag, TagList, TagGroup } from "@hopper-ui/components";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

export default {
    title: "Chromatic/Tabs-hopper/vertical",
    component: Tabs,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as ComponentMeta<typeof Tabs>;

type TabsStory = ComponentStoryObj<typeof Tabs>;

export const Default: TabsStory = {
    storyName: "default",
    render: () => (
        <Tabs orientation="vertical" aria-label="Planets">
            <Item>
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item>
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Fluid: TabsStory = {
    storyName: "fluid",
    render: () => (
        <Tabs orientation="vertical" fluid height="12rem" aria-label="Planets">
            <Item>
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item>
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const TabWithIcon: TabsStory = {
    storyName: "tab with icon",
    render: () => (
        <Tabs orientation="vertical" aria-label="Planets">
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const TabWithLozenge: TabsStory = {
    storyName: "tab with lozenge",
    render: () => (
        <Tabs orientation="vertical" aria-label="Planets">
            <Item>
                <Header>
                    <Text>Mars</Text>
                    <TagGroup slot="lozenge" aria-label="New"><TagList><Tag>New</Tag></TagList></TagGroup>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Jupiter</Text>
                    <TagGroup slot="lozenge" aria-label="New"><TagList><Tag>New</Tag></TagList></TagGroup>
                </Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const InCard: TabsStory = {
    storyName: "in card",
    render: () => (
        <Tabs orientation="vertical" variant="in-card" aria-label="Planets">
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const Heading: TabsStory = {
    storyName: "heading",
    render: () => (
        <Tabs orientation="vertical" variant="heading" aria-label="Planets">
            <Item>
                <Header>
                    <NotificationIcon />
                    <Text>Mars</Text>
                </Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item>
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
        </Tabs>
    )
};

export const States: TabsStory = {
    storyName: "states",
    render: () => (
        <Inline>
            <Tabs orientation="vertical" aria-label="Planets">
                <Item selected>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
                <Item disabled>
                    <Header>Neptune</Header>
                    <Content>Neptune is the eighth and farthest-known Solar planet from the Sun.</Content>
                </Item>
            </Tabs>
            <Tabs orientation="vertical" fluid aria-label="Planets">
                <Item selected>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item selected hover>
                    <Header>Neptune</Header>
                    <Content>It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
                <Item active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
                <Item disabled>
                    <Header>Neptune</Header>
                    <Content>Neptune is the eighth and farthest-known Solar planet from the Sun.</Content>
                </Item>
            </Tabs>
            <Tabs orientation="vertical" aria-label="Planets">
                <Item disabled>
                    <Header>Uranus</Header>
                    <Content>Uranus is the seventh planet from the Sun.</Content>
                </Item>
                <Item disabled active>
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item disabled focus>
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item disabled hover>
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
                <Item disabled focus hover>
                    <Header>Saturn</Header>
                    <Content>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter.</Content>
                </Item>
            </Tabs>
        </Inline>
    )
};

