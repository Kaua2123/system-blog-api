import UserController from '../controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/user', UserController.index); // bind pro this dentro do userController
userRouter.post('/user/post', UserController.store);

export default userRouter;
