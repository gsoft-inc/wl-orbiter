import { Transition } from "@components/transition/index.ts";
import { Button } from "@components/button/index.ts";
import { Text } from "@components/typography/index.ts";
import { Div } from "@components/html/index.ts";
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
