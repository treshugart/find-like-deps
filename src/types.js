// @flow

export type Pkg = {
  name?: string,
  description?: string,
  dependencies?: {},
  devDependencies?: {},
  optionalDependencies?: {},
  peerDependencies?: {}
};

export type Reason = {
  accuracy: number,
  type: string
};

export type Reasons = Array<Reason>;

export type Result = {
  name: string,
  reasons: Reasons
};

export type Results = {
  [string]: Array<Result>
};
