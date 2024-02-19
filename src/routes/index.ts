import { Router } from 'express';
import userRouter from './user.routes';
import postRouter from './post.routes';
import commentRouter from './comment.routes';
import loginRouter from './login.routes';
import imagesRouter from './images.routes';

const router = Router();

router.use(userRouter, postRouter, commentRouter, imagesRouter, loginRouter);

export default router;
