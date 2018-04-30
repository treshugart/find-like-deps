// @flow

import indentString from "indent-string";
import stripIndent from "strip-indent";
import formatAccuracy from "./format-accuracy";
import formatReason from "./format-reason";
import reportFilter from "./filter";
import stringList from "./string-list";
import stringRepeat from "./string-repeat";
import type { Results } from "../types";

type Options = {
  explain?: boolean,
  threshold?: number
};

const defaultOptions = {
  explain: false,
  threshold: 50
};

export default function(results: Results, options?: Options): string {
  const opt = { ...defaultOptions, ...options };
  return Object.keys(results)
    .map(key => {
      const keyBar = stringRepeat("=", key.length);
      const filteredResults = results[key].filter(reportFilter(opt.threshold));

      // If there's no results, then don't show anything.
      if (filteredResults.length === 0) {
        return "";
      }

      const stringifiedResults = indentString(
        stringList(
          filteredResults.map(
            result =>
              `${result.name}: ${formatAccuracy(result.reasons)}${
                opt.explain
                  ? indentString(
                      stringList(result.reasons.map(formatReason)),
                      2
                    )
                  : ""
              }`
          )
        ),
        2
      );
      return `

${key}
${keyBar}
${stringifiedResults}
`;
    })
    .filter(Boolean)
    .join("");
}
