/* eslint-disable no-console */

interface Options {
  first?: boolean;
  second?: boolean;
}

export function test(options: Options | undefined) {
  // Remove this optional chain and tsc will fail this line
  // Add it in and lint will fail on line 14
  if (options.first !== false) {
    console.log("first");
  }
  if (options?.second !== false) {
    console.log("second");
  }
}
