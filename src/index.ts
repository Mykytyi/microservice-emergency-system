import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'reflect-metadata';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Configure CORS to allow requests from certain domains
const corsOptions = {
  origin: 'http://localhost:3001', // allowed domains
  methods: ['GET', 'POST'], // allowed methods
  credentials: true // allows cookies (if necessary)
};

app.use(cors(corsOptions));

app.use(express.json());

app.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'My server' });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
