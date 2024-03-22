import { NextFunction, Request, Response } from 'express';
import Post from '../database/models/Post';
import Comment from '../database/models/Comment';
import Likes from '../database/models/Likes';

class PostController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await Post.findAll({
        attributes: [
          'id',
          'user_id',
          'title',
          'content',
          'image',
          'likes',
          'tags',
        ],
        order: [
          ['id', 'DESC'],
          [Comment, 'id', 'DESC'],
        ],
        include: {
          model: Comment,
          attributes: ['content'],
        },
      });

      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id);

      console.log('checando post com show:', post);

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
      const { postId, userId } = req.params;

      const post = await Post.findByPk(postId);
      if (!post) return res.status(400).json('The post doesnt exist ');

      const likes = await Likes.findOne({
        where: {
          user_id: userId,
          post_id: postId,
        },
      });
      if (likes) return res.status(400).json('You already liked this post.');

      const like = post.likes + 1;

      await post.update({ likes: like }, { where: { likes: 0 } });

      await Likes.create({ user_id: userId, post_id: postId });

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
