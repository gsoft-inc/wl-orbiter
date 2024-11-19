import { Div } from "@components/html/index.ts";
import { Table } from "@stories/components";

function toRowValues({ value, variable, color }: Color) {
    return [
        value,
        variable,
        color,
        <Div backgroundColor={value} height={400}></Div>
    ];
}
interface Color {
    value: string;
    variable: string;
    color: string;
}

interface ColorPaletteTableProps {
    colors: Color[];
}

export function ColorPaletteTable({ colors }: ColorPaletteTableProps) {
    return (
        <Table
            columns={[
                { title: "Prop Value", headerStyle: { width: "150px" }, rowClassName: "code" },
                { title: "CSS Variable", headerStyle: { width: "200px" }, rowClassName: "code" },
                { title: "Color Code", headerStyle: { width: "275px" }, rowClassName: "code" },
                { title: "", headerStyle: { width: "300px" } }
            ]}
            rows={colors.map(x => toRowValues(x))}
        />
    );
}
