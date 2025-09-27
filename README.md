# search-ranking

A tiny deterministic search experiment for local lists.

Run `node test.js` from this folder.

## normalize

Normalize compatibility forms and case. Locale-specific matching may require a different strategy.

## tokens

Whitespace tokenization is intentionally simple and does not segment languages without spaces.

## score

Rank exact text, full-query prefixes, then all-token substring matches. Negative one means no match.

## search

Keep original order for tied scores and never mutate the input list.
