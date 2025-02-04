import express from 'express';

export class Server {

  public readonly app = express();

  constructor() {}

  async start() {
    const port = process.env.PORT || 8000;
    this.app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  }
}
