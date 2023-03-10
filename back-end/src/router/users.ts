import express, { Request, Response } from 'express';
import { users } from '../database/models/users';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const userList = await users.findAll();  
    
    res.json(userList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error!');
  }
});

export default router;
