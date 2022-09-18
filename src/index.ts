import { setInterval } from "timers/promises";

import { keyboard, screen, Key } from "@nut-tree/nut-js";

import { logger } from "./logger.js";
import { hasInternetConnection } from "./network.js";
import {
  isDisconnectedButtonVisible,
  isEnterWorldButtonVisible,
  isReconnectButtonVisible,
} from "./states.js";
import { isActiveWindowValid } from "./window.js";
import "@nut-tree/template-matcher";

screen.config.resourceDirectory = "./images";

try {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for await (const _interval of setInterval(5000)) {
    if (!(await isActiveWindowValid())) {
      console.log("Active window is not valid");
      continue;
    }

    if (await isDisconnectedButtonVisible()) {
      console.log("You've been disconnected");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      continue;
    }

    if (await isReconnectButtonVisible()) {
      if (!(await hasInternetConnection())) {
        console.log("No internet connection");
        continue;
      }
      console.log("Reconnecting...");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      continue;
    }

    if (await isEnterWorldButtonVisible()) {
      console.log("You've been logged out, entering world");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      continue;
    }
  }
} catch (error) {
  logger.error(error);
}
