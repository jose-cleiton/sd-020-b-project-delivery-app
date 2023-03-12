// Carrega as variáveis de ambiente a partir do arquivo .env
require("dotenv").config();

// Define o ambiente (por padrão, "test")
const environment = process.env.NODE_ENV || "test";

// Define as opções de conexão com o banco de dados MySQL
const options = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3306",
  database: process.env.DB_NAME || "delivery-app",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "123456",
  dialect: "mysql",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

// Exporta as opções de conexão como um módulo
module.exports = options;
