import { H3, Text } from "@components/typography/index.ts";
import { Accordion, AccordionHeader, useAccordionContext, type AccordionHeaderProps } from "@components/accordion/index.ts";
import { Content } from "@components/placeholders/index.ts";
import { Item } from "@components/collection/index.ts";
import { Meta, StoryObj } from "@storybook/react";
import { SparklesIcon } from "@hopper-ui/icons";
import { useCallback, useState, type SyntheticEvent } from "react";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
    id: "accordion"
} as Meta<typeof Accordion>;

export default meta;

type AccordionStory = StoryObj<typeof meta>;

export const Default: AccordionStory = {
    render: () => (
        <Accordion>
            <Item key="mars">
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            <Item key="jupiter">
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>Venus</H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};

export const Icon: AccordionStory = {
    render: () => (
        <Accordion>
            <Item key="mars">
                <H3>
                    <SparklesIcon />
                    <Text>Mars</Text>
                </H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            <Item key="jupiter">
                <H3>
                    <SparklesIcon />
                    <Text>Jupiter</Text>
                </H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>
                    <SparklesIcon />
                    <Text>Venus</Text>
                </H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};

export const Multiple: AccordionStory = {
    render: () => (
        <Accordion expansionMode="multiple">
            <Item key="mars">
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            <Item key="jupiter">
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>Venus</H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};

export const DynamicItems: AccordionStory = {
    render: () => (
        <Accordion aria-label="Planets">
            {[
                { id: "mars", header: "Mars", content: "Mars is the fourth planet from the Sun and the second-smallest planet." },
                { id: "jupiter", header: "Jupiter", content: "Jupiter is the fifth planet from the Sun and the largest in the Solar System." },
                { id: "venus", header: "Venus", content: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty." }
            ]
                .map(({ id, header, content }) =>
                    <Item key={id}>
                        <H3>{header}</H3>
                        <Content>{content}</Content>
                    </Item>
                )}
        </Accordion>
    )
};

export const DisabledItems: AccordionStory = {
    render: () => (
        <Accordion>
            <Item key="mars">
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
            </Item>
            <Item disabled key="jupiter">
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>Venus</H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};

export const Bordered: AccordionStory = {
    render: () => (
        <Accordion variant="bordered">
            <Item key="mars">
                <H3>Mars</H3>
                <Content>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.</Content>
            </Item>
            <Item key="jupiter">
                <H3>Jupiter</H3>
                <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
            </Item>
            <Item key="venus">
                <H3>Venus</H3>
                <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
            </Item>
        </Accordion>
    )
};

export const AccordionContextStory: AccordionStory = {
    render: () => {
        type SelectedHeaderProps = Omit<AccordionHeaderProps, "headingType">;

        function SelectedHeader({ header, children, ...rest }: SelectedHeaderProps) {
            const { expandedKeys } = useAccordionContext();
            const { key } = header;

            return (
                <AccordionHeader
                    {...rest}
                    color={expandedKeys.includes(key) ? "sapphire-700" : undefined}
                    header={header}
                    headingType={H3}
                >
                    {children}
                </AccordionHeader>
            );
        }

        return (
            <Accordion aria-label="Planets">
                <Item key="mars">
                    <SelectedHeader>Mars</SelectedHeader>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item key="jupiter">
                    <SelectedHeader>Jupiter</SelectedHeader>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item key="venus">
                    <SelectedHeader>Venus</SelectedHeader>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Accordion>
        );
    }
};

/* eslint-disable react-hooks/rules-of-hooks */
export const ControlledAccordion: AccordionStory = {
    render: () => {
        const [expandedKeys, setExpandedKeys] = useState<string[]>([]);

        const handleExpansionChange = useCallback((event: SyntheticEvent, keys: string[]) => {
            setExpandedKeys(keys);
            console.log(keys);
        }, [setExpandedKeys]);

        return (
            <Accordion
                expandedKeys={expandedKeys}
                onExpansionChange={handleExpansionChange}
            >
                <Item key="mars">
                    <H3>Mars</H3>
                    <Content>Mars is the fourth planet from the Sun and the second-smallest planet.</Content>
                </Item>
                <Item key="jupiter">
                    <H3>Jupiter</H3>
                    <Content>Jupiter is the fifth planet from the Sun and the largest in the Solar System.</Content>
                </Item>
                <Item key="venus">
                    <H3>Venus</H3>
                    <Content>Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.</Content>
                </Item>
            </Accordion>
        );
    }
};
