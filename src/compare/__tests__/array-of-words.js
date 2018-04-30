// @flow

import test from "ava";
import arrayOfWords from "../array-of-words";

test("different", t => {
  t.is(arrayOfWords(["test1", "test2"], ["test1", "test3"]), 0);
});

test("same", t => {
  t.is(arrayOfWords(["test1", "test2"], ["test1", "test2"]), 100);
});
