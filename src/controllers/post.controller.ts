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

  async like(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      console.log(id);
      if (!post) return res.status(400).json('The post doesnt exist ');
      const like = post.likes + 1;

      await post.update({ likes: like }, { where: { likes: 0 } });

      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  }

  async findByTags(req: Request, res: Response, next: NextFunction) {
    try {
      const { tags } = req.params;
      const posts = await Post.findAll({
        where: {
          tags,
        },
      });

      if (!posts) return res.status(404).json('No posts found');

      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
