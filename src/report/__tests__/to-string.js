// @flow

import test from "ava";
import toString from "../to-string";

const results = {
  pkg1: [
    {
      name: "dep1",
      reasons: [
        { accuracy: 25, type: "description" },
        { accuracy: 49, type: "name" }
      ]
    },
    {
      name: "dep2",
      reasons: [
        { accuracy: 25, type: "description" },
        { accuracy: 50, type: "name" }
      ]
    }
  ]
};

test("to-string", t => {
  t.snapshot(toString(results), "");
  t.snapshot(toString(results, { explain: true }));
  t.snapshot(toString(results, { threshold: 0 }));
  t.snapshot(toString(results, { explain: true, threshold: 0 }));
});
