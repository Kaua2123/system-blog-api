import { Router } from 'express';
import userRouter from './user.routes';
import postRouter from './post.routes';

const router = Router();

router.use(userRouter, postRouter);

export default router;
