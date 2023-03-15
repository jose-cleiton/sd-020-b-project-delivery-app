import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export class RouterHelloWord {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.home);
  }

  private home(req: Request, res: Response) {
    res.status(StatusCodes.OK).json({ message: 'Hello World!!' });
  }
}
