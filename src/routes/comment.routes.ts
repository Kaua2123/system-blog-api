import CommentController from '../controllers/comment.controller';
import { Router } from 'express';

const commentRouter = Router();

commentRouter.get('/comment', CommentController.index);
commentRouter.get('/comment/:id', CommentController.show);

export default commentRouter;
