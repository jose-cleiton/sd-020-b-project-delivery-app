import { Dialect, Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME || 'delivery-app' as string
const dbUser = process.env.DB_USER || 'root' as string
const dbHost = process.env.DB_HOST || 'localhost' as string
const dbDriver = process.env.DB_DIALECT || 'mysql' as Dialect
const dbPassword = process.env.DB_PASS || '123456'

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver as Dialect // adicione o dialeto aqui
})

export default sequelizeConnection
