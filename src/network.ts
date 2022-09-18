import { resolve } from "dns/promises";

import { logger } from "./logger.js";

export async function hasInternetConnection() {
  try {
    await resolve("www.google.com");
    return true;
  } catch (error) {
    logger.error(error);
    return false;
  }
}
