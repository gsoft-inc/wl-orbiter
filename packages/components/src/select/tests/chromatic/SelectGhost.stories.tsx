import { NotificationIcon, TeamIcon } from "@hopper-ui/icons";
import { Inline, Stack } from "@components/layout";
import { Item, Section } from "@components/collection";
import { Select } from "@components/select";

import { Div } from "@components/html";
import { Text } from "@components/typography";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Select/ghost",
    component: Select,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Select>;

export default meta;

type SelectStory = StoryObj<typeof meta>;

export const Default: SelectStory = {
    name: "default",
    render: () => (
        <Stack>
            <Select placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select disabled placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Div>
                <Select fluid placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
            <Div width="10%">
                <Select fluid placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const OpenWithItemsOnly: SelectStory = {
    name: "open with items only",
    render: () => (
        <Select defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const OpenWithSections: SelectStory = {
    name: "open with sections",
    render: () => (
        <Select defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
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
        </Select>
    )
};

export const OpenWithSelectedItem: SelectStory = {
    name: "open with a selected item",
    render: () => (
        <Select defaultSelectedKey="mars" defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const SelectedKey: SelectStory = {
    name: "selected key",
    render: () => (
        <Stack>
            <Inline>
                <Select defaultSelectedKey="mars" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select selectedKey="mars" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
            <Select disabled defaultSelectedKey="mars" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Div>
                <Select fluid defaultSelectedKey="mars" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
            <Div width="10%">
                <Select fluid defaultSelectedKey="mars" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const SelectedItemStartIcon: SelectStory = {
    name: "selected item with start icon",
    render: () => (
        <Stack>
            <Select defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <NotificationIcon />
                    <Text>Earth</Text>
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select disabled defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <NotificationIcon />
                    <Text>Earth</Text>
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select fluid defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <NotificationIcon />
                    <Text>Earth</Text>
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Div width="10%">
                <Select fluid defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">
                        <NotificationIcon />
                        <Text>Earth</Text>
                    </Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const SelectedItemWithEndIcon: SelectStory = {
    name: "selected item with end icon",
    render: () => (
        <Stack>
            <Select defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <Text>Earth</Text>
                    <NotificationIcon slot="end-icon" />
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select disabled defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <Text>Earth</Text>
                    <NotificationIcon slot="end-icon" />
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select fluid defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">
                    <Text>Earth</Text>
                    <NotificationIcon slot="end-icon" />
                </Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Div width="10%">
                <Select fluid defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">
                        <Text>Earth</Text>
                        <NotificationIcon slot="end-icon" />
                    </Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const SelectedItemWithDescription: SelectStory = {
    name: "selected item with description",
    render: () => (
        <Select defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const SelectedItemWithOverflowValue: SelectStory = {
    name: "selected item with overflow value",
    render: () => (
        <Select defaultSelectedKey="earth" placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const TriggerIcon: SelectStory = {
    name: "trigger icon",
    render: () => (
        <Stack>
            <Select icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select disabled icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Select fluid icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
            <Div width="10%">
                <Select fluid icon={<TeamIcon />} placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Div>
        </Stack>
    )
};

export const Validation: SelectStory = {
    name: "validation",
    render: () => (
        <Stack>
            <Inline>
                <Select validationState="invalid" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select validationState="valid" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
            <Inline>
                <Select open defaultSelectedKey="mars" validationState="invalid" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item focus key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select open defaultSelectedKey="mars" validationState="valid" placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item focus key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
        </Stack>
    )
};

export const TriggerStates: SelectStory = {
    name: "trigger states",
    render: () => (
        <Stack>
            <Inline>
                <Select active placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select focus placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select hover placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select focus hover placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select readOnly placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
            <Inline>
                <Select disabled placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select disabled active placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select disabled focus placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select disabled hover placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select disabled focus hover placeholder="Select a planet" aria-label="Planets" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
            <Inline>
                <Select active placeholder="Select a planet" aria-label="Planets" validationState="invalid" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select focus placeholder="Select a planet" aria-label="Planets" validationState="invalid" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select hover placeholder="Select a planet" aria-label="Planets" validationState="invalid" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select focus hover placeholder="Select a planet" aria-label="Planets" validationState="invalid" variant="ghost">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
                <Select disabled placeholder="Select a planet" aria-label="Planets" validationState="invalid" variant="ghost">
                    <Item key="earth">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Select>
            </Inline>
        </Stack>
    )
};

export const Scrolling: SelectStory = {
    name: "scrolling",
    render: () => (
        <Select defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="ceres">Ceres</Item>
            <Item key="charon">Charon</Item>
            <Item key="earth">Earth</Item>
            <Item key="eris">Eris</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="haumea">Haumea</Item>
            <Item key="makemake">Makemake</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="pluto">Pluto</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
            <Item key="venus">Venus</Item>
        </Select>
    )
};

export const ScrollingRelectedItemOutsideScope: SelectStory = {
    name: "scrolling with selected item outside initial visible scope",
    render: () => (
        <Select defaultSelectedKey="venus" defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="ceres">Ceres</Item>
            <Item key="charon">Charon</Item>
            <Item key="earth">Earth</Item>
            <Item key="eris">Eris</Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="haumea">Haumea</Item>
            <Item key="makemake">Makemake</Item>
            <Item key="mars">Mars</Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="pluto">Pluto</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
            <Item key="venus">Venus</Item>
        </Select>
    )
};

export const CustomTriggerWidth: SelectStory = {
    name: "custom trigger width",
    render: () => (
        <Select width="20rem" defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const CustomMenuWidth: SelectStory = {
    name: "custom menu width",
    render: () => (
        <Select overlayProps={{ width: "20rem" }} defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const Direction: SelectStory = {
    name: "direction",
    render: () => (
        <Select direction={{ md: "top", lg: "bottom" }} defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const DirectionBottom: SelectStory = {
    name: "direction bottom",
    render: () => (
        <Select direction="bottom" defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const DirectionTop: SelectStory = {
    name: "direction top",
    render: () => (
        <Div paddingTop="100px">
            <Select direction="top" defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
        </Div>
    )
};

export const Align: SelectStory = {
    name: "align",
    render: () => (
        <Select align={{ md: "start", lg: "end" }} overlayProps={{ width: "20rem" }} defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const AlignStart: SelectStory = {
    name: "align start",
    render: () => (
        <Div paddingLeft="200px">
            <Select align="start" overlayProps={{ width: "20rem" }} defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
        </Div>
    )
};

export const AlignEnd: SelectStory = {
    name: "align end",
    render: () => (
        <Div paddingLeft="400px">
            <Select align="end" overlayProps={{ width: "20rem" }} defaultOpen placeholder="Select a planet" aria-label="Planets" variant="ghost">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Select>
        </Div>
    )
};

export const AsDiv: SelectStory = {
    name: "as div",
    render: () => (
        <Select as="div" tabIndex={0} placeholder="Select a planet" aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};

export const WithoutPlaceholder: SelectStory = {
    name: "without placeholder",
    render: () => (
        <Select aria-label="Planets" variant="ghost">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Select>
    )
};
