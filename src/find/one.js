// @flow

import compareOne from "../compare/one";
import getDeps from "../util/get-deps";
import type { Pkg, Result } from "../types";

export default function(src: string, dst: Array<string>): Array<Result> {
  return dst.map(d => compareOne(src, d));
}
