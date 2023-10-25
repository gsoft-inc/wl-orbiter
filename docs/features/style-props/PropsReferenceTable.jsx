import { Table, Link } from "@stories/components";
import { array, arrayOf } from "prop-types";

const propTypes = {
    rows: arrayOf(array).isRequired
};

const ScaleLinks = {
    "box-shadow-scale": <Link href="https://wl-hopper.netlify.app/tokens/semantic/shadow" target="_blank">shadows</Link>,
    "color-scale": <Link href="https://wl-hopper.netlify.app/tokens/semantic/color" target="_blank">colors</Link>,
    "sizing-scale": <Link href="https://wl-hopper.netlify.app/tokens/semantic/dimensions" target="_blank">dimensions</Link>,
    "spacing-scale": <Link href="https://wl-hopper.netlify.app/tokens/semantic/dimensions" target="_blank">dimensions</Link>
};

function toScaleLink(scale) {
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

export function PropsReferenceTable({ rows }) {
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

PropsReferenceTable.propTypes = propTypes;
