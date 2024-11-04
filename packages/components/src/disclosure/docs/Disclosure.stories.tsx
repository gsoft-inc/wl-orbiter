import { Button } from "@components/button";
import { Disclosure, DisclosureArrow, useDisclosureContext } from "@components/disclosure";
import { Div } from "@components/html";
import { Text } from "@components/typography";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Disclosure",
    component: Disclosure,
    id: "disclosure"
} as Meta<typeof Disclosure>;

export default meta;

type DisclosureStory = StoryObj<typeof meta>;

export const Default: DisclosureStory = {
    render: () => (
        <Disclosure>
            <Button variant="secondary">EVE Online</Button>
            <Div>Eve Online is a space-based, persistent world massively multiplayer online role-playing game (MMORPG) developed and published by CCP Games. Players of Eve Online can participate in a number of in-game professions and activities, including mining, piracy, manufacturing, trading, exploration, and combat (both player versus environment and player versus player). The game contains a total of 7,800 star systems that can be visited by players.</Div>
        </Disclosure>
    )
};

export const Context: DisclosureStory = {
    render: () => {
        function HighlightedTrigger({ children, ...rest }) {
            const { isOpen } = useDisclosureContext();

            return (
                <Button
                    {...rest}
                    variant={isOpen ? "primary" : "secondary"}
                >
                    {children}
                </Button>
            );
        }

        return (
            <Disclosure>
                <HighlightedTrigger>EVE Online</HighlightedTrigger>
                <Div>
                    Eve Online is a space-based, persistent world massively multiplayer online role-playing game (MMORPG) developed and published by CCP Games.
                    Players of Eve Online can participate in a number of in-game professions and activities, including mining, piracy, manufacturing, trading,
                    exploration, and combat (both player versus environment and player versus player). The game contains a total of 7,800 star systems that can be visited by players.
                </Div>
            </Disclosure>
        );
    }
};

export const DisclosureArrowStory: DisclosureStory = {
    render: () => (
        <Disclosure>
            <Button variant="secondary">
                <Text>EVE Online</Text>
                <DisclosureArrow slot="end-icon" />
            </Button>
            <Div>Eve Online is a space-based, persistent world massively multiplayer online role-playing game (MMORPG) developed and published by CCP Games. Players of Eve Online can participate in a number of in-game professions and activities, including mining, piracy, manufacturing, trading, exploration, and combat (both player versus environment and player versus player). The game contains a total of 7,800 star systems that can be visited by players.</Div>
        </Disclosure>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: DisclosureStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);

        return (
            <Disclosure
                onOpenChange={handleOpenChange}
                open={isOpen}
            >
                <TextLinkAsButton>
                    <Text>EVE Online</Text>
                    <AngleDownIcon transform={`rotate(${isOpen ? 0 : 180}deg)`} />
                </TextLinkAsButton>
                <Div>
                    Eve Online is a space-based, persistent world massively multiplayer online role-playing game (MMORPG) developed and published by CCP Games.
                    Players of Eve Online can participate in a number of in-game professions and activities, including mining, piracy, manufacturing, trading, exploration,
                    and combat (both player versus environment and player versus player). The game contains a total of 7,800 star systems that can be visited by players.
                </Div>
            </Disclosure>
        );
    }
};
