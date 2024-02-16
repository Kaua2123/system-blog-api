import UserController from '../controllers/user.controller';
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/user', UserController.index.bind(UserController));

export default userRouter;
