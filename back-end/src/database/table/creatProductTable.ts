// userTable.ts

import { DataTypes } from 'sequelize';

export const creatProductTable = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10,2),
  },
  url_image: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}
