// @flow

import test from "ava";
import one from "../one";

test("comparing two packages", t => {
  t.deepEqual(one("@babel/preset-env", "@babel/preset-flow"), {
    name: "@babel/preset-flow",
    reasons: [
      {
        accuracy: 0,
        type: "description"
      },
      {
        accuracy: 0,
        type: "keywords"
      },
      {
        accuracy: 77.77777777777779,
        type: "name"
      }
    ]
  });
});
