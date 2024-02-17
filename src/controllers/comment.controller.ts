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
  async store() {}
}

export default new CommentController();
