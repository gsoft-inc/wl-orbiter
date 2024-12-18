import { SparklesIcon, DismissIcon } from "@hopper-ui/icons";
import { Content, Header } from "@components/placeholders/index.ts";
import { Tab, TabPanel, Tabs, useTabsContext, type TabPanelProps, type TabProps } from "@components/tabs/index.ts";

import { Div } from "@components/html/index.ts";
import { Item } from "@components/collection/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Text } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Tabs-hopper",
    component: Tabs,
    parameter: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Tabs>;

export default meta;

type TabsStory = StoryObj<typeof meta>;


interface ActiveHeaderProps extends Omit<TabProps, "tab" | "onSelect"> {
    tab?: TabProps["tab"];
    onSelect?: TabProps["onSelect"];
}

// set tab optional since its provided automatically by the parent component, and client code do not need to provide it
const ActiveHeader = ({ tab, children, onSelect, ...rest }: ActiveHeaderProps) => {
    const { selectedKey } = useTabsContext();
    const { key } = tab;

    return (
        <Tab
            onSelect={onSelect}
            {...rest}
            tab={tab}
        >
            {key === selectedKey ? <SparklesIcon /> : <DismissIcon />}
            <Text>{children}</Text>
        </Tab>
    );
};


// set tab optional since its provided automatically by the parent component, and client code do not need to provide it
const ColoredHeader = ({ children, tab, onSelect, ...rest }: ActiveHeaderProps) => {
    return (
        <Tab onSelect={onSelect} tab={tab} {...rest} >
            <Text UNSAFE_color="red">{children}</Text>
        </Tab>
    );
};

interface ColoredContentProps extends Omit<TabPanelProps, "panel"> {
    panel?: TabPanelProps["panel"];
}

// set tab optional since its provided automatically by the parent component, and client code do not need to provide it
const ColoredContent = ({ panel, children, ...rest }: ColoredContentProps) => {
    const { selectedKey } = useTabsContext();
    const { key } = panel;

    return (
        <TabPanel
            {...rest}
            panel={panel}
            backgroundColor={key === selectedKey ? "red" : undefined}
        >
            {children}
        </TabPanel>
    );
};

export const DynamicTabs: TabsStory = {
    name: "dynamic tabs",
    render: () => (
        <Tabs aria-label="Planets">
            {["1", "2", "3"].map(x => (
                <Item key={x}>
                    <Header>{`Header ${x}`}</Header>
                    <Content>{`Content ${x}`}</Content>
                </Item>
            ))}
        </Tabs>
    )
};

export const CustomComponents: TabsStory = {
    name: "custom components",
    render: () => (
        <Stack>
            <Tabs aria-label="Planets">
                <Item>
                    <ActiveHeader>Mars</ActiveHeader>
                    <ColoredContent>Mars is the fourth planet from the Sun and the second-smallest planet.</ColoredContent>
                </Item>
                <Item>
                    <ActiveHeader>Jupiter</ActiveHeader>
                    <ColoredContent>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</ColoredContent>
                </Item>
                <Item>
                    <ActiveHeader>Venus</ActiveHeader>
                    <ColoredContent>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</ColoredContent>
                </Item>
            </Tabs>
            <Tabs aria-label="Planets">
                <Item>
                    <ColoredHeader>Mars</ColoredHeader>
                    <ColoredContent>Mars is the fourth planet from the Sun and the second-smallest planet.</ColoredContent>
                </Item>
                <Item>
                    <ColoredHeader>Jupiter</ColoredHeader>
                    <ColoredContent>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</ColoredContent>
                </Item>
                <Item>
                    <ColoredHeader>Venus</ColoredHeader>
                    <ColoredContent>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</ColoredContent>
                </Item>
            </Tabs>
        </Stack>
    )
};

export const ConditonnalRendering: TabsStory = {
    name: "conditional rendering",
    render: () => (
        <Tabs aria-label="Planets">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            {
                false && <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
            }
        </Tabs >
    )
};

export const Zoom: TabsStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Tabs aria-label="Planets">
                    <Item>
                        <Header>Mars</Header>
                        <Content>
                            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                            being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                            to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                            [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                        </Content>
                    </Item>
                    <Item>
                        <Header>Jupiter</Header>
                        <Content>
                            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                            times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                            been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                            bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                        </Content>
                    </Item>
                    <Item>
                        <Header>Venus</Header>
                        <Content>
                            Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
                        </Content>
                    </Item>
                </Tabs>
            </Div>
            <Div className="zoom-out">
                <Tabs aria-label="Planets">
                    <Item>
                        <Header>Mars</Header>
                        <Content>
                            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System (in adherence with the IAU's controversial 2006 definition of planet),
                            being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".[17][18] The latter refers
                            to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye.
                            [19] Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                        </Content>
                    </Item>
                    <Item>
                        <Header>Jupiter</Header>
                        <Content>
                            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half
                            times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has
                            been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be
                            bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.
                        </Content>
                    </Item>
                    <Item>
                        <Header>Venus</Header>
                        <Content>
                            Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.
                        </Content>
                    </Item>
                </Tabs>
            </Div>
        </Stack>
    )
};

export const Styling: TabsStory = {
    name: "styling",
    render: () => (
        <Stack>
            <Inline>
                <Tabs border="warning" aria-label="Planets">
                    <Item>
                        <Header className="border-red">Mars</Header>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
                <Tabs className="border-red" aria-label="Planets">
                    <Item>
                        <Header className="border-red">Mars</Header>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
                <Tabs style={{ border: "1px solid red" }} aria-label="Planets">
                    <Item>
                        <Header style={{ border: "1px solid red" }}>Mars</Header>
                        <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
            </Inline>
            <Inline>
                <Tabs aria-label="Planets">
                    <Item>
                        <Header>Mars</Header>
                        <Content border="warning">Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
                <Tabs aria-label="Planets">
                    <Item>
                        <Header>Mars</Header>
                        <Content className="border-red">Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
                <Tabs aria-label="Planets">
                    <Item>
                        <Header>Mars</Header>
                        <Content style={{ border: "1px solid red" }}>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                    </Item>
                </Tabs>
            </Inline>
        </Stack>
    )
};
