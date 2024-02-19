import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

export default async function loginRequired(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json('Not authorized');

    const token = authorization.split(' ')[1];
    if (!token) return res.status(400).json('You must be logged');

    if (!process.env.TOKEN_KEY)
      return res.status(400).json('No key for the token was provided');

    jwt.verify(token, process.env.TOKEN_KEY, function (err) {
      if (err)
        return res
          .status(500)
          .json('An error ocurred when verifying the token.');
    });

    next();
  } catch (error) {
    next(error);
  }
}
