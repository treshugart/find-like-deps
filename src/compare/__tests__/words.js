// @flow

import test from "ava";
import words from "../words";

test("same", t => {
  t.is(words("one", "one"), 100);
});

test("stemmed", t => {
  t.is(words("different", "differently"), 50);
});

test("double-metaphoned", t => {
  t.is(words("ran", "running"), 25);
});

test("levenshtein", t => {
  t.is(words("one", "two"), 0);
  t.is(words("something", "smething"), 25);
});
