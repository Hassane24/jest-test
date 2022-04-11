import { reverseString } from "../code/reverseString";

test("Reverse a word", () => {
    expect(reverseString("hello")).toBe("olleh")
})

test("Reverse a sentence", () => {
    expect(reverseString("Hello, my name is spongebob")).toBe("bobegnops si eman ym ,olleH")
})

test("Works with number and punctuation", () => {
    expect(reverseString("789,! 5qsd?")).toBe("?dsq5 !,987")
})

test("Reverse a white space", () => {
    expect(reverseString("")).toBe("")
})
