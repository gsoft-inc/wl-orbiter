import { ThemeProvider, ThemeComputedStyle, type FontWeightProp, type PaddingProp, type ColorSchemeOrSystem } from "@components/styling";
import { Div, Span } from "@components/html";
import { Flex } from "@components/layout";
import { DocsContext } from "@storybook/addon-docs";
import { InfoIcon, type CreatedIconProps } from "@hopper-ui/icons";
import { Table } from "@stories/components";
import { Text } from "@components/typography";
import { useEffect, useContext, useRef, useState, type ReactNode } from "react";

function toRowValues({ token, variable, itemRenderer }, docsContext, themeComputedStyle) {
    const valueTest = themeComputedStyle ? themeComputedStyle.getPropertyValue(variable) : "N/A";

    return [
        token,
        variable,
        valueTest,
        itemRenderer(token)
    ];
}

interface Token {
    token: string;
    variable: string;
    itemRenderer: (token: string) => ReactNode;
}

interface TokenTableProps {
    tokens: Token[];
}

export function TokenTable({ tokens }: TokenTableProps) {
    const docsContext = useContext(DocsContext);
    const [colorScheme, setColorScheme] = useState<ColorSchemeOrSystem>("light");
    const [rows, setRows] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        // we need to delay this until the ref is set
        if (ref.current) {
            setRows(tokens.map(x => toRowValues(x, docsContext, new ThemeComputedStyle(ref))));
        }
        // color scheme in the dependency array so it refreshes when the color scheme changes
    }, [tokens, docsContext, ref, colorScheme]);

    useEffect(() => {
        // this is not the best way to do this, but it works for now in Storybook Version 8
        // @ts-ignore
        setColorScheme(docsContext.store.userGlobals.globals.theme);
    }, [docsContext]);

    return (
        // eslint-disable-next-line react/destructuring-assignment
        <ThemeProvider ref={ref} colorScheme={colorScheme}>
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

export function backgroundRenderer(token: string) {
    return <Div height={400} backgroundColor={token}></Div>;
}

export function borderRenderer(token: string) {
    return <Div padding="inset-md"><Div height={400} border={token}></Div></Div>;
}

export function boxShadowRenderer(token: string) {
    return <Div paddingRight={160}><Div boxShadow={token} marginY="0.75rem" height={400}></Div></Div>;
}

export function durationRenderer() {
    return <Div paddingRight={160}><Div marginY="0.75rem" height={400}></Div></Div>;
}

export function easingRenderer() {
    return <Div paddingRight={160}><Div marginY="0.75rem" height={400}></Div></Div>;
}

export function fontSizeRenderer(token: string) {
    return <Div height={960} display="flex" alignItems="center" justifyContent="start"><Text fontSize={token} lineHeight={1}>Ag</Text></Div>;
}

export function fontFamilyRenderer(token: string) {
    return <Div height={960} display="flex" alignItems="center" justifyContent="start"><Text fontFamily={token} lineHeight={1}>Ag</Text></Div>;
}

export function fontWeightRenderer(token: FontWeightProp) {
    return <Flex height={320} alignItems="center"><Text fontWeight={token} fontSize="1.375rem" lineHeight={1}>Ag</Text></Flex>;
}

export function iconRenderer(token: CreatedIconProps["fill"] | "samoyed") {
    if (token === "samoyed") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><InfoIcon UNSAFE_fill={token} /></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><InfoIcon fill={token} /></Div>;
    }
}

export function lineHeightRenderer(token: string) {
    return <Div display="inline-block" paddingX={80} lineHeight={token} borderRadius="rounded-md"><Span lineHeight={token}>Ag</Span></Div>;
}

export function radiiRenderer(token: string) {
    if (token === "circular") {
        return <Div height={240} width={240} borderRadius={token} border="neutral"></Div>;
    } else {
        return <Div height={240} width="3.5rem" borderRadius={token} border="neutral"></Div>;
    }
}

export function sizingRenderer(token: string) {
    return <Div width={token} height="24px" backgroundColor="primary"></Div>;
}

export function paddingRenderer(token: PaddingProp) {
    return (
        <Div display="flex" justifyContent="center" padding="inset-sm">
            <Div padding={token} display="inline-block" backgroundColor="primary">
                <Div backgroundColor="neutral" height={400} width={400}></Div>
            </Div>
        </Div>
    );
}

export function marginRenderer(token: string) {
    const isStack = token.includes("stack");


    if (!isStack) {
        return marginInlineRenderer(token);
    }

    return (
        <Div display="flex" alignItems="center" padding="inset-sm">
            <Div display="flex" backgroundColor="primary" border="neutral" height="40px" width="24px">
                <Div backgroundColor="neutral" marginTop={token} width="24px"></Div>
            </Div>
        </Div>
    );
}

export function marginInlineRenderer(token: string) {
    return (
        <Div display="flex" alignItems="center" padding="inset-sm">
            <Div display="inline-block" backgroundColor="primary" border="neutral" width="48px">
                <Div backgroundColor="neutral" height={240} marginLeft={token}></Div>
            </Div>
        </Div>
    );
}

export function textRenderer(token: string) {
    if (token === "#FFFFFF" || token === "samoyed") {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start" backgroundColor="#272626"><Text marginLeft={40} color={token} size="lg">Moon</Text></Div>;
    } else {
        return <Div height={400} display="flex" alignItems="center" justifyContent="start"><Text marginLeft={40} color={token} size="lg">Moon</Text></Div>;
    }
}
