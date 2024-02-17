import { NextFunction, Request, Response } from 'express';

import User from '../database/models/User';

class UserController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await User.findAll();
      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const createdUser = await User.create(req.body);
      return res.status(200).json(createdUser);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
