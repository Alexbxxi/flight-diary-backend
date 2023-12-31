import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all entry diaries');
});

router.post('/', (_res, res) => {
  res.send('Saving a diary');
});

export default router;
