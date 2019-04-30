import Sequelize from 'sequelize';
import { mysql } from '../config/index';

const sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  protocol: null,
  logging: false,
  dialect: 'mysql',
  omitNull: true,

  native: true,
  define: {
    underscored: false,
    freezeTableName: false,
    syncOnAssociation: true,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
  syncOnAssociation: true,
  pool: { max: 5, idle: 30 },
  language: 'en',
});

module.exports = { sequelize, Sequelize };

