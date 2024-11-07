import { Illustration } from "@components/illustration/index.ts";
import { Image } from "@components/image/index.ts";
import { Inline } from "@components/layout/index.ts";
import { Tile, TileGroup, TileLink } from "@components/tile/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Div } from "@components/html/index.ts";
import { Heading } from "@components/typography/index.ts";
import { Planet, SpacePortraitHorizontal, SpacePortrait } from "./assets";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Tile",
    component: Tile,
    id: "tile"
} as Meta<typeof Tile>;

export default meta;

type TileStory = StoryObj<typeof meta>;

export const Default: TileStory = {
    render: () => (
        <Div width="20rem">
            <Tile>
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </Tile>
        </Div>
    )
};

export const ImageStory: TileStory = {
    render: () => (
        <Div width="20rem">
            <Tile>
                <Image alt="Planet over another planet" src={SpacePortraitHorizontal} />
                <Heading>Buy a ticket</Heading>
                <Content>Tickets are not refundable and not transferable. A confirmation email will be sent within the next few minutes.</Content>
            </Tile>
        </Div>
    )
};

export const IllustrationStory: TileStory = {
    render: () => (
        <Div width="20rem">
            <Tile>
                <Illustration backgroundColor="primary-weak">
                    <Image alt="Planet" src={Planet} width="100px" />
                </Illustration>
                <Heading>Buy a ticket</Heading>
                <Content>Tickets are not refundable and not transferable. A confirmation email will be sent within the next few minutes</Content>
            </Tile>
        </Div>
    )
};

export const Checked: TileStory = {
    render: () => (
        <Div width="20rem">
            <Tile defaultChecked>
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </Tile>
        </Div>
    )
};

export const Disabled: TileStory = {
    render: () => (
        <Div width="20rem">
            <Tile disabled>
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </Tile>

        </Div>
    )
};

export const Orientation: TileStory = {
    render: () => (
        <Inline wrap={{ base: true, md: false }}>
            <Tile orientation="horizontal">
                <Image alt="Space Portrait"
                    src={SpacePortrait}
                />
                <Heading>Buy a ticket</Heading>
                <Content>Tickets are not refundable and not transferable. A confirmation email will be sent within the next few minutes.</Content>
            </Tile>
            <Tile orientation="horizontal">
                <Illustration>
                    <Image alt="Planet" src={Planet} width="100px" />
                </Illustration>
                <Heading>Buy a ticket</Heading>
                <Content>Tickets are not refundable and not transferable. A confirmation email will be sent within the next few minutes.</Content>
            </Tile>
        </Inline>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: TileStory = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        const handleChange = useCallback(() => {
            setIsChecked(x => !x);
            console.log(!isChecked);
        }, [isChecked, setIsChecked]);

        return (
            <Div width="20rem">
                <Tile
                    checked={isChecked}
                    onChange={handleChange}
                >
                    <Heading>Buy a ticket</Heading>
                    <Content>Purchase a ticket for any of our space travel adventure.</Content>
                </Tile>
            </Div>
        );
    }
};

export const TileLinkStory: TileStory = {
    render: () => (
        <Div width="20rem">
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </TileLink>
        </Div>
    )
};

export const TileGroupNoSelection: TileStory = {
    render: () => (
        <Div width="20rem">
            <TileGroup>
                <TileLink href="https://www.virgingalactic.com">
                    <Heading>Buy a ticket</Heading>
                    <Content>Purchase a ticket for any of our space travel adventure.</Content>
                </TileLink>
                <TileLink href="https://www.virgingalactic.com">
                    <Heading>Refund a ticket</Heading>
                    <Content>Get a refund for any space travel adventure ticket.</Content>
                </TileLink>
                <TileLink href="https://www.virgingalactic.com">
                    <Heading>Manage Account</Heading>
                    <Content>Update your address or any other information related to your account.</Content>
                </TileLink>
            </TileGroup>
        </Div>
    )
};

export const TileGroupSingleSelection: TileStory = {
    render: () => (
        <Div width="20rem">
            <TileGroup selectionMode="single">
                <Tile value="buy">
                    <Heading>Buy a ticket</Heading>
                    <Content>Purchase a ticket for any of our space travel adventure.</Content>
                </Tile>
                <Tile value="refund">
                    <Heading>Refund a ticket</Heading>
                    <Content>Get a refund for any space travel adventure ticket.</Content>
                </Tile>
                <Tile value="manage-account">
                    <Heading>Manage Account</Heading>
                    <Content>Update your address or any other information related to your account.</Content>
                </Tile>
            </TileGroup>
        </Div>
    )
};

export const TileGroupMultipleSelection: TileStory = {
    render: () => (
        <Div width="20rem">
            <TileGroup selectionMode="multiple">
                <Tile value="buy">
                    <Heading>Buy a ticket</Heading>
                    <Content>Purchase a ticket for any of our space travel adventure.</Content>
                </Tile>
                <Tile value="refund">
                    <Heading>Refund a ticket</Heading>
                    <Content>Get a refund for any space travel adventure ticket.</Content>
                </Tile>
                <Tile value="manage-account">
                    <Heading>Manage Account</Heading>
                    <Content>Update your address or any other information related to your account.</Content>
                </Tile>
            </TileGroup>
        </Div>
    )
};

export const TileGroupRowSize: TileStory = {
    render: () => (
        <TileGroup rowSize={{
            base: 1,
            md: 2,
            lg: 3
        }}
        >
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </TileLink>
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Refund a ticket</Heading>
                <Content>Get a refund for any space travel adventure ticket.</Content>
            </TileLink>
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Manage Account</Heading>
                <Content>Update your address or any other information related to your account.</Content>
            </TileLink>
        </TileGroup>
    )
};

export const TileGroupWrap: TileStory = {
    render: () => (
        <TileGroup rowSize={2}>
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Buy a ticket</Heading>
                <Content>Purchase a ticket for any of our space travel adventure.</Content>
            </TileLink>
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Refund a ticket</Heading>
                <Content>Get a refund for any space travel adventure ticket.</Content>
            </TileLink>
            <TileLink href="https://www.virgingalactic.com">
                <Heading>Manage Account</Heading>
                <Content>Update your address or any other information related to your account.</Content>
            </TileLink>
        </TileGroup>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const TileGroupControlled: TileStory = {
    render: () => {
        const [value, setValue] = useState([]);

        const handleChange = useCallback((event, newValue) => {
            setValue(newValue);
            console.log(newValue);
        }, [setValue]);

        return (
            <TileGroup
                onChange={handleChange}
                rowSize={{
                    base: 1,
                    md: 2,
                    lg: 3
                }}
                selectionMode="multiple"
                value={value}
            >
                <Tile value="buy">
                    <Heading>Buy a ticket</Heading>
                    <Content>Purchase a ticket for any of our space travel adventure.</Content>
                </Tile>
                <Tile value="refund">
                    <Heading>Refund a ticket</Heading>
                    <Content>Get a refund for any space travel adventure ticket.</Content>
                </Tile>
                <Tile value="manage-account">
                    <Heading>Manage Account</Heading>
                    <Content>Update your address or any other information related to your account.</Content>
                </Tile>
            </TileGroup>
        );
    }
};
