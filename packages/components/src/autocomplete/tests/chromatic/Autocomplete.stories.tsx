import { Autocomplete } from "@components/autocomplete/index.ts";
import { Div } from "@components/html/index.ts";
import { TeamIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout/index.ts";
import { Item } from "@components/collection/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Autocomplete",
    component: Autocomplete,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Autocomplete>;

export default meta;

type AutocompleteStory = StoryObj<typeof meta>;

export const Default: AutocompleteStory = {
    name: "default",
    render: () => (
        <Stack>
            <Autocomplete aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete loading aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete disabled aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const Placeholder: AutocompleteStory = {
    name: "placeholder",
    render: () => (
        <Stack>
            <Autocomplete placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete loading placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Autocomplete disabled placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mercury">Mercury</Item>
                    <Item key="neptune">Neptune</Item>
                    <Item key="uranus">Uranus</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const DefaultValue: AutocompleteStory = {
    name: "default value",
    render: () => (
        <Stack>
            <Autocomplete defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete loading defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete disabled defaultValue="Mars" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Inline>
                <Autocomplete defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete value="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Div>
                <Autocomplete fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div>
                <Autocomplete loading fluid defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const DefaultValueNotMatching: AutocompleteStory = {
    name: "default value not matching any item",
    render: () => (
        <Autocomplete defaultValue="Toto" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const Size: AutocompleteStory = {
    name: "size",
    render: () => (
        <Autocomplete size="sm" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const TriggerIcon: AutocompleteStory = {
    name: "trigger icon",
    render: () => (
        <Stack>
            <Autocomplete icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete defaultValue="Mars" icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete disabled icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Div>
                <Autocomplete fluid icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const CanClearValue: AutocompleteStory = {
    name: "can clear value",
    render: () => (
        <Autocomplete defaultValue="Mars" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const Validation: AutocompleteStory = {
    name: "validation",
    render: () => (
        <Inline>
            <Autocomplete validationState="invalid" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
            <Autocomplete validationState="valid" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Autocomplete>
        </Inline>
    )
};

export const OverflowingValue: AutocompleteStory = {
    name: "overflowing value",
    render: () => (
        <Autocomplete defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry." placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const TriggerStates: AutocompleteStory = {
    name: "trigger states",
    render: () => (
        <Stack>
            <Inline>
                <Autocomplete active placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete focus placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete readOnly placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete disabled placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled active placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled focus placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Inline>
                <Autocomplete disabled hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete disabled focus hover placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
        </Stack>
    )
};

export const NoResults: AutocompleteStory = {
    name: "no results",
    render: () => (
        <Stack gap={800}>
            <Inline>
                <Autocomplete defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete defaultOpen noResultsMessage="Custom no results message" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
                <Autocomplete defaultOpen noResultsMessage="Custom no results message, this is as custom as can be" placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Inline>
            <Div>
                <Autocomplete fluid defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
            <Div width="10%">
                <Autocomplete fluid defaultOpen placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const CustomTriggerWidth: AutocompleteStory = {
    name: "custom trigger width",
    render: () => (
        <Autocomplete width="20rem" placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};


export const CustomMenuWidth: AutocompleteStory = {
    name: "custom menu width",
    render: () => (
        <Autocomplete overlayProps={{ width: "500px" }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};


export const DirectionBottom: AutocompleteStory = {
    name: "direction bottom",
    render: () => (
        <Autocomplete direction="bottom" defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const DirectionTop: AutocompleteStory = {
    name: "direction top",
    render: () => (
        <Autocomplete direction="top" defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const AlignStart: AutocompleteStory = {
    name: "align start",
    decorators: [Story => <div style={{ paddingLeft: "200px" }}><Story /></div>],
    render: () => (
        <Autocomplete align="start" overlayProps={{ style: { width: "500px" } }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const AlignEnd: AutocompleteStory = {
    name: "align end",
    decorators: [Story => <div style={{ paddingLeft: "400px" }}><Story /></div>],
    render: () => (
        <Autocomplete align="end" overlayProps={{ style: { width: "500px" } }} defaultOpen placeholder="Select a planet" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const ConditionnalRendering: AutocompleteStory = {
    name: "conditional rendering",
    render: () => (
        <Autocomplete placeholder="Select a planet" aria-label="Planets">
            {false && <Item key="earth">Earth</Item>}
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Autocomplete>
    )
};

export const Zoom: AutocompleteStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Autocomplete placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Autocomplete>
            </Div>
            <Div className="zoom-out">
                <Autocomplete placeholder="Select a planet" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Autocomplete>
            </Div>
        </Stack>
    )
};

export const Styling: AutocompleteStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Autocomplete border="warning" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
            <Autocomplete className="border-red" placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
            <Autocomplete style={{ border: "1px solid red" }} placeholder="Select a planet" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Autocomplete>
        </Inline>
    )
};
