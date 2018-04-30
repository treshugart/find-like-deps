// @flow

import compareArrayOfWords from "./array-of-words";

const regexNonWord = /[^\w]/;

export default function(src: string, dst: string): number {
  const srcWords = src.split(regexNonWord);
  const dstWords = dst.split(regexNonWord);
  return compareArrayOfWords(srcWords, dstWords);
}
