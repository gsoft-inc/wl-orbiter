/* eslint-disable react-hooks/rules-of-hooks */
import { SparklesIcon } from "@hopper-ui/icons";
import { Meta, StoryObj } from "@storybook/react";
import {
    Button,
    ButtonAsLink,
    ButtonGroup,
    IconButton,
    IconButtonAsLink,
    ToggleButton,
    ToggleIconButton
} from "@components/button";
import { Counter } from "@components/counter";
import { Inline } from "@components/layout";
import { RadioGroup } from "@components/radio";
import { Text } from "@components/typography";
import { useCallback, useState } from "react";

const meta = {
    title: "Components/Button",
    component: Button,
    id: "button"
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button>Cutoff</Button>
};

export const Icon: Story = {
    render: () => (
        <Button variant="secondary">
            <SparklesIcon />
            <Text>Cutoff</Text>
        </Button>
    )
};

export const EndIcon: Story = {
    render: () => (
        <Button variant="secondary">
            <Text>Cutoff</Text>
            <SparklesIcon slot="end-icon" />
        </Button>
    )
};

export const CounterStory: Story = {
    render: () => (
        <Button variant="secondary">
            <Text>Cutoff</Text>
            <Counter variant="divider">60</Counter>
        </Button>
    )
};

export const Size: Story = {
    render: () => (
        <Inline alignY="center">
            <Button size="sm" variant="secondary">Cutoff</Button>
            <Button variant="secondary">Cutoff</Button>
        </Inline>
    )
};

export const Disabled: Story = {
    render: () => <Button disabled>Cutoff</Button>
};

export const Loading: Story = {
    render: () => <Button loading variant="secondary">Loading</Button>
};

export const Fluid: Story = {
    render: () => (
        <Button fluid variant="secondary">
            <SparklesIcon />
            <Text>To infinity and beyond</Text>
        </Button>
    )
};

export const Primary: Story = {
    render: () => <Button variant="primary">Primary</Button>
};

export const Secondary: Story = {
    render: () => <Button variant="secondary">Secondary</Button>
};

export const Tertiary: Story = {
    render: () => <Button variant="tertiary">Tertiary</Button>
};

export const Upsell: Story = {
    render: () => <Button variant="upsell">Upsell</Button>
};

export const Negative: Story = {
    render: () => <Button variant="negative">Negative</Button>
};

export const AsAnchor: Story = {
    render: () => <ButtonAsLink href="https://www.nasa.gov" target="_blank" variant="secondary">Cutoff</ButtonAsLink>
};

export const IconButtonStory: Story = {
    render: () => (
        <Inline alignY="center">
            <IconButton aria-label="Add owner" size="xs" variant="secondary"><SparklesIcon /></IconButton>
            <IconButton aria-label="Add owner" size="sm" variant="secondary"><SparklesIcon /></IconButton>
            <IconButton aria-label="Add owner" variant="secondary"><SparklesIcon /></IconButton>
        </Inline>
    )
};

export const IconLinkButton: Story = {
    render: () => (
        <IconButtonAsLink aria-label="Add owner" href="https://www.nasa.gov" target="_blank" variant="secondary"><SparklesIcon /></IconButtonAsLink>
    )
};

export const ButtonGroupStory: Story = {
    render: () => (
        <ButtonGroup>
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
            <Button variant="secondary">Rate Now</Button>
        </ButtonGroup>
    )
};

export const ButtonGroupVertical: Story = {
    render: () => (
        <ButtonGroup orientation="vertical">
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
            <Button variant="secondary">Rate Now</Button>
        </ButtonGroup>
    )
};

export const ButtonGroupAlignment: Story = {
    render: () => (
        <ButtonGroup align="end">
            <Button variant="secondary">No, thanks</Button>
            <Button variant="secondary">Remind me later</Button>
            <Button variant="secondary">Rate Now</Button>
        </ButtonGroup>
    )
};

export const ToggleButtonStory: Story = {
    render: () => (
        <Inline>
            <ToggleButton variant="secondary">On</ToggleButton>
            <ToggleButton variant="secondary">
                <SparklesIcon />
                <Text>Cutoff</Text>
            </ToggleButton>
        </Inline>
    )
};

export const ToggleIconButtonStory: Story = {
    render: () => (
        <ToggleIconButton aria-label="Activate" variant="secondary" >
            <SparklesIcon />
        </ToggleIconButton >
    )
};

export const ToggleButtonGroup: Story = {
    render: () => (
        <RadioGroup gap={80} orientation="horizontal">
            <ToggleButton value="none" variant="secondary">None</ToggleButton>
            <ToggleButton value="1" variant="secondary">1</ToggleButton>
            <ToggleButton value="2" variant="secondary">2</ToggleButton>
            <ToggleButton value="3" variant="secondary">3</ToggleButton>
            <ToggleButton value="4+" variant="secondary">4+</ToggleButton>
        </RadioGroup>
    )
};

export const Controlled: Story = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        const handleChange = useCallback((event, newValue) => {
            setIsChecked(x => !x);
            console.log(!newValue);
        }, [setIsChecked]);

        return (
            <ToggleButton
                checked={isChecked}
                onChange={handleChange}
                value="isActive"
                variant={isChecked ? "primary" : "secondary"}
            >
                {isChecked ? "On" : "Off"}
            </ToggleButton>
        );
    }
};
