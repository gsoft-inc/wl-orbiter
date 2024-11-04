import { Transition } from "@components/transition";
import { Button } from "@components/button";
import { Text } from "@components/typography";
import { Div } from "@components/html";
import { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Transition",
    component: Transition,
    id: "transition"
} as Meta<typeof Transition>;

export default meta;

type TransitionStory = StoryObj<typeof meta>;

/* eslint-disable react-hooks/rules-of-hooks */
export const ControlledTransition: TransitionStory = {
    render: () => {
        const [isVisible, setIsVisible] = useState(false);

        const handleToggle = useCallback(() => {
            setIsVisible(x => !x);
        }, [setIsVisible]);

        return (
            <Div minHeight="80px">
                <Button marginBottom={160} onClick={handleToggle} variant="secondary">Toggle animation</Button>
                <Transition
                    enter="o-ui-fade-in"
                    leave="o-ui-fade-out"
                    show={isVisible}
                >
                    <Text>Earth is a small town with many neighborhoods in a very big universe.</Text>
                </Transition>
            </Div>
        );
    }
};
