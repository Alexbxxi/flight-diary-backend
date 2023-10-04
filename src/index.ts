import express from 'express';

import diaryRouter from './routes/diaries';

// declare express variables to use
const app = express();
app.use(express.json()); // middleware for transform req.body to json

const PORT = 3000;

// server get methods
app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!!');
  res.send('pong'); // sen the response
});

app.use('/api/diaries', diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
