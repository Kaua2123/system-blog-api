import PostController from '../controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/post', PostController.index);
postRouter.get('/post/:id', PostController.show);

export default postRouter;
