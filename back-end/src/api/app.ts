import express from 'express';
import cors from 'cors';
import { ExpressAsyncErrorMiddleware } from '../middlewares/express-async-errors.middleware';

class App {
  private PORT: number;
  public app: express.Application;

  constructor() {
    this.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
    this.app = express();

    this.config();
 
    this.startMiddlewares();
  }

 
  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  private startMiddlewares(): void {
    this.app.use(ExpressAsyncErrorMiddleware.handle);
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log('🚀 Server started on port', this.PORT);
    });
  }
}

export { App };
