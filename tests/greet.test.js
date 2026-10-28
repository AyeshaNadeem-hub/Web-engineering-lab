const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script");

test("greet returns correct message", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
