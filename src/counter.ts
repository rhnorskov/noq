import { setTimeout } from "timers/promises";

export function counter(start = 0, end = 10, delay = 1000) {
  return {
    async *[Symbol.asyncIterator]() {
      let count = start;

      while (start > end ? count >= end : count <= end) {
        yield count;
        count += start > end ? -1 : 1;
        await setTimeout(delay);
      }
    },
  };
}
