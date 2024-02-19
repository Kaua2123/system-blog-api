import CommentController from '../controllers/comment.controller';
import { Router } from 'express';

const commentRouter = Router();

commentRouter.get('/comment', CommentController.index);
commentRouter.get('/comment/:id', CommentController.show);
commentRouter.post('/comment/store', CommentController.store);
commentRouter.put('/comment/update/:id', CommentController.update);
commentRouter.delete('/comment/delete/:id', CommentController.delete);

export default commentRouter;
