import { NextFunction, Request, Response } from 'express';
import Post from '../database/models/Post';

class PostController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await Post.findAll();

      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id);

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const createdPost = await Post.create(req.body);

      return res.status(200).json(createdPost);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id);
      const updatedPost = await post?.update(req.body);

      return res.status(200).json(updatedPost);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id);
      await post?.destroy();

      return res.status(200).json(null);
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
