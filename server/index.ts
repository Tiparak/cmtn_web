import express from 'express';
import cors from 'cors';

export function createServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/api/ping', (_req, res) => {
    res.json({ message: 'pong' });
  });

  return app;
}
