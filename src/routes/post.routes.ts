import loginRequired from '../middlewares/login.required';
import PostController from '../controllers/post.controller';
import { Router } from 'express';

const postRouter = Router();

postRouter.get('/post', PostController.index);
postRouter.get('/post/:id', PostController.show);
postRouter.post('/post/create', loginRequired, PostController.store);
postRouter.put('/post/update/:id', PostController.update);
postRouter.delete('/post/delete/:id', PostController.delete);

export default postRouter;
