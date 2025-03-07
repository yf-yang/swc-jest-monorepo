import { formatResult } from "../src/index";
import { describe, it, expect } from "@jest/globals";

describe("Package A", () => {
  describe("formatResult", () => {
    it("should format the calculation result correctly", () => {
      const result = formatResult(10);

      expect(result).toBe("The result is: 410");
    });
  });
});
