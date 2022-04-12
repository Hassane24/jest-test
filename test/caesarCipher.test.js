import { caesarCipher } from "../code/caesarCipher";

test("Shifts letters by a given amount", () => {
  expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
});

test("Handles negative numbers", () => {
  expect(caesarCipher("hello world", -10)).toBe("xubbe mehbt");
});

test("Handles large positive shifts", () =>
  expect(caesarCipher("hello world", 1000)).toBe("tqxxa iadxp"));

test("Handles capitals", () =>
  expect(caesarCipher("HeLlO WoRlD", 5)).toBe("MjQqT BtWqI"));
