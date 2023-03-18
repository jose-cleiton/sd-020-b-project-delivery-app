import dotenv from "dotenv";

dotenv.config();

interface DbConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  dialect: "mysql";
  dialectOptions: {
    timezone: string;
  };
  logging: boolean;
}

const config: DbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || "delivery-app",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = config;
