import { Sequelize } from 'sequelize';
import { users, usersAttributes } from '../models/users';

export default class UserService {
  private userModel: typeof users;

  constructor(private sequelize: Sequelize) {
    this.userModel = users.initModel(sequelize);
  }

  async getAllUsers(): Promise<usersAttributes[]> {
    return this.userModel.findAll();
  }
}
