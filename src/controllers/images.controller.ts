import Post from '../database/models/Post';
import { NextFunction, Request, Response } from 'express';

class ImagesController {
  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      console.log(id);
      if (!post) return res.status(400).json('Post dont encountered');

      await post.update(
        { image: req.file?.filename },
        { where: { image: '' } },
      );

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }
}

export default new ImagesController();
