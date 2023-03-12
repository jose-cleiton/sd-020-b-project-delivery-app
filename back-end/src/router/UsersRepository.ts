import { users, usersAttributes} from '../database/models/users';
import { Sequelize } from 'sequelize';

export default class UserRepository {
  private userModel: typeof users;

  constructor(private sequelize: Sequelize) {
    this.userModel = users.initModel(sequelize);
  }

  async findAll(): Promise<usersAttributes[]> {
    return this.userModel.findAll();
  }

  async findById(id: number): Promise<usersAttributes | null> {
    return this.userModel.findByPk(id);
  }

 
}
