import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Backend API is running');
});

export default router;
