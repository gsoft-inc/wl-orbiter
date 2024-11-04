import { Meta, StoryObj } from "@storybook/react";
import { Div } from "@components/html";
import { Grid, fitContent, minmax, repeat } from "@components/layout";

const meta = {
    title: "Components/Grid",
    component: Grid,
    id: "grid"
} as Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof Grid>;

export const Areas: Story = {
    render: () => (
        <Grid
            areas={["a  a", "b c"]}
            gap={80}
            height={800}
        >
            <Div backgroundColor="sapphire-500" gridArea="a" />
            <Div backgroundColor="amanita-500" gridArea="b" />
            <Div backgroundColor="moss-500" gridArea="c" />
        </Grid>
    )
};

export const TemplateColumns: Story = {
    render: () => (
        <Grid
            gap={80}
            height={320}
            templateColumns={["9", "7", "1fr"]}
        >
            <Div backgroundColor="sapphire-500" />
            <Div backgroundColor="amanita-500" />
            <Div backgroundColor="moss-500" />
        </Grid>
    )
};

export const AutoColumns: Story = {
    render: () => (
        <Grid
            autoColumns="1fr"
            gap={80}
            height={800}
        >
            <Div backgroundColor="sapphire-500" gridColumn={2} />
            <Div backgroundColor="amanita-500" />
            <Div backgroundColor="moss-500" />
        </Grid>
    )
};

export const Gap: Story = {
    render: () => (
        <Grid
            gap={80}
            height={800}
            templateColumns="1fr 1fr"
        >
            <Div backgroundColor="sapphire-500" />
            <Div backgroundColor="amanita-500" />
            <Div backgroundColor="moss-500" />
            <Div backgroundColor="rock-500" />
        </Grid>
    )
};

export const ColumnSpan: Story = {
    render: () => (
        <Grid
            gap={80}
            height={800}
            templateColumns="1fr 1fr 1fr"
        >
            <Div backgroundColor="sapphire-500" />
            <Div backgroundColor="amanita-500" />
            <Div backgroundColor="moss-500" />
            <Div backgroundColor="rock-500" gridColumnSpan={3} gridRow={2} />
        </Grid>
    )
};

export const Nesting: Story = {
    render: () => (
        <Grid
            gap={80}
            templateRows={["5", "5"]}
        >
            <Grid templateColumns={["9", "auto"]}>
                <Div backgroundColor="sapphire-500" />
                <Div backgroundColor="amanita-500" />
            </Grid>
            <Grid templateColumns={["auto", "14"]}>
                <Div backgroundColor="moss-500" />
                <Div backgroundColor="rock-500" />
            </Grid>
        </Grid>
    )
};

export const RepeatFunction: Story = {
    render: () => (
        <Grid
            autoRows={480}
            gap={80}
            templateColumns={repeat("auto-fit", "7")}
        >
            <Div backgroundColor="#eef3fd" height={400} width={400} />
            <Div backgroundColor="#dbe6fd" height={400} width={400} />
            <Div backgroundColor="#b6c2ef" height={400} width={400} />
            <Div backgroundColor="#95a9f5" height={400} width={400} />
            <Div backgroundColor="#7689fd" height={400} width={400} />
            <Div backgroundColor="#5D65f6" height={400} width={400} />
            <Div backgroundColor="#4B11fd" height={400} width={400} />
            <Div backgroundColor="#362aae" height={400} width={400} />
            <Div backgroundColor="#1f2151" height={400} width={400} />
            <Div backgroundColor="#0d0f1f" height={400} width={400} />
            <Div backgroundColor="#fbf1f1" height={400} width={400} />
            <Div backgroundColor="#fadfdf" height={400} width={400} />
            <Div backgroundColor="#fdb0af" height={400} width={400} />
            <Div backgroundColor="#f88f8d" height={400} width={400} />
            <Div backgroundColor="#eb6a64" height={400} width={400} />
            <Div backgroundColor="#d93c37" height={400} width={400} />
            <Div backgroundColor="#a91414" height={400} width={400} />
            <Div backgroundColor="#811b15" height={400} width={400} />
            <Div backgroundColor="#461812" height={400} width={400} />
            <Div backgroundColor="#1d0b09" height={400} width={400} />
            <Div backgroundColor="#dbfbea" height={400} width={400} />
            <Div backgroundColor="#cbeedb" height={400} width={400} />
            <Div backgroundColor="#a5cdb8" height={400} width={400} />
            <Div backgroundColor="#78ba9b" height={400} width={400} />
            <Div backgroundColor="#27a57a" height={400} width={400} />
            <Div backgroundColor="#268563" height={400} width={400} />
            <Div backgroundColor="#2b5e48" height={400} width={400} />
            <Div backgroundColor="#27493a" height={400} width={400} />
            <Div backgroundColor="#1a2a23" height={400} width={400} />
            <Div backgroundColor="#0c110e" height={400} width={400} />
        </Grid>
    )
};

export const MinMaxFunction: Story = {
    render: () => (
        <Grid
            gap={80}
            height={320}
            templateColumns={[minmax("9", "1fr"), "10", minmax("9", "1fr")]}
        >
            <Div backgroundColor="sapphire-500" />
            <Div backgroundColor="amanita-500" />
            <Div backgroundColor="moss-500" />
        </Grid >
    )
};


export const FitContentFunction: Story = {
    render: () => (
        <Grid
            alignItems="center"
            color="samoyed"
            gap={80}
            templateColumns={[fitContent("9"), fitContent("9"), "1fr"]}
        >
            <Div backgroundColor="primary" padding="1">Mars</Div>
            <Div backgroundColor="status-negative" padding="1">Pluto</Div>
            <Div backgroundColor="status-positive" padding="1">Jupiter</Div>
        </Grid>
    )
};
