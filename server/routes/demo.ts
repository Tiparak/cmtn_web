import { RequestHandler } from 'express';
import { DemoResponse } from '@shared/api';

export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = {
    message: 'Hello from the demo endpoint!',
    data: {
      version: '1.0.0',
      features: ['React', 'Express', 'TypeScript', 'Vite']
    }
  };
  
  res.json(response);
};