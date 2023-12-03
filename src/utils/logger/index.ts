const logger = require("node-color-log");

export const log = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('black').bgColor('white').bold().log(...message);
}

export const debug = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('red').bgColor('blue').bold().log(...message);
}
export const red = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('red').bold().log(...message);
}
export const green = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('green').bold().log(...message);
}
export const yellow = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('yellow').bold().log(...message);
}

export const blue = (...message: any[]) => {
  logger.setLevel('debug');
  logger.color('blue').bold().log(...message);
}
