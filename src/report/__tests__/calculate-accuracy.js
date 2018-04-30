// @flow

import test from "ava";
import calculateAccuracy from "../calculate-accuracy";

test("averages reasons", t => {
  t.is(
    calculateAccuracy([
      { accuracy: 25, type: "description" },
      { accuracy: 50, type: "name" }
    ]),
    37.5
  );
});
