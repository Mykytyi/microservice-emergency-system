import Pino from 'pino';

const logger = Pino({
  level: process.env.NODE_ENV === 'local-dev' ? 'debug' : 'info',
  formatters: {
    level: (level) => ({ level })
  },
  messageKey: 'message',
  timestamp: () => `,"time": "${new Date().toISOString()}"`,
  ...(process.env.NODE_ENV === 'local-dev'
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: false
          }
        }
      }
    : {})
});

const debugFn = (
  level: 'debug' | 'info' | 'warn' | 'error',
  message: string,
  ...interpolationValues: Array<any>
) => {
  // Here we can catch user and add its metadata to our logger
  logger[level](message, ...interpolationValues);
};

export default {
  debug: (message: string, ...interpolationValues: Array<any>) =>
    debugFn('debug', message, ...interpolationValues),
  info: (message: string, ...interpolationValues: Array<any>) =>
    debugFn('info', message, ...interpolationValues),
  warn: (message: string, ...interpolationValues: Array<any>) =>
    debugFn('warn', message, ...interpolationValues),
  error: (message: string, ...interpolationValues: Array<any>) =>
    debugFn('error', message, ...interpolationValues)
};
