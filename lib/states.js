import { imageResource, screen } from "@nut-tree/nut-js";

import { logger } from "./logger.js";

export async function isDisconnectedButtonVisible() {
  try {
    await screen.find(imageResource("disconnected.png"));

    return true;
  } catch (error) {
    logger.debug(error);
  }

  try {
    await screen.find(imageResource("disconnected_2.png"));

    return true;
  } catch (error) {
    logger.debug(error);
  }

  return false;
}

export async function isReconnectButtonVisible() {
  try {
    await screen.find(imageResource("reconnect.png"));

    return true;
  } catch (error) {
    logger.debug(error);
    return false;
  }
}

export async function isEnterWorldButtonVisible() {
  try {
    await screen.find(imageResource("enter_world.png"));

    return true;
  } catch (error) {
    logger.debug(error);
    return false;
  }
}
