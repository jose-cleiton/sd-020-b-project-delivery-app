import { QueryInterface } from 'sequelize';
import { salesTable } from '../table/salesTable';

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('sales', salesTable);
};

