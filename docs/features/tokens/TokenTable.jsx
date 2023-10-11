import { ThemeProvider } from "@components/styling";
import { arrayOf, func, shape, string } from "prop-types";

import { Div, Span } from "@components/html";
import { Flex } from "@components/layout";
import { DocsContext } from "@storybook/addon-docs";
import { InfoCircleMajorIcon } from "@components/icons";
import { Table } from "@stories/components";
import { Text } from "@components/typography";
import { useContext } from "react";

const propTypes = {
    colors: arrayOf(shape({
        valueLight: string.isRequired,
        valueDark: string.isRequired,
        token: string.isRequired,
        variable: string.isRequired,
        itemRenderer: func.isRequired
    })).isRequired
};

function toRowValues({ token, variable, valueLight, valueDark, itemRenderer }, docsContext) {
    const scheme = docsContext.globals.colorScheme;
    const value = scheme === "light" ? valueLight : valueDark;

    return [
        token,
        variable,
        value,
        itemRenderer(token)
    ];
}

export function TokenTable({ colors }) {
    const docsContext = useContext(DocsContext);

    return (
        // eslint-disable-next-line react/destructuring-assignment
        <ThemeProvider colorScheme={docsContext.globals.colorScheme}>
            <Table
                className="token-table"
                columns={[
                    { title: "Token", headerStyle: { width: "325px" }, rowClassName: "code" },
                    { title: "CSS Variable", headerStyle: { width: "350px" }, rowClassName: "code" },
                    { title: "Value", headerStyle: { width: "225px" }, rowClassName: "code" },
                    { title: "Example", headerStyle: { width: "275px" }, rowClassName: "example", rowStyle: { backgroundColor: "var(--o-ui-bg-alias-surface)" } }
                ]}
                rows={colors.map(x => toRowValues(x, docsContext))}
            />
        </ThemeProvider>
    );
}

export function backgroundRenderer(token) {
    return <Div height={400} backgroundColor={token}></Div>;
}

export function borderRenderer(token) {
    return <Div padding={2}><Div height={400} border={token}></Div></Div>;
}

export function boxShadowRenderer(token) {
    return <Div paddingRight={4}><Div boxShadow={token} marginY={3} height={400}></Div></Div>;
}

export function durationRenderer() {
    return <Div paddingRight={4}><Div marginY={3} height={400}></Div></Div>;
}

export function easingRenderer() {
    return <Div paddingRight={4}><Div marginY={3} height={400}></Div></Div>;
}

export function fontSizeRenderer(token) {
    return <Div height={960} display="flex" alignItems="center" justifyContent="start"><Text fontSize={token} lineHeight={1}>Ag</Text></Div>;
}

export function fontWeightRenderer(token) {
    return <Flex height={320} alignItems="center"><Text fontWeight={token} fontSize={6} lineHeight={1}>Ag</Text></Flex>;
}

export function iconRenderer(token) {
    if (token === "samoyed") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><InfoCircleMajorIcon fill={token} /></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><InfoCircleMajorIcon fill={token} /></Div>;
    }
}

export function lineHeightRenderer(token) {
    return <Div display="inline-block" paddingX={2} lineHeight={token} borderRadius={2}><Span lineHeight={token}>Ag</Span></Div>;
}

export function radiiRenderer(token) {
    if (token === "circular") {
        return <Div height={240} width={240} borderRadius={token} border="primary"></Div>;
    } else {
        return <Div height={240} width="3.5rem" borderRadius={token} border="primary"></Div>;
    }
}

export function sizingRenderer() {
    return <Div></Div>;
}

export function spacingRenderer(token) {
    return <Div height={240} width={token} backgroundColor="primary" borderRadius={2}></Div>;
}

export function textRenderer(token) {
    if (token === "#FFFFFF") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><Text marginLeft={1} color={token} size="lg">Moon</Text></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><Text marginLeft={1} color={token} size="lg">Moon</Text></Div>;
    }
}

TokenTable.propTypes = propTypes;
