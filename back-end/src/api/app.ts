import express from 'express';
import  {RouterHelloWord}  from '../routes/RouterHelloWord';
class App {
  public app = express();
  public port = process.env.APP_PORT || 3001;

  constructor() {
    // Adicionar os middlewares de body-parser e cors
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // Adicionar as rotas
    const homeController = new RouterHelloWord();
    this.app.use('/', homeController.router);

    // middleware errorHandler para lidar com erros personalizados

    this.app.listen(this.port, () => {
      console.clear();
      console.log(`🚀 Server started on port ${this.port}, http://localhost:${this.port}`);
    })
  }
}

export default App;
