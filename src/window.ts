import { getActiveWindow } from "@nut-tree/nut-js";

import { logger } from "./logger.js";

export async function isActiveWindowValid() {
  const windowRef = await getActiveWindow();
  const title = await windowRef.title;
  logger.info(title);
  return title === "World of Warcraft";
}
