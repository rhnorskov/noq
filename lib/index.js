import { keyboard, screen, Key, getActiveWindow } from "@nut-tree/nut-js";

import { logger } from "./logger.js";
import { hasInternetConnection } from "./network.js";
import {
  isDisconnectedButtonVisible,
  isEnterWorldButtonVisible,
  isReconnectButtonVisible,
} from "./states.js";

import "@nut-tree/template-matcher";

screen.config.resourceDirectory = "./images";

try {
  let isWindowValid = false;

  setInterval(async () => {
    const window = await getActiveWindow();
    const title = await window.title;

    if (title !== "World of Warcraft") {
      isWindowValid = false;
      logger.info(`Window "${title}" is not valid`);
      return;
    } else {
      if (!isWindowValid) {
        logger.info(`Window "${title}" is valid`);
      }
      isWindowValid = true;
    }

    if (await isDisconnectedButtonVisible()) {
      logger.info("You've been disconnected");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      return;
    }

    if (await isReconnectButtonVisible()) {
      if (!(await hasInternetConnection())) {
        logger.info("No internet connection");
        return;
      }
      logger.info("Reconnecting...");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      return;
    }

    if (await isEnterWorldButtonVisible()) {
      logger.info("You've been logged out, entering world");
      keyboard.pressKey(Key.Enter);
      keyboard.releaseKey(Key.Enter);
      return;
    }
  }, 1000);
} catch (error) {
  logger.error(error);
}
