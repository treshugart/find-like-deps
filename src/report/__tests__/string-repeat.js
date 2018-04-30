// @flow

import test from "ava";
import stringRepeat from "../string-repeat";

test("averages reasons", t => {
  t.deepEqual(stringRepeat("=", 3), "===");
});
