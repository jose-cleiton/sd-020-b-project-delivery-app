import express, { Application } from 'express';
import cors from 'cors';
import { ExpressAsyncErrorMiddleware } from '../middlewares/express-async-errors.middleware';
import DeucertoRoute from '../routes/routes';


class App {
  private PORT: number;
  public app: Application;

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

    // Adicione a rota aqui
    this.app.use('/', new DeucertoRoute().router);
    this.app.use('/deucerto', new DeucertoRoute().router);

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
