import LoginController from '../controllers/login.controller';
import { Router } from 'express';

const loginRouter = Router();

loginRouter.post('/login', LoginController.store);

export default loginRouter;
