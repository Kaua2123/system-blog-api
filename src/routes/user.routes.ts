import UserController from '../controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/user', UserController.index);
userRouter.get('/user/:id', UserController.show);
userRouter.post('/user/post', UserController.store);
userRouter.put('/user/update/:id', UserController.update);
userRouter.delete('/user/delete/:id', UserController.delete);

export default userRouter;
