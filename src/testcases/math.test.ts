import { add, multiply, subtract } from "../math";

describe("Testing math.ts", function () {
  describe("Testing add function", function () {
    it("should add two numbers", function () {
      expect(add(1, 2)).toEqual(3);
    });
    it("should accept 0", function () {
      expect(add(1, 0)).toEqual(1);
    });
    it("should accept negative number", function () {
      expect(add(1, -1)).toEqual(0);
    });
  });

  describe("Testing multiply function", function () {
    it("should multiply two numbers", function () {
      expect(multiply(1, 2)).toEqual(2);
    });
    it("should accept 0", function () {
      expect(multiply(1, 0)).toEqual(0);
    });
    it("should accept negative number", function () {
      expect(multiply(1, -1)).toEqual(-1);
    });
  });

  describe("Testing subtract function", function () {
    it("should subtract two numbers", function () {
      expect(subtract(2, 1)).toEqual(1);
    });
    it("should subtract negative and positive number", function () {
      expect(subtract(-1, 1)).toEqual(-2);
    });
    it("should accept positive and negative number", function () {
      expect(subtract(1, -1)).toEqual(2);
    });
    it("should accept 0", function () {
      expect(subtract(1, 0)).toEqual(1);
    });
  });
});
