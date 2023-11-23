import express, { Application, Request, Response } from 'express';
import cors from 'cors';
export const app: Application = express();

//? use parser call any ⤵
app.use(cors());
app.use(express.json());
//? use parser call any ⤴

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
