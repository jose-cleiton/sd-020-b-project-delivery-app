import { QueryInterface, DataTypes, Sequelize } from 'sequelize';




export const up = async (queryInterface:QueryInterface, Sequelize:any) => {
   await queryInterface.createTable('products', {
     id: {
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
       type: Sequelize.INTEGER
     },
     name: {
       allowNull: false,
       type: Sequelize.STRING,
     },
     price: {
       allowNull: false,
       type: Sequelize.DECIMAL(10,2),
     },
     url_image: {
       allowNull: false,
       type: Sequelize.STRING,
     }
   })
};
  


  export const down = async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('products')
  }
