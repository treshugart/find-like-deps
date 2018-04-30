// @flow

import test from "ava";
import formatReason from "../format-reason";

test("averages reasons", t => {
  t.is(formatReason({ accuracy: 50, type: "name" }), "name: 50.00%");
});
