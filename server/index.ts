import express from 'express';
import cors from 'cors';
import { handlePing } from './routes/ping';
import { handleDemo } from './routes/demo';

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get('/api/ping', handlePing);
  app.get('/api/demo', handleDemo);

  return app;
}

// For production builds
if (import.meta.url === `file://${process.argv[1]}`) {
  const app = createServer();
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}