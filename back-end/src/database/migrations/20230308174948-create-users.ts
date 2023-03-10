import { QueryInterface, DataTypes } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: any) => {
  await queryInterface.createTable('users', {
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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true, // visto no link https://stackoverflow.com/questions/28116187/unique-constraint-on-sequelize-column
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  })
};

export const down = async (queryInterface: QueryInterface, Sequelize: any) => {
  await queryInterface.dropTable('users')
};
