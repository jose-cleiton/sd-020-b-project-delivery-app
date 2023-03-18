import { QueryInterface } from 'sequelize';
import { salesProductTable } from '../table/salesProductTable';

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('sales_products', salesProductTable);
};

