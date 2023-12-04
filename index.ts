/* eslint-disable no-console */

interface Options {
  first?: boolean;
  second?: boolean;
}

export function test(options: Options | undefined) {
  if (options?.first !== false) {
    console.log("first");
  }
  // Lint incorrectly complains that this is an unnecessary condition
  // but seems to be fine with line 9.
  if (options?.second !== false) {
    console.log("second");
  }
}
