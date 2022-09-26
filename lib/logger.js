import { createLogger, transports, format } from "winston";

export const logger = createLogger({
  format: format.json(),
  transports: [
    new transports.Console({ level: "info", format: format.simple() }),
    new transports.File({ level: "debug", filename: "debug.log" }),
    new transports.File({ level: "error", filename: "error.log" }),
  ],
});
