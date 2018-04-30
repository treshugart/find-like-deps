// @flow

export default function(str: string, repeat: number): string {
  return Array.from(Array(repeat))
    .map(() => str)
    .join("");
}
