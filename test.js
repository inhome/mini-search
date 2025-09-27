"use strict";
var assert = require("assert");
var lib = require("./index");

assert.strictEqual(lib.normalize(" ＡＢＣ "), "abc");
assert.strictEqual(lib.normalize("Hello"), "hello");

assert.deepStrictEqual(lib.tokens(" one   two "), ["one", "two"]);
assert.deepStrictEqual(lib.tokens(""), []);

assert.strictEqual(lib.score("Node notes", "node"), 2);
assert.strictEqual(lib.score("Node", "node"), 3);
assert.strictEqual(lib.score("Node", "css"), -1);

var results = lib.search([{ title: "Node notes" }, { title: "Node" }, { title: "CSS" }], "node");
assert.deepStrictEqual(results.map(function (item) { return item.title; }), ["Node", "Node notes"]);

