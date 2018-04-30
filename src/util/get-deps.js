// @flow

import type { Pkg } from "../types";

export default function(pkg: Pkg): Array<string> {
  return Object.keys({
    ...pkg.dependencies,
    ...pkg.devDependencies,
    ...pkg.optionalDependencies,
    ...pkg.peerDependencies
  });
}
