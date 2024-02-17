import { Router } from 'express';
import userRouter from './user.routes';
import postRouter from './post.routes';
import commentRouter from './comment.routes';

const router = Router();

router.use(userRouter, postRouter, commentRouter);

export default router;
