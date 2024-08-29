import { mergeRefs } from "@components/shared/index.js";

test("can merge refs", () => {
    const func1 = vi.fn();
    const func2 = vi.fn();

    const result = mergeRefs(func1, func2);

    result({});

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
});

test("filter out falsy values", () => {
    const func1 = vi.fn();
    const func2 = vi.fn();

    const result = mergeRefs(func1, null, func2, undefined);

    result({});

    expect(func1).toHaveBeenCalledTimes(1);
    expect(func2).toHaveBeenCalledTimes(1);
});

