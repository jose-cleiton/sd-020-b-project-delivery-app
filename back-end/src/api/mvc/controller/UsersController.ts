import { Request, Response } from 'express';
import UserService from '../service/users-service';

export default class UsersController {
  constructor(private userService: UserService) {}

  public getAllUsers() {
    return async (req: Request, res: Response) => {
      const users = await this.userService.getAllUsers();
      res.send(users);
    };
  }
}
