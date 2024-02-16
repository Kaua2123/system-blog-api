import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  private service = new UserService();

  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, message } = await this.service.index();
      return res.status(status).json(message);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
