

import { QueryInterface } from 'sequelize';
import { userTable } from '../table/userTable';

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable('users', userTable);
};

