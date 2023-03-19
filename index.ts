import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';
import { Api } from "./src/routers/v1";

const api = new Api()
api.routes()

class App {
  public app: Application;
 
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send({
        status: 'OK',
        message: 'Success',
        timestamp: new Date(),
        unixTimestamp: Math.round(new Date().getTime() / 1000),
      });
    });

    this.app.use('/api/v1', api.router)
  }
}


const port: number = Number(process.env.PORT);
const app = new App().app;
app.listen(port);

console.log(`Listening on port ${port}`);
