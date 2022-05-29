require("dotenv").config();

const environments = {
  development: {
    mysqlHost: process.env.CLIENT_HOST,
    mysqlUser: process.env.CLIENT_USER,
    mysqlPassword: process.env.CLIENT_PASSWORD,
    mysqlDB: process.env.MYSQLDB,
  },
  production: {},
};

const nodeEnv = process.env.NODE_ENV || "development";
module.exports = environments[nodeEnv];
