"use strict";

function normalize(text) { return String(text).normalize("NFKC").toLowerCase().trim(); }

module.exports = { normalize: normalize };
