// @flow

import findOne from "./one";
import type { Pkg, Results } from "../types";

export default function(src: Array<string>, dst: Array<string>): Results {
  return src.reduce((prev, curr) => {
    prev[curr] = findOne(curr, dst);
    return prev;
  }, {});
}
