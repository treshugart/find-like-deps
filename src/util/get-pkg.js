// @flow

import path from "path";

export default function(pkg: string) {
  return require(path.join(process.cwd(), "node_modules", pkg, "package.json"));
}
