import { Router } from 'express';
import { Sequelize } from 'sequelize';
import UserService from '../service/users-service';

export default class AppRouter {
  public router: Router;
  private userService: UserService;

  constructor(private sequelize: Sequelize) {
    this.router = Router();
    this.userService = new UserService(sequelize);
    this.routes();
  }

  private routes(): void {
    this.router.get('/users', async (req, res) => {
      const users = await this.userService.getAllUsers();
      res.send(users);
    });
  }
}
