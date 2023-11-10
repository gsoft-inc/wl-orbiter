import { ThemeProvider, ThemeComputedStyle } from "@components/styling";
import { arrayOf, func, shape, string } from "prop-types";

import { Div, Span } from "@components/html";
import { Flex } from "@components/layout";
import { DocsContext } from "@storybook/addon-docs";
import { InfoCircleMajorIcon } from "@components/icons";
import { Table } from "@stories/components";
import { Text } from "@components/typography";
import { useEffect, useContext, useRef, useState } from "react";

const propTypes = {
    tokens: arrayOf(shape({
        token: string.isRequired,
        variable: string.isRequired,
        itemRenderer: func.isRequired
    })).isRequired
};

function toRowValues({ token, variable, itemRenderer }, docsContext, themeComputedStyle) {
    const valueTest = themeComputedStyle ? themeComputedStyle.getPropertyValue(variable) : "N/A";

    return [
        token,
        variable,
        valueTest,
        itemRenderer(token)
    ];
}

export function TokenTable({ tokens }) {
    const docsContext = useContext(DocsContext);
    const [rows, setRows] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        // we need to delay this until the ref is set
        setRows(tokens.map(x => toRowValues(x, docsContext, new ThemeComputedStyle(ref))));
    }, [tokens, docsContext, ref]);

    return (
        // eslint-disable-next-line react/destructuring-assignment
        <ThemeProvider ref={ref} colorScheme={docsContext.globals.colorScheme}>
            <Table
                className="token-table"
                columns={[
                    { title: "Token", headerStyle: { width: "325px" }, rowClassName: "code" },
                    { title: "CSS Variable", headerStyle: { width: "350px" }, rowClassName: "code" },
                    { title: "Value", headerStyle: { width: "225px" }, rowClassName: "code" },
                    { title: "Example", headerStyle: { width: "275px" }, rowClassName: "example", rowStyle: { backgroundColor: "var(--hop-neutral-surface)" } }
                ]}
                rows={rows}
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
    return <Div paddingRight={160}><Div boxShadow={token} marginY="0.75rem" height={400}></Div></Div>;
}

export function durationRenderer() {
    return <Div paddingRight={160}><Div marginY="0.75rem" height={400}></Div></Div>;
}

export function easingRenderer() {
    return <Div paddingRight={160}><Div marginY="0.75rem" height={400}></Div></Div>;
}

export function fontSizeRenderer(token) {
    return <Div height={960} display="flex" alignItems="center" justifyContent="start"><Text fontSize={token} lineHeight={1}>Ag</Text></Div>;
}

export function fontFamilyRenderer(token) {
    return <Div height={960} display="flex" alignItems="center" justifyContent="start"><Text fontFamily={token} lineHeight={1}>Ag</Text></Div>;
}

export function fontWeightRenderer(token) {
    return <Flex height={320} alignItems="center"><Text fontWeight={token} fontSize="1.375rem" lineHeight={1}>Ag</Text></Flex>;
}

export function iconRenderer(token) {
    if (token === "samoyed") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><InfoCircleMajorIcon fill={token} /></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><InfoCircleMajorIcon fill={token} /></Div>;
    }
}

export function lineHeightRenderer(token) {
    return <Div display="inline-block" paddingX={80} lineHeight={token} borderRadius="rounded-md"><Span lineHeight={token}>Ag</Span></Div>;
}

export function radiiRenderer(token) {
    if (token === "circular") {
        return <Div height={240} width={240} borderRadius={token} border="neutral"></Div>;
    } else {
        return <Div height={240} width="3.5rem" borderRadius={token} border="neutral"></Div>;
    }
}

export function sizingRenderer(token) {
    return <Div width={token} height="24px" backgroundColor="primary"></Div>;
}

export function paddingRenderer(token) {
    return (
        <Div display="flex" justifyContent="center" padding={1}>
            <Div padding={token} display="inline-block" backgroundColor="primary">
                <Div backgroundColor="neutral" height={400} width={400}>

                </Div>
            </Div>
        </Div>
    );
}

export function marginRenderer(token) {
    const isStack = token.includes("stack");


    if (!isStack) {
        return marginInlineRenderer(token);
    }

    return (
        <Div display="flex" alignItems="center" padding={1}>
            <Div display="flex" backgroundColor="primary" border="neutral" height="40px" width="24px">
                <Div backgroundColor="neutral" marginTop={token} width="24px">

                </Div>
            </Div>
        </Div>
    );
}

export function marginInlineRenderer(token) {
    return (
        <Div display="flex" alignItems="center" padding={1}>
            <Div display="inline-block" backgroundColor="primary" border="neutral" width="48px">
                <Div backgroundColor="neutral" height={240} marginLeft={token}>

                </Div>
            </Div>
        </Div>
    );
}

export function textRenderer(token) {
    if (token === "#FFFFFF" || token === "samoyed") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><Text marginLeft={40} color={token} size="lg">Moon</Text></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><Text marginLeft={40} color={token} size="lg">Moon</Text></Div>;
    }
}

TokenTable.propTypes = propTypes;
