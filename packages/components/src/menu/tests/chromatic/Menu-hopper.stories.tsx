import { Div } from "@components/html/index.ts";
import { Divider } from "@components/divider/index.ts";
import { Inline, Stack } from "@components/layout/index.ts";
import { Avatar, IconList, Text } from "@hopper-ui/components";
import { LightbulbIcon, NotificationIcon } from "@hopper-ui/icons";
import { Item, Section, NodeType } from "@components/collection/index.ts";
import { Menu, MenuItem, MenuItemProps } from "@components/menu/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Menu-hopper",
    component: Menu,
    parameters: {
        chromatic: {
            delay: 100,
            chromaticPauseAnimationAtEnd: true
        }
    }
} as Meta<typeof Menu>;

export default meta;

type MenuStory = StoryObj<typeof meta>;

export const OnlyItems: MenuStory = {
    name: "only items",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Menu>
    )
};

export const GeneratedKeys: MenuStory = {
    name: "generated keys",
    render: () => (
        <Menu aria-label="Planets">
            <Item>Earth</Item>
            <Item>Mars</Item>
            <Item>Saturn</Item>
        </Menu>
    )
};

export const Sections: MenuStory = {
    name: "sections",
    render: () => (
        <Menu aria-label="Planets">
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
        </Menu>
    )
};

export const Dividers: MenuStory = {
    name: "dividers",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Divider />
            <Item key="saturn">Saturn</Item>
            <Item key="jupiter">Jupiter</Item>
            <Divider />
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="uranus">Uranus</Item>
        </Menu>
    )
};

export const MixedSectionsItemsAndDividers: MenuStory = {
    name: "mixed sections, items and dividers",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Divider />
            <Item key="saturn">Saturn</Item>
            <Section title="Not Visited">
                <Item key="jupiter">Jupiter</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="uranus">Uranus</Item>
            </Section>
        </Menu>
    )
};

export const SelectedKeys: MenuStory = {
    name: "selected keys",
    render: () => (
        <Inline>
            <Menu defaultSelectedKeys={["mars"]} selectionMode="single" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
            <Menu defaultSelectedKeys={["mars", "neptune"]} selectionMode="multiple" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
        </Inline>
    )
};

export const ItemWithStartIcon: MenuStory = {
    name: "item with start icon",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <NotificationIcon />
                <Text>Earth</Text>
            </Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">
                <IconList>
                    <LightbulbIcon />
                    <NotificationIcon />
                </IconList>
                <Text>Mars</Text>
            </Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Menu>
    )
};

export const ItemWithStartIconAndDescription: MenuStory = {
    name: "item with start icon and description",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <NotificationIcon />
                <Text>Earth</Text>
                <Text slot="description">Home Sweet Home</Text>
            </Item>
            <Item key="jupiter">
                <NotificationIcon />
                <Text>Jupiter</Text>
                <Text slot="description">Jupiter did it!</Text>
            </Item>
            <Item key="mars">
                <LightbulbIcon />
                <Text>Mars</Text>
                <Text slot="description">Elon and Grimes are coming.</Text>
            </Item>
        </Menu>
    )
};

export const ItemWithEndIcon: MenuStory = {
    name: "item with end icon",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <NotificationIcon slot="end-icon" />
            </Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">
                <Text>Mars</Text>
                <IconList slot="end-icon">
                    <LightbulbIcon />
                    <NotificationIcon />
                </IconList>
            </Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Menu>
    )
};

export const ItemWithAvatar: MenuStory = {
    name: "item with avatar",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <Avatar src="https://randomuser.me/api/portraits/men/10.jpg" name="Earth" />
                <Text>Earth</Text>
            </Item>
            <Item key="jupiter">
                <Avatar src="https://randomuser.me/api/portraits/men/10.jpg" name="Jupiter" />
                <Text>Jupiter</Text>
            </Item>
            <Item key="mars">
                <Avatar src="https://randomuser.me/api/portraits/men/10.jpg" name="Mars" />
                <Text>Mars</Text>
            </Item>
        </Menu>
    )
};

export const ItemWithAvatarAndDescription: MenuStory = {
    name: "item with avatar and description",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <Avatar name="Earth" />
                <Text>Earth</Text>
                <Text slot="description">Home Sweet Home</Text>
            </Item>
            <Item key="jupiter">
                <Avatar name="Jupiter" />
                <Text>Jupiter</Text>
                <Text slot="description">Jupiter did it!</Text>
            </Item>
            <Item key="mars">
                <Avatar name="Mars" />
                <Text>Mars</Text>
                <Text slot="description">Elon and Grimes are coming.</Text>
            </Item>
        </Menu>
    )
};

export const ItemWithDescription: MenuStory = {
    name: "item with description",
    render: () => (
        <Menu aria-label="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="jupiter">Jupiter</Item>
            <Item key="mars">
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
        </Menu>
    )
};

export const ItemOverflow: MenuStory = {
    name: "item overflow",
    render: () => (
        <Inline>
            <Menu width={960} aria-label="Planets">
                <Item>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                <Item>Jupiter</Item>
                <Item>Mars</Item>
            </Menu>
            <Menu defaultSelectedKeys={["0"]} selectionMode="single" width={960} aria-label="Planets">
                <Item>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
                <Item>Jupiter</Item>
                <Item>Mars</Item>
            </Menu>
        </Inline>
    )
};

export const ItemWithDescriptionOverflow: MenuStory = {
    name: "item with description overflow",
    render: () => (
        <Inline>
            <Menu aria-label="Planets">
                <Item key="earth">
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text slot="description">Home sweet home!</Text>
                </Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">
                    <Avatar name="Mars" />
                    <Text>Mars</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="mercury">
                    <Text>Mercury</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
            <Menu defaultSelectedKeys={["earth", "mars", "mercury"]} selectionMode="multiple" aria-label="Planets">
                <Item key="earth">
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text slot="description">Home sweet home!</Text>
                </Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">
                    <Avatar name="Mars" />
                    <Text>Mars</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="mercury">
                    <Text>Mercury</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
        </Inline>
    )
};

export const ItemWithDescriptionOverflowWhenFluid: MenuStory = {
    name: "item with description overflow when fluid",
    render: () => (
        <Inline>
            <Menu fluid width="16rem" aria-label="Planets">
                <Item key="earth">
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text slot="description">Home sweet home!</Text>
                </Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">
                    <Text>Mars</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
            <Menu defaultSelectedKeys={["earth", "mars"]} selectionMode="multiple" fluid width="16rem" aria-label="Planets">
                <Item key="earth">
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <Text slot="description">Home sweet home!</Text>
                </Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="mars">
                    <Text>Mars</Text>
                    <Text slot="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                </Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
            </Menu>
        </Inline>
    )
};

export const Fluid: MenuStory = {
    name: "fluid",
    render: () => (
        <Menu fluid aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Menu>
    )
};

export const ValidationState: MenuStory = {
    name: "validation state",
    render: () => (
        <Stack>
            <Inline>
                <Menu validationState="invalid" selectedKeys={["mars"]} selectionMode="single" aria-label="Planets">
                    <Item key="earth">
                        <LightbulbIcon />
                        <Text>Earth</Text>
                        <Text slot="description">Home sweet home!</Text>
                    </Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">
                        <LightbulbIcon />
                        <Text>Mars</Text>
                        <Text slot="description">See you in 2026</Text>
                    </Item>
                </Menu>
                <Menu validationState="valid" selectedKeys={["mars"]} selectionMode="single" aria-label="Planets">
                    <Item key="earth">
                        <LightbulbIcon />
                        <Text>Earth</Text>
                        <Text slot="description">Home sweet home!</Text>
                    </Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">
                        <LightbulbIcon />
                        <Text>Mars</Text>
                        <Text slot="description">See you in 2026</Text>
                    </Item>
                </Menu>
            </Inline>
            <Inline>
                <Menu validationState="invalid" selectedKeys={["mars"]} selectionMode="single" aria-label="Planets">
                    <Item key="earth">
                        <LightbulbIcon />
                        <Text>Earth</Text>
                        <Text slot="description">Home sweet home!</Text>
                    </Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">
                        <LightbulbIcon />
                        <Text>Mars</Text>
                        <Text slot="description">See you in 2026</Text>
                    </Item>
                </Menu>
                <Menu validationState="valid" selectedKeys={["mars"]} selectionMode="single" aria-label="Planets">
                    <Item key="earth">
                        <LightbulbIcon />
                        <Text>Earth</Text>
                        <Text slot="description">Home sweet home!</Text>
                    </Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">
                        <LightbulbIcon />
                        <Text>Mars</Text>
                        <Text slot="description">See you in 2026</Text>
                    </Item>
                </Menu>
            </Inline>
        </Stack>
    )
};

export const States: MenuStory = {
    name: "states",
    render: () => (
        <Stack>
            <Inline>
                <Menu selectedKeys={["earth"]} selectionMode="single" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
                <Menu selectedKeys={["earth", "mars"]} selectionMode="multiple" aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="mars">Mars</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
            </Inline>
            <Inline>
                <Menu aria-label="Planets">
                    <Item active key="earth">Earth</Item>
                    <Item focus key="jupiter">Jupiter</Item>
                    <Item hover key="mars">Mars</Item>
                    <Item focus hover key="mercury">Mercury</Item>
                    <Item disabled key="neptune">Neptune</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
                <Menu aria-label="Planets">
                    <Item disabled key="neptune">Neptune</Item>
                    <Item disabled active key="earth">Earth</Item>
                    <Item disabled focus key="jupiter">Jupiter</Item>
                    <Item disabled hover key="mars">Mars</Item>
                    <Item disabled focus hover key="mercury">Mercury</Item>
                </Menu>
                <Menu selectionMode="single" aria-label="Planets">
                    <Item active key="earth">Earth</Item>
                    <Item focus key="jupiter">Jupiter</Item>
                    <Item hover key="mars">Mars</Item>
                    <Item focus hover key="mercury">Mercury</Item>
                    <Item disabled key="neptune">Neptune</Item>
                    <Item key="saturn">Saturn</Item>
                </Menu>
                <Menu selectionMode="single" aria-label="Planets">
                    <Item disabled key="neptune">Neptune</Item>
                    <Item disabled active key="earth">Earth</Item>
                    <Item disabled focus key="jupiter">Jupiter</Item>
                    <Item disabled hover key="mars">Mars</Item>
                    <Item disabled focus hover key="mercury">Mercury</Item>
                </Menu>
            </Inline>
        </Stack>
    )
};

export const DynamicItems: MenuStory = {
    name: "dynamic items",
    render: () => (
        <Menu aria-label="Planets">
            {["Earth", "Jupiter", "Mars", "Mercury", "Neptune", "Saturn", "Uranus"].map(x => (
                <Item key={x.toLowerCase()}>{x}</Item>
            ))}
        </Menu>
    )
};

const RedItem = ({ children, ...rest }: Omit<MenuItemProps, "item">) => {
    return (
        <MenuItem
            {...rest}
            item={{
                type: NodeType.item,
                content: children,
                index: 0,
                key: children.toString(),
                props: {},
                ref: null as any
            }}
            color="red"
        >
            {children}
        </MenuItem>
    );
};

export const CustomItemComponent: MenuStory = {
    name: "custom item component",
    render: () => (
        <Menu aria-label="Planets">
            <RedItem key="earth">Earth</RedItem>
            <RedItem key="jupiter">Jupiter</RedItem>
            <RedItem key="mars">Mars</RedItem>
        </Menu>
    ),
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: "color-contrast", enabled: false }
                ]
            }
        }
    }
};

export const AdaptWidthToLargestItem: MenuStory = {
    name: "adapt width to largest item",
    render: () => (
        <Menu aria-label="Planets">
            <Item>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Item>
            <Item>Jupiter</Item>
            <Item>Mars</Item>
        </Menu>
    )
};

export const CustomMenuWidth: MenuStory = {
    name: "custom menu width",
    render: () => (
        <Menu width="20rem" aria-label="Planets">
            <Item key="earth">Earth</Item>
            <Item key="mars">Mars</Item>
            <Item key="saturn">Saturn</Item>
        </Menu>
    )
};

export const ConditionalRendering: MenuStory = {
    name: "conditional rendering",
    render: () => (
        <Menu aria-label="Planets">
            {false && <Item key="earth">Earth</Item>}
            <Item>Jupiter</Item>
            <Item>Mars</Item>
        </Menu>
    )
};

export const ScrollingWithTooManyItems: MenuStory = {
    name: "scrolling with too many items",
    render: () => (
        <Menu selectionMode="single" aria-label="Planets">
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
        </Menu>
    )
};

export const ScrollingWithSections: MenuStory = {
    name: "scrolling with sections",
    render: () => (
        <Menu selectionMode="single" aria-label="Planets">
            <Section title="Visited">
                <Item key="earth">Earth</Item>
                <Item key="mars">Mars</Item>
                <Item key="saturn">Saturn</Item>
            </Section>
            <Section title="Not Visited">
                <Item key="ceres">Ceres</Item>
                <Item key="charon">Charon</Item>
                <Item key="eris">Eris</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="haumea">Haumea</Item>
                <Item key="makemake">Makemake</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
                <Item key="venus">Venus</Item>
            </Section>
        </Menu>
    ),
    parameters: {
        a11y: {
            config: {
                rules: [
                    { id: "aria-required-children", enabled: false },
                    { id: "aria-required-parent", enabled: false }
                ]
            }
        }
    }
};

export const ScrollingWithDividers: MenuStory = {
    name: "scrolling with dividers",
    render: () => (
        <Menu selectionMode="single" aria-label="Planets">
            <Item key="ceres">Ceres</Item>
            <Item key="charon">Charon</Item>
            <Item key="earth">Earth</Item>
            <Item key="eris">Eris</Item>
            <Item key="jupiter">Jupiter</Item>
            <Divider />
            <Item key="haumea">Haumea</Item>
            <Item key="makemake">Makemake</Item>
            <Item key="mars">Mars</Item>
            <Divider />
            <Item key="mercury">Mercury</Item>
            <Item key="neptune">Neptune</Item>
            <Item key="pluto">Pluto</Item>
            <Item key="saturn">Saturn</Item>
            <Item key="uranus">Uranus</Item>
            <Item key="venus">Venus</Item>
        </Menu>
    )
};

export const ScrollingWithDescriptions: MenuStory = {
    name: "scrolling with descriptions",
    render: () => (
        <Menu selectionMode="single" aria-label="Planets">
            <Item key="earth">
                <Text>Earth</Text>
                <Text slot="description">Home sweet home!</Text>
            </Item>
            <Item key="mars">
                <Text>Mars</Text>
                <Text slot="description">See you in 2026</Text>
            </Item>
            <Item key="jupiter">
                <Text>Jupiter</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="makemake">
                <Text>Makemake</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="mercury">
                <Text>Mercury</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="neptune">
                <Text>Neptune</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="saturn">
                <Text>Saturn</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="uranus">
                <Text>Uranus</Text>
                <Text slot="description">A description!</Text>
            </Item>
            <Item key="venus">
                <Text>Venus</Text>
                <Text slot="description">A description!</Text>
            </Item>
        </Menu>
    )
};

export const ScrollingMixMatch: MenuStory = {
    name: "scrolling mix & match",
    render: () => (
        <Menu selectionMode="single" aria-label="Planets">
            <Section title="Visited">
                <Item key="earth">
                    <Text>Earth</Text>
                    <Text slot="description">Home sweet home!</Text>
                </Item>
                <Item key="mars">
                    <Text>Mars</Text>
                    <Text slot="description">See you in 2026</Text>
                </Item>
                <Item key="saturn">Saturn</Item>
            </Section>
            <Section title="Not Visited">
                <Item key="ceres">Ceres</Item>
                <Item key="charon">Charon</Item>
                <Divider />
                <Item key="eris">Eris</Item>
                <Item key="jupiter">Jupiter</Item>
                <Item key="haumea">Haumea</Item>
                <Item key="makemake">Makemake</Item>
                <Item key="mercury">Mercury</Item>
                <Item key="neptune">Neptune</Item>
                <Item key="saturn">Saturn</Item>
                <Item key="uranus">Uranus</Item>
                <Item key="venus">Venus</Item>
            </Section>
        </Menu>
    )
};

export const ScrollingWithCustomStyleHeight: MenuStory = {
    name: "scrolling with custom style height",
    render: () => (
        <Menu selectionMode="single" height={960} aria-label="Planets">
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
        </Menu>
    )
};

export const Zoom: MenuStory = {
    name: "zoom",
    render: () => (
        <Stack>
            <Div className="zoom-in">
                <Menu aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Menu>
            </Div>
            <Div className="zoom-out">
                <Menu aria-label="Planets">
                    <Item key="earth">Earth</Item>
                    <Item key="jupiter">Jupiter</Item>
                    <Item key="mars">Mars</Item>
                </Menu>
            </Div>
        </Stack>
    )
};

export const Styling: MenuStory = {
    name: "styling",
    render: () => (
        <Inline>
            <Menu border="warning" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item border="warning" key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
            <Menu className="border-red" aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item className="border-red" key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
            <Menu style={{ border: "1px solid red" }} aria-label="Planets">
                <Item key="earth">Earth</Item>
                <Item style={{ border: "1px solid red" }} key="jupiter">Jupiter</Item>
                <Item key="mars">Mars</Item>
            </Menu>
        </Inline>
    )
};
