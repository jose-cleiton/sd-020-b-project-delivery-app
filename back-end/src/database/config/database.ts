import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  private static instance: Database;
  private sequelize: Sequelize;

  private constructor() {
    const dbName = process.env.DB_NAME || 'delivery-app';
    const dbUser = process.env.DB_USER || 'root';
    const dbPass = process.env.DB_PASS || '123456';
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = parseInt(process.env.DB_PORT || '3000');
    const dbDialect = process.env.DB_DIALECT as 'mysql' || 'mysql';
  
    this.sequelize = new Sequelize(dbName, dbUser, dbPass, {
      host: dbHost,
      port: dbPort,
      dialect: dbDialect,
    });
  }
  

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      await this.sequelize.authenticate();
      console.log('Database connection established');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  public getSequelize(): Sequelize {
    return this.sequelize;
  }
}

export default Database;
