import { NextFunction, Request, Response } from 'express';
import Comment from '../database/models/Comment';

class CommentController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await Comment.findAll();

      return res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = await Comment.findByPk(id);

      return res.status(200).json(comment);
    } catch (error) {
      next(error);
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const newComment = await Comment.create(req.body);

      return res.status(200).json(newComment);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = await Comment.findByPk(id);
      const updatedComment = await comment?.update(req.body);

      return res.status(200).json(updatedComment);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = await Comment.findByPk(id);
      await comment?.destroy();

      return res.status(200).json(null);
    } catch (error) {
      next(error);
    }
  }
}

export default new CommentController();
