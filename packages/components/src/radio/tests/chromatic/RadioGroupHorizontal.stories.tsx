import { Radio, RadioGroup } from "@components/radio/index.ts";
import { Counter } from "@components/counter/index.ts";
import { Text } from "@components/typography/index.ts";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Chromatic/RadioGroup/horizontal",
    component: RadioGroup,
    parameters: {
        chromatic: {
            delay: 100
        }
    }
} as Meta<typeof RadioGroup>;

export default meta;

type RadioGroupStory = StoryObj<typeof meta>;

export const Default: RadioGroupStory = {
    name: "default",
    render: () => (
        <RadioGroup orientation="horizontal">
            <Radio value="1">1</Radio>
            <Radio value="2">
                <Text>2</Text>
                <Counter>60</Counter>
            </Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
};

export const Reverse: RadioGroupStory = {
    name: "reverse",
    render: () => (
        <RadioGroup reverse orientation="horizontal">
            <Radio value="1">1</Radio>
            <Radio value="2">A very long option to read while you wait for the countdown to mars.</Radio>
            <Radio value="3">3</Radio>
        </RadioGroup>
    )
};
