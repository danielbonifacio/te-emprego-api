module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
  requests: {
    rateLimit: {
      window: 60 * 1000, // ms
      max: 5,
    },
    slowDown: {
      window: 15 * 60 * 1000, // ms
      delayAfter: 100,
      delayMs: 100,
    },
  },
};
