// @flow

import test from "ava";
import sentences from "../sentences";

test("different", t => {
  t.is(sentences("I am sentence 1.", "I am sentence 2."), 0);
});

test("same", t => {
  t.is(sentences("I am sentence 1.", "I am sentence 1."), 100);
});
