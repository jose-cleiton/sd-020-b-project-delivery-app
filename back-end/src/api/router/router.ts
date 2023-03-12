import { Router } from 'express';
import { Sequelize } from 'sequelize';
import UserService from '../mvc/service/users-service';
import UsersController from '../mvc/controller/UsersController';

export default class AppRouter {
  public router: Router;

  constructor(private sequelize: Sequelize) {
    this.router = Router();
    const userService = new UserService(sequelize);
    const usersController = new UsersController(userService);
    this.routes(usersController);
  }

  private routes(usersController: UsersController): void {
    this.router.get('/users', usersController.getAllUsers());
  }
}
