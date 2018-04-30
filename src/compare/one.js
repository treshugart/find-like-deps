// @flow

import compareArrayOfWords from "./array-of-words";
import compareSentences from "./sentences";
import compareWords from "./words";
import getPkg from "../util/get-pkg";
import type { Result } from "../types";

export default function(src: string, dst: string): Result {
  const srcPkg = getPkg(src);
  const dstPkg = getPkg(dst);
  return {
    name: dst,
    reasons: [
      {
        accuracy: compareSentences(srcPkg.description, dstPkg.description),
        type: "description"
      },
      {
        accuracy: compareArrayOfWords(
          srcPkg.keywords || [],
          dstPkg.keywords || []
        ),
        type: "keywords"
      },
      {
        accuracy: compareWords(src, dst),
        type: "name"
      }
    ]
  };
}
