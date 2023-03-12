import express from 'express';

import Database  from '../database/config/database';
import { UserService } from './users-service';
import UserRepository from './UsersRepository';

const app = express();
const port = process.env.DB_PORT || 3000;

const database = Database.getInstance();
const userRepository = new UserRepository(database.getSequelize());
const userService = new UserService(userRepository);

app.get('/users', async (req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});