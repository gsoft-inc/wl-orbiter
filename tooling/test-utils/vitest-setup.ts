import "@testing-library/jest-dom/vitest";
import ResizeObserver from "resize-observer-polyfill";


beforeAll(() => {
    global.ResizeObserver = ResizeObserver as any;
});