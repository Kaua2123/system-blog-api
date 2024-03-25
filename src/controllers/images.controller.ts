import User from '../database/models/User';
import Post from '../database/models/Post';
import { NextFunction, Request, Response } from 'express';

class ImagesController {
  async storeOnPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);

      if (!post) return res.status(400).json('The post doesnt exist ');

      await post.update(
        { image: req.file?.filename },
        { where: { image: '' } },
      );

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  async storeOnUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) return res.status(400).json('The user doesnt exist ');

      await user.update(
        { image: req.file?.filename },
        { where: { image: '' }, fields: ['image'] },
      );

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new ImagesController();
