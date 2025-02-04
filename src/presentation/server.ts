import express from 'express';

export interface Options {
  port?: number;
}

export class Server {

  private readonly port: number;
  public readonly app = express();
  

  constructor(options: Options) {
    const { port = 8000 } = options;
    this.port = port;
  }

  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    });
  }
}
