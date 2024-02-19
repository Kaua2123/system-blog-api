import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

import User from '../database/models/User';

class LoginController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(400).json('User not found');

      const { id, password_hash } = user;

      const pass = await bcrypt.compare(password, password_hash);
      if (!pass) return res.status(400).json('Passwords do not match.');

      if (!process.env.TOKEN_KEY)
        return res.status(400).json('No key for the token was provided');

      const token = jwt.sign({ id, email: user.email }, process.env.TOKEN_KEY, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export default new LoginController();
