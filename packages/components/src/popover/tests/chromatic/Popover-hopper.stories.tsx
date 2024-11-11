import { Content } from "@components/placeholders/index.ts";
import { Div } from "@components/html/index.ts";
import { Image } from "@components/image/index.ts";
import { Launch } from "./assets/index.ts";
import { Popover } from "@components/popover/index.ts";
import { Button, ButtonGroup, Footer, Form, Heading, Label, Link, TextField } from "@hopper-ui/components";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/Popover-hopper",
    component: Popover,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof Popover>;

export default meta;

type PopoverStory = StoryObj<typeof meta>;

export const Default: PopoverStory = {
    name: "default",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};

export const TextFooter: PopoverStory = {
    name: "text footer",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
            <Footer>Step 2/4</Footer>
        </Popover>
    )
};

export const LinkFooter: PopoverStory = {
    name: "link footer",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
            <Footer>
                <Link href="https://www.google.com" variant="secondary" isExternal>Step 2/4</Link>
            </Footer>
        </Popover>
    )
};

export const PopoverButton: PopoverStory = {
    name: "button",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
            <Button variant="primary">Accept</Button>
        </Popover>
    )
};

export const PopoverButtonGroup: PopoverStory = {
    name: "button group",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
            <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Accept</Button>
            </ButtonGroup>
        </Popover>
    )
};

export const AllSlots: PopoverStory = {
    name: "all slots",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft. The company was founded in 2002 by Elon Musk to revolutionize space transportation, with the ultimate goal of making life multiplanetary.</Content>
            <Footer>Step 2/4</Footer>
            <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Accept</Button>
            </ButtonGroup>
        </Popover>
    )
};

export const PopoverForm: PopoverStory = {
    name: "form",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>
                <Form isFluid>
                    <TextField name="first-name">
                        <Label>First Name</Label>
                    </TextField>
                    <TextField name="last-name">
                        <Label>Last Name</Label>
                    </TextField>
                </Form>
            </Content>
            <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save</Button>
            </ButtonGroup>
        </Popover>
    )
};

export const PopoverImage: PopoverStory = {
    name: "image",
    render: () => (
        <Popover>
            <Heading>Space News</Heading>
            <Content>
                <Image src={Launch} alt="SpaceX launch" />
            </Content>
            <ButtonGroup>
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Save</Button>
            </ButtonGroup>
        </Popover>
    )
};

export const Focused: PopoverStory = {
    name: "focused",
    render: () => (
        <Popover focus>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};

export const NotDismissable: PopoverStory = {
    name: "not dismissable",
    render: () => (
        <Popover dismissable={false}>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};

export const StyledSystem: PopoverStory = {
    name: "styled system",
    render: () => (
        <Popover border="warning">
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};

export const ClassName: PopoverStory = {
    name: "className",
    render: () => (
        <Popover className="border-red">
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};

export const ZoomIn: PopoverStory = {
    name: "zoom in",
    render: () => (
        <Div className="zoom-in">
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </Div>
    )
};

export const ZoomOut: PopoverStory = {
    name: "zoom out",
    render: () => (
        <Div className="zoom-out">
            <Popover>
                <Heading>Space News</Heading>
                <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
            </Popover>
        </Div>
    )
};

export const Style: PopoverStory = {
    name: "style",
    render: () => (
        <Popover style={{ border: "1px solid red" }}>
            <Heading>Space News</Heading>
            <Content>SpaceX designs, manufactures, and launches the world's most advanced rockets and spacecraft.</Content>
        </Popover>
    )
};
