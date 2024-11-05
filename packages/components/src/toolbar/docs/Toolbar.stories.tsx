import { CheckboxGroup } from "@components/checkbox";
import { Div, HtmlInput } from "@components/html";
import { Toolbar, useToolbarProps } from "@components/toolbar";
import { Radio, RadioGroup } from "@components/radio";
import { TextInput } from "@components/text-input";
import { ToggleButton } from "@components/button";
import { omitProps } from "@components/shared";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Toolbar",
    component: Toolbar,
    id: "toolbar"
} as Meta<typeof Toolbar>;

export default meta;

type ToolbarStory = StoryObj<typeof meta>;

export const Default: ToolbarStory = {
    render: () => (
        <Toolbar>
            <TextInput placeholder="Destination" />
            <RadioGroup>
                <Radio value="roscosmos">Roscosmos</Radio>
                <Radio value="nasa">NASA</Radio>
            </RadioGroup>
            <CheckboxGroup>
                <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
            </CheckboxGroup>
        </Toolbar>
    )
};

export const Disabled: ToolbarStory = {
    render: () => (
        <Toolbar>
            <TextInput placeholder="Destination" />
            <RadioGroup disabled>
                <Radio value="roscosmos">Roscosmos</Radio>
                <Radio value="nasa">NASA</Radio>
            </RadioGroup>
            <CheckboxGroup>
                <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
            </CheckboxGroup>
        </Toolbar>
    )
};

export const DisabledToolbar: ToolbarStory = {
    render: () => (
        <Toolbar disabled>
            <TextInput placeholder="Destination" />
            <RadioGroup>
                <Radio value="roscosmos">Roscosmos</Radio>
                <Radio value="nasa">NASA</Radio>
            </RadioGroup>
            <CheckboxGroup>
                <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
            </CheckboxGroup>
        </Toolbar>
    )
};

export const Gap: ToolbarStory = {
    render: () => (
        <Toolbar gap="inline-md">
            <TextInput placeholder="Destination" />
            <RadioGroup>
                <Radio value="roscosmos">Roscosmos</Radio>
                <Radio value="nasa">NASA</Radio>
            </RadioGroup>
            <CheckboxGroup>
                <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
            </CheckboxGroup>
        </Toolbar>
    )
};

export const Orientation: ToolbarStory = {
    render: () => (
        <Toolbar orientation="vertical">
            <TextInput placeholder="Destination" />
            <RadioGroup>
                <Radio value="roscosmos">Roscosmos</Radio>
                <Radio value="nasa">NASA</Radio>
            </RadioGroup>
            <CheckboxGroup>
                <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
            </CheckboxGroup>
        </Toolbar>
    )
};

export const Wrap: ToolbarStory = {
    render: () => (
        <Div width={{
            base: "200px",
            sm: "700px"
        }}
        >
            <Toolbar wrap>
                <TextInput placeholder="Destination" />
                <RadioGroup>
                    <Radio value="roscosmos">Roscosmos</Radio>
                    <Radio value="nasa">NASA</Radio>
                </RadioGroup>
                <CheckboxGroup>
                    <ToggleButton value="round-trip" variant="secondary">Round trip</ToggleButton>
                    <ToggleButton value="one-way" variant="secondary">One way</ToggleButton>
                </CheckboxGroup>
            </Toolbar>
        </Div>
    )
};

export const CustomComponentStory: ToolbarStory = {
    render: () => {
        function CustomComponent(props) {
            const [toolbarProps] = useToolbarProps();

            return (
                <HtmlInput
                    {...props}
                    {...omitProps(toolbarProps, ["orientation"])}
                    border="neutral"
                    type="text"
                />
            );
        }

        return (
            <Toolbar>
                <CustomComponent />
                <RadioGroup>
                    <Radio value="mars">Mars</Radio>
                    <Radio value="jupiter">Jupiter</Radio>
                    <Radio value="pluton">Pluton</Radio>
                </RadioGroup>
            </Toolbar>
        );
    }
};
