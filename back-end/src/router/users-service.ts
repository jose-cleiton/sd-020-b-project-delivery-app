import { usersAttributes } from '../database/models/users';
import UserRepository from './UsersRepository';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<usersAttributes[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async getUserById(id: number): Promise<usersAttributes | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }
}
