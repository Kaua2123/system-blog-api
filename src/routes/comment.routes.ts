/* eslint-disable prettier/prettier */
import loginRequired from 'middlewares/login.required';
import CommentController from '../controllers/comment.controller';
import { Router } from 'express';

const commentRouter = Router();

commentRouter.get('/comment', CommentController.index);
commentRouter.get('/comment/:id', CommentController.show);
commentRouter.post('/comment/store', loginRequired, CommentController.store);
commentRouter.put('/comment/update/:id', loginRequired, CommentController.update);
commentRouter.delete('/comment/delete/:id', loginRequired, CommentController.delete);

export default commentRouter;
