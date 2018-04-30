// @flow

import test from "ava";
import stringList from "../string-list";

test("averages reasons", t => {
  t.deepEqual(stringList(["item 1", "item 2"]), "\n- item 1\n- item 2");
});
