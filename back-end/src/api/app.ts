import express, { Express } from 'express';
import Database from '../database/config/database';
import AppRouter from './router/router';

import { ExpressAsyncErrorMiddleware } from '../middlewares/express-async-errors.middleware';

class App {
  private app: Express;
  private PORT: number | string;
  private sequelize: any; // ou tipo mais específico dependendo da implementação do Database
  private appRouter: AppRouter;

  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 3000;
    this.sequelize = Database.getInstance();
    this.appRouter = new AppRouter(this.sequelize);

    this.config();
  }

  private config() {
    this.app.use(express.json());
    this.app.use(this.appRouter.router);
  }

  private startMiddlewares(): void {
    this.app.use(ExpressAsyncErrorMiddleware.handle);
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`🚀 Server started on port ${this.PORT}, http://localhost:${this.PORT}`);
    });
  }
}

export { App }
