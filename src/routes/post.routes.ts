import PostController from '../controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/post', PostController.index);
postRouter.get('/post/:id', PostController.show);
postRouter.post('/post/create', PostController.store);

export default postRouter;
