const assert = require("assert");
const { isValidAmount } = require("../isValidAmount");

describe("isValidAmount", function () {
  it("accepts a positive number", function () {
    assert.strictEqual(isValidAmount(50), true);
  });
  it("rejects zero", function () {
    assert.strictEqual(isValidAmount(0), false);
  });
  it("rejects a negative number", function () {
    assert.strictEqual(isValidAmount(-5), false);
  });
  it("rejects NaN", function () {
    assert.strictEqual(isValidAmount(NaN), false);
  });
  it("rejects Infinity", function () {
    assert.strictEqual(isValidAmount(Infinity), false);
  });
});