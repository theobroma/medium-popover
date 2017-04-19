import express from 'express';
import Comment from '../models/comment';

const router = express.Router();

router.get('/', (req, res) => {
  Comment.find().then((data) => {
    res.send(data);
  });
});

export default router;
