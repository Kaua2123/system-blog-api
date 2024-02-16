import cors from 'cors';
import express from 'express';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'uploads')));

export default app;
