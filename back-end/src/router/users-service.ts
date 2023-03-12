import { users, usersAttributes } from '../database/models/users';
import { Sequelize } from 'sequelize';

export default class UserService {
  private userModel: typeof users;

  constructor(private sequelize: Sequelize) {
    this.userModel = users.initModel(sequelize);
  }

  async getAllUsers(): Promise<usersAttributes[]> {
    return this.userModel.findAll();
  }

  async getUserById(id: number): Promise<usersAttributes | null> {
    return this.userModel.findByPk(id);
  }
}
