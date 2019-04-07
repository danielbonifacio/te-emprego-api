module.exports = {
  app: {
    port: process.env.PORT || 4000,
  },
  db: {
    connectionString: process.env.MONGO_DB,
  },
};
