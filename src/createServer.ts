import express, { Request, Response } from 'express';
import { phonesRouter } from './routes/phones.router';

export const createServer = () => {
  const app = express();

  app.use(express.json());

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  });

  app.use('/phones', phonesRouter);

  return app;
};
