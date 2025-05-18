"use strict";

function normalize(text) { return String(text).normalize("NFKC").toLowerCase().trim(); }

function tokens(text) { return normalize(text).split(/\s+/).filter(Boolean); }

module.exports = { normalize: normalize, tokens: tokens };
