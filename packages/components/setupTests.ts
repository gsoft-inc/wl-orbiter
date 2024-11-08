import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import ResizeObserver from "resize-observer-polyfill";
import { jest } from "@jest/globals";

// this break since we changed to ESM, don't know why
// @ts-ignore
global.ResizeObserver = ResizeObserver;

global.jest = jest;
