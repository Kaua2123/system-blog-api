import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import router from './src/routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'uploads')));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
  next();
});

export default app;
