require('dotenv').config();

import { Sequelize } from 'sequelize';
import { users } from '../../api/mvc/models/users';

export default class Database {
  private static instance: Sequelize;

  private constructor() {}

  static getInstance(): Sequelize {
    if (!Database.instance) {
      Database.instance = new Sequelize(
        process.env.DB_NAME || 'delivery-app',
        process.env.DB_USER || 'root',
        process.env.DB_PASSWORD || '123456',
        {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT) || 3306,
          dialect: 'mysql',
        }
      );
    }

    return Database.instance;
  }

  static getUsersModel(): typeof users {
    const sequelize = Database.getInstance();
    return users.initModel(sequelize);
  }
}
