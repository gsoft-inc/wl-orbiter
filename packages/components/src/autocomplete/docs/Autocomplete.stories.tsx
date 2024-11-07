/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "@components/autocomplete/index.ts";
import { Avatar } from "@components/avatar/index.ts";
import { IconList } from "@components/icons/index.ts";
import { CatIcon, RocketIcon, SearchIcon, SparklesIcon } from "@hopper-ui/icons";
import { Item, Section, useAsyncSearch } from "@components/collection/index.ts";
import { Text } from "@components/typography/index.ts";
import { useCallback, useMemo, useState } from "react";
import { isNil } from "@components/shared/index.ts";
import { Inline } from "@components/layout/index.ts";

const meta = {
    title: "Components/Autocomplete",
    component: Autocomplete,
    id: "autocomplete"
} as Meta<typeof Autocomplete>;

export default meta;

type Story = StoryObj<typeof Autocomplete>;

export const Default: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Autocomplete>)
};

export const Sections: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Section title="Visited">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Section>
            <Section title="Not Visited">
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Section>
        </Autocomplete>
    )
};

export const ItemIcon: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">
                <SparklesIcon />
                <Text>Earth</Text>
            </Item>
            <Item key="jupiter">
                <SparklesIcon />
                <Text>Jupiter</Text>
            </Item>
            <Item key="mars">
                <SparklesIcon />
                <Text>Mars</Text>
            </Item>
        </Autocomplete>
    )
};

export const ItemEndIcon: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <IconList slot="end-icon">
                    <RocketIcon />
                    <CatIcon />
                    <SparklesIcon />
                </IconList>
            </Item>
            <Item key="jupiter">
                <Text>Jupiter</Text>
                <SparklesIcon slot="end-icon" />
            </Item>
            <Item key="mars">
                <Text>Mars</Text>
                <IconList slot="end-icon">
                    <RocketIcon />
                    <CatIcon />
                    <SparklesIcon />
                </IconList>
            </Item>
        </Autocomplete>
    )
};

export const ItemDescription: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Autocomplete>
    )
};

export const ItemDescriptionIcon: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">
                <SparklesIcon />
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <SparklesIcon />
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <SparklesIcon />
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Autocomplete>
    )
};

export const ItemDescriptionAvatar: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            <Item key="earth">
                <Avatar name="Earth" />
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">
                <Avatar name="Jupiter" />
                <Text>Jupiter</Text>
                <Text slot="description">The fourth-brightest object in the sky</Text>
            </Item>
            <Item key="mars">
                <Avatar name="Mars" />
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
        </Autocomplete>
    )
};

export const TriggerIcon: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" icon={<SearchIcon />} placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Autocomplete>
    )
};

export const Size: Story = {
    render: () => (
        <Inline alignY="center">
            <Autocomplete aria-label="Planets" placeholder="Planets" size="sm">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete aria-label="Planets" placeholder="Planets" size="md">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
        </Inline>
    )
};

export const Disabled: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" disabled placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Autocomplete>
    )
};

export const Readonly: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets" readOnly>
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Autocomplete>
    )
};

export const Fluid: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" fluid placeholder="Planets">
            <Item key="earth">Earth</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Autocomplete>
    )
};

export const Validation: Story = {
    render: () => {
        const [isValid, setIsValid] = useState(true);

        const handleSelectionChange = useCallback((event, selection) => {
            setIsValid(!isNil(selection) && selection.key === "earth");

            console.log(selection);
        }, [setIsValid]);

        return (
            <Autocomplete
                aria-label="Planets"
                onSelectionChange={handleSelectionChange}
                placeholder="Planets"
                validationState={isValid ? "valid" : "invalid"}
            >
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
        );
    }
};

export const Form: Story = {
    render: () => (
        <form>
            <Autocomplete aria-label="Planets" name="planet" placeholder="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
        </form>
    )
};

export const DynamicItems: Story = {
    render: () => (
        <Autocomplete aria-label="Planets" placeholder="Planets">
            {["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus"].map(x => (
                <Item key={x.toLowerCase()}>{x}</Item>
            ))}
        </Autocomplete>
    )
};

export const RemoteItems: Story = {
    render: () => {
        const fetcher = useAsyncSearch<{ key: string; value: string }>(async (query, signal) => {
            const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries?namePrefix=${query}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "8aa06f2e50msh9ff37516b3c0282p1e8624jsn81c867aa0d74",
                    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
                },
                signal
            });

            const json = await response.json();

            return json.data.map(x => ({
                key: x.code,
                value: x.name
            }));
        });

        return (
            <Autocomplete
                aria-label="Countries"
                loading={fetcher.isLoading}
                onSearch={fetcher.search}
                placeholder="Select a country"
            >
                {fetcher.items.map((x => (
                    <Item key={x.key}>{x.value}</Item>
                )))}
            </Autocomplete>
        );
    }
};

export const CustomSearch: Story = {
    render: () => {
        const planets = useMemo(() => ([
            { key: "earth", value: "Earth", canShow: true },
            { key: "jupiter", value: "Jupiter", canShow: true },
            { key: "mars", value: "Mars", canShow: true },
            { key: "mercury", value: "Mercury", canShow: false },
            { key: "neptune", value: "Neptune", canShow: false },
            { key: "saturn", value: "Saturn", canShow: false },
            { key: "uranus", value: "Uranus", canShow: false }
        ]), []);

        const [selectedPlanets, setSelectedPlanets] = useState(planets);

        const handleSearch = useCallback((event, query) => {
            setSelectedPlanets(planets.filter(x => x.value.toLowerCase().startsWith(query.toLowerCase()) && x.canShow));
        }, [setSelectedPlanets, planets]);

        return (
            <Autocomplete
                aria-label="Planets"
                onSearch={handleSearch}
                placeholder="Planets"
            >
                {selectedPlanets.map((x => (
                    <Item key={x.key}>{x.value}</Item>
                )))}
            </Autocomplete>
        );
    }
};

export const Controlled: Story = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);
        const [value, setValue] = useState("Mars");

        const handleOpenChange = useCallback((event, newValue) => {
            setIsOpen(newValue);
            console.log(newValue);
        }, [setIsOpen]);

        const handleSelectionChange = useCallback((event, selection) => {
            setValue(!isNil(selection) ? selection.value : null);
            console.log(selection);
        }, [setValue]);

        return (
            <Autocomplete
                aria-label="Planets"
                onOpenChange={handleOpenChange}
                onSelectionChange={handleSelectionChange}
                open={isOpen}
                placeholder="Planets"
                value={value}
            >
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
        );
    }
};
