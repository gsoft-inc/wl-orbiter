import { Meta, StoryObj } from "@storybook/react";
import { TBody, TD, TFoot, TH, THead, TR, Table } from "@components/html";

const meta = {
    title: "Html elements/Table",
    component: Table,
    id: "html-table"
} as Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Example: Story = {
    render: () => (
        <Table cellPadding={5} color="neutral-weak">
            <THead fontWeight={680}>
                <TR>
                    <TH textAlign="left">Company</TH>
                    <TH textAlign="left">Employees</TH>
                </TR>
            </THead>
            <TBody>
                <TR>
                    <TD>Space X</TD>
                    <TD>More than 10 000</TD>
                </TR>
                <TR>
                    <TD>Blue Origin</TD>
                    <TD>3 500</TD>
                </TR>
                <TR color="sapphire-600">
                    <TD>Virgin Galactic</TD>
                    <TD>823</TD>
                </TR>
            </TBody>
            <TFoot>
            </TFoot>
        </Table>
    )
};
