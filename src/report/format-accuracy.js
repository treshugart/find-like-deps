// @flow

import reportCalculateAccuracy from "./calculate-accuracy";
import type { Reasons } from "../types";

export default function(reasons: Reasons) {
  return Math.round(reportCalculateAccuracy(reasons)) + "%";
}
