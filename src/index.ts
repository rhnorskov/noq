import screenshot from "screenshot-desktop";
import { counter } from "./counter.js";
import {
  down,
  left,
  mouse,
  Point,
  right,
  straightTo,
  up,
} from "@nut-tree/nut-js";
import "@nut-tree/template-matcher";

// for await (const count of counter(5, 1, 1000)) {
//   console.log(count);
// }

// const image = await screenshot({ screen: 0, format: "png" });

// console.log(image);

const target = new Point(500, 350);
await mouse.setPosition(target);
