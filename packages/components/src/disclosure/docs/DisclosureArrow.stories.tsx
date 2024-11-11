import { Button } from "@components/button/index.ts";
import { Disclosure, DisclosureArrow } from "@components/disclosure/index.ts";
import { Div } from "@components/html/index.ts";
import { Text } from "@components/typography/index.ts";
import { TextLinkAsButton } from "@components/link/index.ts";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/DisclosureArrow",
    component: DisclosureArrow,
    id: "disclosure-arrow"
} as Meta<typeof DisclosureArrow>;

export default meta;

type DisclosureArrowStory = StoryObj<typeof meta>;

export const Default: DisclosureArrowStory = {
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
export const Controlled: DisclosureArrowStory = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        const handleClick = useCallback(() => {
            setIsOpen(x => !x);
            console.log(!isOpen);
        }, [isOpen, setIsOpen]);

        return (
            <TextLinkAsButton onClick={handleClick}>
                <Text>EVE Online</Text>
                <DisclosureArrow open={isOpen} />
            </TextLinkAsButton>
        );
    }
};
