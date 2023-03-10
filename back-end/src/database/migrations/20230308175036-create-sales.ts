import { QueryInterface, DataTypes } from 'sequelize';


export const up = async (queryInterface: QueryInterface, Sequelize: any) => {
  await queryInterface.createTable('sales', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
         model: 'users',
         key: 'id'
      }
    },
    seller_id: {
     allowNull: false,
     type: Sequelize.INTEGER,
     references: {
        model: 'users',
        key: 'id'
     }
   },
   total_price: {
     allowNull: false,
     type: Sequelize.DECIMAL(10,2),
   },
   delivery_address: {
     allowNull: false,
     type: Sequelize.STRING,
   },
   delivery_number: {
     allowNull: false,
     type: Sequelize.STRING
   },
   sale_date: {
     allowNull: false,
     type: Sequelize.DATE,
   },
   status: {
     allowNull: false,
     type: Sequelize.STRING,
   }
  })
};

export const down = async (queryInterface: QueryInterface, Sequelize: any) => {
  await queryInterface.dropTable('sales')
};
