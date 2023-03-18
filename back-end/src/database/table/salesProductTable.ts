import { DataTypes } from 'sequelize';

export const salesProductTable = {
  sale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'sales',
      key: 'id',
    },
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'products',
      key: 'id',
    },
    primaryKey: true,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
};