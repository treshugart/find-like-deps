// @flow

import test from "ava";
import getPkg from "../get-pkg";

test("returns pkg", t => {
  t.is(getPkg("ava").name, "ava");
});
