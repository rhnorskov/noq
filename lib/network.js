import dns from "dns";

import { logger } from "./logger.js";

export async function hasInternetConnection() {
  return new Promise((resolve, reject) => {
    dns.resolve("google.com", (err) => {
      if (err) {
        logger.debug("No internet connection");
        reject(false);
      } else {
        logger.debug("Internet connection established");
        resolve(true);
      }
    });
  });
}
