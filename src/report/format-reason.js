// @flow

import type { Reason } from "../types";

export default function(reason: Reason): string {
  return `${reason.type}: ${reason.accuracy.toFixed(2)}%`;
}
