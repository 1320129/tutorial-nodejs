const Sequelize = require("sequelize");
const env = require("../config/environment");

const sequelize = new Sequelize(env.mysqlDB, env.mysqlUser, env.mysqlPassword, {
  host: env.mysqlHost,
  dialect: "mysql",
});

const Movie = sequelize.define("movie", {
  title: {
    type: Sequelize.STRING(50),
  },
  view: {
    type: Sequelize.INTEGER(),
  },
  genre: {
    type: Sequelize.STRING(50),
  },
  age: {
    type: Sequelize.INTEGER(),
  },
});

module.exports = {
  sequelize,
  Movie,
};
