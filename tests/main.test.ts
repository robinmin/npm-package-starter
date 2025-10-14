import { square } from "mylib";
import { expect, it } from "vitest";

it("should work correctly with imported package", () => {
  expect(square(3)).toBe(9);
  expect(square(-5)).toBe(25);
});
