import { Tabs, useTabsContext } from "@components/tabs";
import { Item, Content, Header } from "@components/placeholders";
import { Div } from "@components/html";
import { Lozenge } from "@components/lozenge";
import { SparklesIcon } from "@hopper-ui/icons";
import { isNil } from "@components/shared";
import { Text } from "@components/typography";
import { useCallback, useEffect, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Tabs",
    component: Tabs,
    id: "tabs"
} as Meta<typeof Tabs>;

export default meta;

type TabStory = StoryObj<typeof meta>;

export const Default: TabStory = {
    render: () => (
        <Tabs aria-label="Planets">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Icon: TabStory = {
    render: () => (
        <Tabs aria-label="Planets">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>
                    <SparklesIcon />
                    <Text>Jupiter</Text>
                </Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const LozengeStory: TabStory = {
    render: () => (
        <Tabs aria-label="Planets">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>
                    <Text>Jupiter</Text>
                    <Lozenge>New</Lozenge>
                </Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const DynamicTabs: TabStory = {
    render: () => (
        <Tabs aria-label="Planets">
            {[
                { id: "mars", header: "Mars", content: "Mars is the fourth planet from the Sun and the second-smallest planet." },
                { id: "jupiter", header: "Jupiter", content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System." },
                { id: "venus", header: "Venus", content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty." }
            ].map(({ id, header, content }) => (
                <Item key={id}>
                    <Header>{header}</Header>
                    <Content>{content}</Content>
                </Item>
            ))}
        </Tabs>
    )
};

export const Manual: TabStory = {
    render: () => (
        <Tabs aria-label="Planets" manual>
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Orientation: TabStory = {
    render: () => (
        <Tabs aria-label="Planets" orientation="vertical">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const InCard: TabStory = {
    render: () => (
        <Tabs aria-label="Planets" variant="in-card">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Heading: TabStory = {
    render: () => (
        <Tabs aria-label="Planets" variant="heading">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Fluid: TabStory = {
    render: () => (
        <Tabs aria-label="Planets" fluid>
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
            <Item key="earth">
                <Header>Earth</Header>
                <Content>Earth is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

export const Collapsible: TabStory = {
    render: () => (
        <Div width={{ base: "100%", sm: "700px" }}>
            <Tabs aria-label="Planets" fluid>
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is more than twice as massive as the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.</Content>
                </Item>
                <Item key="earth">
                    <Header>
                        <Text>Earth</Text>
                        <Lozenge>Home</Lozenge>
                    </Header>
                    <Content>Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.</Content>
                </Item>
                <Item key="saturn">
                    <Header>Saturn</Header>
                    <Content>Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.</Content>
                </Item>
                <Item key="uranus">
                    <Header>Uranus</Header>
                    <Content>Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbiter. This unique tilt makes Uranus appear to spin on its side.</Content>
                </Item>
                <Item key="neptune">
                    <Header>Neptune</Header>
                    <Content>Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.</Content>
                </Item>
                <Item key="pluto">
                    <Header>Pluto</Header>
                    <Content>Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.</Content>
                </Item>
                <Item key="ceres">
                    <Header>Ceres</Header>
                    <Content>Ceres makes up almost a third of the asteroid belt's total mass, but it is still far smaller than Earth's Moon. Ceres is heavily cratered with large amounts of ice underground.</Content>
                </Item>
                <Item key="makemake">
                    <Header>Makemake</Header>
                    <Content>It takes 310 Earth years for Makemake to complete one orbiter around our Sun.</Content>
                </Item>
                <Item key="haumea">
                    <Header>Haumea</Header>
                    <Content>Haumea is one of the fastest rotating large objects in our solar system.</Content>
                </Item>
                <Item key="eris">
                    <Header>Eris</Header>
                    <Content>Eris is one of the largest known dwarf planets in our solar system. It's about the same size as Pluto, but it is three times farther from the Sun. One orbiter takes about 557 years.</Content>
                </Item>
                <Item key="planet-x">
                    <Header>Planet X</Header>
                    <Content>Caltech researchers have found evidence suggesting there may be a "Planet X" deep in the solar system.</Content>
                </Item>
            </Tabs>
        </Div>
    )
};

export const DisabledTab: TabStory = {
    render: () => (
        <Tabs aria-label="Planets">
            <Item key="mars">
                <Header>Mars</Header>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item disabled key="jupiter">
                <Header>Jupiter</Header>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <Header>Venus</Header>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Tabs>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: TabStory = {
    render: () => {
        const [selectedKey, setSelectedKey] = useState("mars");

        const handleSelectionChange = useCallback((event, newKey) => {
            setSelectedKey(newKey);
            console.log(newKey);
        }, [setSelectedKey]);

        return (
            <Tabs
                aria-label="Planets"
                onSelectionChange={handleSelectionChange}
                selectedKey={selectedKey}
            >
                <Item key="mars">
                    <Header>Mars</Header>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item key="jupiter">
                    <Header>Jupiter</Header>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item key="venus">
                    <Header>Venus</Header>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Tabs>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Async: TabStory = {
    render: () => {
        function AsyncText({ id, children, ...rest }) {
            const [text, setText] = useState(null);

            const { selectedKey } = useTabsContext();

            useEffect(() => {
                let timeoutId;

                if (id === selectedKey) {
                    timeoutId = setTimeout(() => {
                        setText(children);
                    }, 2000);
                } else {
                    setText(null);
                }

                return () => {
                    if (!isNil(timeoutId)) {
                        clearTimeout(timeoutId);
                    }
                };
            }, [id, selectedKey, children]);

            return (
                <Div {...rest}>
                    {isNil(text) ? (
                        <Div padding={10} position="relative">
                            <Div className="o-ui-sb-loading"></Div>
                        </Div>
                    ) : text}
                </Div>
            );
        }

        return (
            <Tabs aria-label="Planets" manual>
                {[
                    { id: "mars", header: "Mars", content: "Mars is the fourth planet from the Sun and the second-smallest planet." },
                    { id: "jupiter", header: "Jupiter", content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System." },
                    { id: "venus", header: "Venus", content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty." }
                ]
                    .map(({ id, header, content }) =>
                        <Item key={id}>
                            <Header>{header}</Header>
                            <Content>
                                <AsyncText id={id}>
                                    {content}
                                </AsyncText>
                            </Content>
                        </Item>
                    )}
            </Tabs>
        );
    }
};
