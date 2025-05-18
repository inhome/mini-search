"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.normalize(" ＡＢＣ "), "abc");
assert.strictEqual(lib.normalize("Hello"), "hello");

assert.deepStrictEqual(lib.tokens(" one   two "), ["one", "two"]);
assert.deepStrictEqual(lib.tokens(""), []);

