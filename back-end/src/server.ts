import dotenv from 'dotenv';
import App from './api/app';

dotenv.config();

class Server {
  private app: App;

  constructor() {
    this.app = new App();
  }

  public start(): void {
    // Não é necessário chamar nenhum método adicional para iniciar a aplicação
  }
}

const server = new Server();
server.start();
