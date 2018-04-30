// @flow

import test from "ava";
import formatAccuracy from "../format-accuracy";

test("averages reasons", t => {
  t.is(
    formatAccuracy([
      { accuracy: 25, type: "description" },
      { accuracy: 50, type: "name" }
    ]),
    "38%"
  );
});
