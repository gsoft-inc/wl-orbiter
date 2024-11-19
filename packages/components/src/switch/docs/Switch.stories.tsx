import { Switch } from "@components/switch/index.ts";
import { Text } from "@components/typography/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Inline } from "@components/layout/index.ts";
import { SparklesIcon } from "@hopper-ui/icons";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Switch",
    component: Switch,
    id: "switch"
} as Meta<typeof Switch>;

export default meta;

type SwitchStory = StoryObj<typeof meta>;

export const Default: SwitchStory = {
    render: () => (
        <Switch>Engines</Switch>
    )
};

export const Checked: SwitchStory = {
    render: () => (
        <Switch defaultChecked>Engines</Switch>
    )
};

export const NoLabel: SwitchStory = {
    render: () => (
        <Switch aria-label="Engines" />
    )
};

export const Disabled: SwitchStory = {
    render: () => (
        <Switch disabled>Engines</Switch>
    )
};

export const IconStory: SwitchStory = {
    render: () => (
        <Switch>
            <Text>Pressurization</Text>
            <SparklesIcon />
        </Switch>
    )
};

export const CounterStory: SwitchStory = {
    render: () => (
        <Switch>
            <Text>Engines</Text>
            <Counter>6</Counter>
        </Switch>
    )
};

export const Size: SwitchStory = {
    render: () => (
        <Inline alignY="center">
            <Switch size="sm">Engines</Switch>
            <Switch>Engines</Switch>
        </Inline>
    )
};

export const Reverse: SwitchStory = {
    render: () => (
        <Switch reverse>
            <SparklesIcon />
            <Text>Engines</Text>
            <Counter variant="divider">6</Counter>
        </Switch>
    )
};

/* eslint-disable react-hooks/rules-of-hooks */
export const Controlled: SwitchStory = {
    render: () => {
        const [isChecked, setIsChecked] = useState(false);

        const isValid = isChecked;

        const handleChange = useCallback(() => {
            setIsChecked(x => !x);
            console.log(!isChecked);
        }, [isChecked, setIsChecked]);

        return (
            <Switch
                checked={isChecked}
                onChange={handleChange}
                validationState={isValid ? "valid" : "invalid"}
            >
                Engines
            </Switch>
        );
    }
};
