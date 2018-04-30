// @flow

import test from "ava";
import filter from "../filter";

test("averages reasons", t => {
  t.false(
    filter(37.5)({
      name: "test",
      reasons: [
        { accuracy: 25, type: "description " },
        { accuracy: 49, type: "name" }
      ]
    })
  );
  t.true(
    filter(37.5)({
      name: "test",
      reasons: [
        { accuracy: 25, type: "description " },
        { accuracy: 50, type: "name" }
      ]
    })
  );
});
