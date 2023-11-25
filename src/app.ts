import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/modules/user/user.route';
export const app: Application = express();

//? use parser call any ⤵
app.use(cors());
app.use(express.json());
//? use parser call any ⤴

//? use express router ⤵
app.use('/api', router);
//? use express router ⤴

//? root response route ⤵
app.get('/', (req: Request, res: Response) => {
  res.json('Welcome to my server 🇦🇲 !');
});
//? root response route ⤴

//?  not found error route function ⤵
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('404 Not Found');
});
//?  not routes error handeling function ⤴
