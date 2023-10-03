import { ColorScheme } from "../useColorScheme";
import { Entry, JsonObject, JsonValue } from "type-fest";
import { isArray, isNil, isNumber, isString } from "../../../shared";

type VarsBucket = string[];

type StringArray = readonly string[];

type NumberArray = readonly number[];

type Array = StringArray | NumberArray;

export function normalizeVariable(name: string | number, prefix?: string) {
    return isNil(prefix) ? `--o-ui-${name}` : `--o-ui-${prefix}-${name}`;
}

export function getThemeClassName(themeName: string) {
    return `o-ui-${themeName}`;
}

export function getColorSchemeClassName(themeName: string, colorScheme: ColorScheme) {
    return `o-ui-${themeName}-${colorScheme}`;
}

function augmentPrefix(current: string, newPart: string) {
    return isNil(current) ? newPart : `${current}-${newPart}`;
}

function interpolateValue(value: string) {
    return value[0] === "$" ? `var(--o-ui-${value.substr(1)})` : value;
}

function appendString(name: string, value: string, prefix: string, bucket: VarsBucket) {
    bucket.push(`${normalizeVariable(`${name}`, prefix)}: ${interpolateValue(value.replace(/\s+/gm, " ").trim())};`);
}

function appendNumber(name: string, value: number, prefix: string, bucket: VarsBucket) {
    bucket.push(`${normalizeVariable(`${name}`, prefix)}: ${value};`);
}

function appendStringArray(values: StringArray, prefix: string, bucket: VarsBucket) {
    values.forEach((x, index) => {
        appendString(`${index + 1}`, x, prefix, bucket);
    });
}

function appendNumberArray(values: NumberArray, prefix: string, bucket: VarsBucket) {
    values.forEach((x, index) => {
        appendNumber(`${index + 1}`, x, prefix, bucket);
    });
}

function appendArray(values: Array, prefix: string, bucket: VarsBucket) {
    if (isString(values[0])) {
        appendStringArray(values as StringArray, prefix, bucket);
    } else {
        appendNumberArray(values as NumberArray, prefix, bucket);
    }
}

function appendJsonValue(name: string, value: JsonValue, prefix: string, bucket: VarsBucket) {
    if (isString(value)) {
        appendString(name, value, prefix, bucket);
    } else if (isNumber(value)) {
        appendNumber(name, value, prefix, bucket);
    } else if (isArray(value)) {
        appendArray(value as Array, augmentPrefix(prefix, name), bucket);
    } else {
        appendJsonObject(value as JsonObject, prefix, bucket);
    }
}

function appendJsonObject(values: JsonObject, prefix: string, bucket: VarsBucket) {
    Object.entries(values).forEach((x: Entry<JsonObject>) => {
        appendJsonValue(x[0], x[1], prefix, bucket);
    });
}

export const SpacePrefix = "sp";
export const SizingPrefix = "sz";
export const FontSizePrefix = "fs";
export const FontWeightPrefix = "fw";
export const LineHeightPrefix = "lh";
export const BorderRadiusPrefix = "br";
export const BoxShadowPrefix = "bs";
export const ColorPrefix = null;
