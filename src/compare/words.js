// @flow

import doubleMetaphone from "double-metaphone";
import fastLevenshtein from "fast-levenshtein";
import stemmer from "stemmer";

export default function(src: string, dst: string): number {
  if (src === dst) {
    return 100;
  }

  const srcStemmed = stemmer(src);
  const dstStemmed = stemmer(dst);

  if (srcStemmed === dstStemmed) {
    return 50;
  }

  const srcDoubleMetaphoned = doubleMetaphone(srcStemmed);
  const dstDoubleMetaphoned = doubleMetaphone(dstStemmed);

  if (srcDoubleMetaphoned.some(i => dstDoubleMetaphoned.indexOf(i) > -1)) {
    return 25;
  }

  const srcLen = src.length;
  const dstLen = dst.length;
  const maxLen = srcLen > dstLen ? srcLen : dstLen;
  const distance = fastLevenshtein.get(src, dst);
  return (maxLen - distance) / maxLen * 100;
}
