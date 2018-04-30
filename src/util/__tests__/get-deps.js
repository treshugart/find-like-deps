// @flow

import test from "ava";
import getDeps from "../get-deps";

test("returns deps", t => {
  t.deepEqual(
    getDeps({
      dependencies: {
        test1: "0.0.0"
      },
      devDependencies: {
        test2: "1.1.1"
      },
      optionalDependencies: {
        test3: "2.2.2"
      },
      peerDependencies: {
        test4: "3.3.3"
      },
      invalidDependencies: {
        test5: "4.4.4"
      }
    }),
    ["test1", "test2", "test3", "test4"]
  );
});
