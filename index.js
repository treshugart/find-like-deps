#!/usr/bin/env flowde

// @flow

import meow from "meow";
import path from "path";
import findAll from "./src/find/all";
import getDeps from "./src/util/get-deps";
import getPkg from "./src/util/get-pkg";
import reportToString from "./src/report/to-string";

const args = meow(`
Usage
  $ find-like-deps

Options
  --explain   Show reasons for overall accuracy calculation.
  --packages  The packages to compare to the ones in the package.json.
  --threshold Only show dependencies who's accuracy is above this number.

Examples
  $ find-like-deps
  $ find-like-deps . --packages dep1,dep2
`);

const cwd = args.input[1] || process.cwd();
const pkg = require(path.join(cwd, "package.json"));
const dstDeps = getDeps(pkg);
const srcDeps = args.packgaes ? args.packages.split(",") : dstDeps;

console.log(
  reportToString(findAll(srcDeps, dstDeps), {
    explain: args.flags.explain,
    threshold: parseFloat(args.flags.threshold)
  })
);
