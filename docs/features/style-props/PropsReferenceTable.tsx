import { Table, TableProps, Link } from "@stories/components";

const ScaleLinks = {
    "box-shadow-scale": <Link href="?path=/docs/tokens--docs#box-shadows" target="_blank">shadows</Link>,
    "color-scale": <Link href="?path=/docs/tokens--docs#background-colors" target="_blank">colors</Link>,
    "sizing-scale": <Link href="?path=/docs/tokens--docs#sizings" target="_blank">dimensions</Link>,
    "spacing-scale": <Link href="?path=/docs/tokens--docs#spacings" target="_blank">dimensions</Link>
};

function toScaleLink(scale: keyof typeof ScaleLinks) {
    return ScaleLinks[scale] ?? scale;
}

function toRowValues([propName, cssProperty, themeKey, scale, supports]) {
    return [
        propName,
        cssProperty,
        themeKey,
        toScaleLink(scale),
        supports
    ];
}

export interface PropsReferenceTableProps {
    rows: TableProps["rows"];
}

export function PropsReferenceTable({ rows }: PropsReferenceTableProps) {
    return (
        <Table
            columns={[
                { title: "Prop", headerStyle: { width: "200px" }, rowClassName: "code" },
                { title: "CSS property", headerStyle: { width: "250px" }, rowClassName: "code" },
                { title: "Theme key", headerStyle: { width: "125px" }, rowClassName: "code" },
                { title: "Scale", headerStyle: { width: "200px" }, rowClassName: "code" },
                { title: "Supports", headerStyle: { width: "300px" }, rowClassName: "code" }
            ]}
            rows={rows.map(x => toRowValues(x))}
        />
    );
}
