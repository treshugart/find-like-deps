// @flow

import type { Reasons } from "../types";

export default function(reasons: Reasons): number {
  return (
    reasons.reduce((total, reason) => {
      return total + reason.accuracy;
    }, 0) / reasons.length
  );
}
