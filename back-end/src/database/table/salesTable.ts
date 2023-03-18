import { DataTypes } from 'sequelize';

export const salesTable = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
       model: 'users',
       key: 'id'
    }
  },
  seller_id: {
   allowNull: false,
   type: DataTypes.INTEGER,
   references: {
      model: 'users',
      key: 'id'
   }
 },
 total_price: {
   allowNull: false,
   type: DataTypes.DECIMAL(10,2),
 },
 delivery_address: {
   allowNull: false,
   type: DataTypes.STRING,
 },
 delivery_number: {
   allowNull: false,
   type: DataTypes.STRING
 },
 sale_date: {
   allowNull: false,
   type: DataTypes.DATE,
 },
 status: {
   allowNull: false,
   type: DataTypes.STRING,
 }
}