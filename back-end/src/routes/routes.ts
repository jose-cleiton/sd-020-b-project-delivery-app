import express, { Router, Request, Response } from 'express';

class DeucertoRoute {
  public router: Router;

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
    this.init();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.handleDeucerto);
  }

  private init(): void {
    this.router.get('/', this.handleIndex);
  }

  private handleIndex(req: Request, res: Response): void {
    res.status(200).json({ message: 'Rota inicial' });
  }
  private handleDeucerto(req: Request, res: Response): void {
    res.status(200).json({ message: 'Deucerto' });
  }
}

export default DeucertoRoute;
