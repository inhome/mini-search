"use strict";

function normalize(text) { return String(text).normalize("NFKC").toLowerCase().trim(); }

function tokens(text) { return normalize(text).split(/\s+/).filter(Boolean); }

function score(title, query) {
  const haystack = normalize(title), words = tokens(query);
  if (!words.length) return 0;
  if (!words.every(function (word) { return haystack.includes(word); })) return -1;
  return haystack === normalize(query) ? 3 : haystack.startsWith(normalize(query)) ? 2 : 1;
}

function search(items, query) {
  return items.map(function (item, index) { return { item: item, rank: score(item.title, query), index: index }; })
    .filter(function (entry) { return entry.rank >= 0; })
    .sort(function (a, b) { return b.rank - a.rank || a.index - b.index; })
    .map(function (entry) { return entry.item; });
}

module.exports = { normalize: normalize, tokens: tokens, score: score, search: search };
