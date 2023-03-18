import { QueryInterface } from 'sequelize';
import { creatProductTable } from '../table/creatProductTable';

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('products', creatProductTable);
};

