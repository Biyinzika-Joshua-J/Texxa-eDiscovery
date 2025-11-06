import { Router } from 'express';

export const health = Router();

health.get('/health', async (req, res) => {
  res.send('OK');
});
