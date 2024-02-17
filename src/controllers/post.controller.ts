import { NextFunction, Request, Response } from 'express';
import Post from '../database/models/Post';

class PostController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await Post.findAll();
      console.log(posts);
      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
