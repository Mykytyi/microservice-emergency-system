import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const one = 1;

app.get('/', (req: Request, res: Response) => {
  res.send('My server');
});

if (port===3000) {
  console.log(123);
}

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
