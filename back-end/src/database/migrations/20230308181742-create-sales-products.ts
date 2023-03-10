import { QueryInterface, DataTypes } from 'sequelize';


 export const up = async (queryInterface:QueryInterface, Sequelize:any) => {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sales',
          key: 'id',
        },
        primaryKey: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
        primaryKey: true,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  }

  const down = async (queryInterface:QueryInterface) => {
    await queryInterface.dropTable('sales_products');
  }
