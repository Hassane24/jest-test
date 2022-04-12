import { arrayAnalyzer } from "../code/analyzerArray";

test("Checks for the minimum value", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Checks for the maximum value", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Checks for the average value", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Checks for the length of the array", () => {
  expect(arrayAnalyzer([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
