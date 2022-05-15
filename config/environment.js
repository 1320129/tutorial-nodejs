const environments = {
  development: {
    mysqlHost: "tutorial.chwfgejjmzzw.us-west-1.rds.amazonaws.com",
    mysqlUser: "jaehyuck",
    mysqlPassword: "shwogur31",
    mysqlDB: "tutorial",
  },
  production: {},
};

const nodeEnv = process.env.NODE_ENV || "development";
module.exports = environments[nodeEnv];
