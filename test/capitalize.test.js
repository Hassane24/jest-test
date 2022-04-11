import { capitalize } from "../code/capitalize";

test("Capitalize a single letter", () => {
    expect(capitalize("doodle")).toBe("Doodle")
})

test("Capitalize the first letter of a phrase", () => {
    expect(capitalize("draw a handsome face")).toBe("Draw A Handsome Face")
})

test("Capitalize the first letter of an all caps word", () => {
    expect(capitalize("DRAAW")).toBe("Draaw")
})

test("handle extra spaces", () => {
    expect(capitalize("yes     draw")).toBe("Yes Draw")
})