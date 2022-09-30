import {
  keyboard,
  screen,
  Key,
  getActiveWindow,
  sleep,
} from "@nut-tree/nut-js";

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
  let isActive = false;

  while (true) {
    if (await hasInternetConnection()) {
      const activeWindow = await getActiveWindow();
      const windowTitle = await activeWindow.title;

      if (windowTitle === "World of Warcraft") {
        if (!isActive) {
          logger.info("WoW is active");
          isActive = true;
        }

        if (await isDisconnectedButtonVisible()) {
          logger.info("Disconnected button is visible");
          await keyboard.pressKey(Key.Enter);
          await keyboard.releaseKey(Key.Enter);
        } else if (await isEnterWorldButtonVisible()) {
          logger.info("Enter world button is visible");
          await keyboard.pressKey(Key.Enter);
          await keyboard.releaseKey(Key.Enter);
        } else if (await isReconnectButtonVisible()) {
          logger.info("Reconnect button is visible");
          keyboard.pressKey(Key.Enter);
          await keyboard.releaseKey(Key.Enter);
        } else {
          logger.info("Nothing to do");
        }
      } else {
        logger.info("World of Warcraft is not active");
        isActive = false;
      }
    } else {
      logger.info("Internet connection is not available");
    }

    await sleep(5000);
  }
} catch {
  logger.error(error);
}
