import { Router } from 'express';
import userRouter from './user.routes';
import postRouter from './post.routes';
import commentRouter from './comment.routes';
import loginRouter from './login.routes';

const router = Router();

router.use(userRouter, postRouter, commentRouter, loginRouter);

export default router;
