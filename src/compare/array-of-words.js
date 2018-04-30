// @flow

export default function(src: Array<string>, dst: Array<string>) {
  if (src.join("") === dst.join("")) {
    return 100;
  }
  return 0;
}
