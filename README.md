# find-like-deps

A CLI utility and library for finding similar dependencies within a project.

## Installing

```
npm i find-like-deps
```

## Usage

```
$ find-like-deps --help

Takes a dependency as input and finds similar dependencies in your project based on description and keywords.

Usage
  $ find-like-deps

Options
  --explain   Show reasons for overall accuracy calculation.
  --packages  The packages to compare to the ones in the package.json.
  --threshold Only show dependencies who's accuracy is above this number.

Examples
  $ find-like-deps
  $ find-like-deps . --packages dep1,dep2
```
