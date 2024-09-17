const dotenv = require( 'dotenv' );
require('pg').defaults.parseInt8 = true;

dotenv.config();

const {
  MS_CFG_POSTGRES_DB,
  MS_CFG_POSTGRES_USER,
  MS_CFG_POSTGRES_PASSWORD,
  MS_CFG_POSTGRES_HOST,
  MS_CFG_POSTGRES_PORT,
  MS_CFG_DB_DIALECT,
  MS_CFG_POSTGRES_TEST_DB,
} = process.env;

module.exports = {
  development: {
    username: MS_CFG_POSTGRES_USER,
    password: MS_CFG_POSTGRES_PASSWORD,
    database: MS_CFG_POSTGRES_DB,
    host: MS_CFG_POSTGRES_HOST,
    port: Number(MS_CFG_POSTGRES_PORT),
    dialect: MS_CFG_DB_DIALECT,
    logging: false,
    define: {
      freezeTableName: true,
    },
    sync: true,
  },
  test: {
    username: MS_CFG_POSTGRES_USER,
    password: MS_CFG_POSTGRES_PASSWORD,
    database: MS_CFG_POSTGRES_TEST_DB,
    host: MS_CFG_POSTGRES_HOST,
    port: Number(MS_CFG_POSTGRES_PORT),
    dialect: MS_CFG_DB_DIALECT,
    logging: false,
    define: {
      freezeTableName: true,
    },
    sync: true,
  },
};