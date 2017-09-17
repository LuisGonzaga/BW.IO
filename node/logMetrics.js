const requestLogger = expressWinston.logger({
    transports: [
      new stackdriverTransport(),
      new winston.transports.Console({
        json: false,
        colorize: colorize
      })
    ],
    expressFormat: true,
    meta: false
  });

  const errorLogger = expressWinston.errorLogger({
    transports: [
      new stackdriverTransport(),
      new winston.transports.Console({
        json: true,
        colorize: colorize
      })
    ]
  });