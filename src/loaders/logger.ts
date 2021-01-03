import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
import fs from "fs";

const logDir = 'logs';
const { combine, timestamp, printf } = winston.format;

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    logFormat
  ),
  transports: [
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/info',
      filename: `%DATE%.info.log`,
      maxFiles: 30,
      zippedArchive: true
    }),
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true
    })
  ]
});

logger.add(new winston.transports.Console({
  format: combine(
    winston.format.colorize(),
    winston.format.simple()
  )
}));

export default logger;