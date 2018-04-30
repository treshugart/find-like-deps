// @flow

import calculateAccuracy from "./calculate-accuracy";
import type { Result } from "../types";

export default function(threshold: number) {
  return function(result: Result): boolean {
    for (const reason of result.reasons) {
      // Filter out same packages.
      if (reason.type === "name" && reason.accuracy === 100) {
        return false;
      }
    }

    if (calculateAccuracy(result.reasons) < threshold) {
      return false;
    }

    return true;
  };
}
