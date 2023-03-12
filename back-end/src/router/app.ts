import express from 'express';
import Database from '../database/config/database';
import UserService from './users-service';

const app = express();
const port = 3000;

const sequelize = Database.getInstance();
const userService = new UserService(sequelize);

app.get('/users', async (_req, res) => {
  const users = await userService.getAllUsers();
  res.send(users);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
