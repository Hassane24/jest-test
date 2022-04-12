import { calculator } from "../code/calculator";

test("Adds two numbers", () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test("Handles strings", () => {
  expect(calculator.add("5", "6")).toBe(11);
});

test("Adds two decimal numbers", () => {
  expect(calculator.add(2.5, 2.5)).toBeCloseTo(5);
});

test("Subtracts two numbers", () => {
  expect(calculator.substract(10, 5)).toBe(5);
});

test("Handles strings", () => {
  expect(calculator.substract("5", "6")).toBe(-1);
});

test("Multiplies two numbers", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test("Handles strings", () => {
  expect(calculator.multiply("5", "6")).toBe(30);
});

test("Divides two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("Cant devide by zero", () => {
  expect(calculator.divide(10, 0)).toBe("ERROR");
});

test("Handles strings ", () => {
  expect(calculator.divide("10", "5")).toBe(2);
});
