// @flow

export default function(arr: Array<string>): string {
  const sep = "\n- ";
  return `${sep}${arr.join(sep)}`;
}
