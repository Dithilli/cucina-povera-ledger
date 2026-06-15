import { describe, it, expect } from "vitest";
import { scaleQty } from "./scale";

describe("scaleQty", () => {
  it("returns the string unchanged at factor 1", () => {
    expect(scaleQty("1 1/2 cups", 1)).toBe("1 1/2 cups");
  });

  it("scales a mixed number down and keeps the unit", () => {
    expect(scaleQty("1 1/2 cups", 0.25)).toBe("3/8 cups");
  });

  it("scales a plain fraction", () => {
    expect(scaleQty("1/2 cup", 0.5)).toBe("1/4 cup");
  });

  it("scales a bare integer count", () => {
    expect(scaleQty("4", 0.25)).toBe("1");
    expect(scaleQty("8 oz", 0.5)).toBe("4 oz");
  });

  it("scales a whole number up into a mixed number", () => {
    expect(scaleQty("2 cups", 1.5)).toBe("3 cups");
    expect(scaleQty("1 lb", 1.5)).toBe("1 1/2 lb");
  });

  it("leaves non-numeric prose untouched", () => {
    expect(scaleQty("to taste", 0.25)).toBe("to taste");
    expect(scaleQty("a handful", 2)).toBe("a handful");
    expect(scaleQty("", 0.5)).toBe("");
  });

  it("scales every number in a compound quantity", () => {
    expect(scaleQty("1 onion, 1 carrot, 1 celery stalk", 2)).toBe(
      "2 onion, 2 carrot, 2 celery stalk"
    );
  });

  it("scales a number embedded in prose", () => {
    expect(scaleQty("Zest of 1 lemon", 0.5)).toBe("Zest of 1/2 lemon");
  });

  it("preserves a leading approximation marker", () => {
    expect(scaleQty("~3 lb", 2)).toBe("~6 lb");
  });
});
