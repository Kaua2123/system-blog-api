import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';
import User from './User';
import Post from './Post';

class Comment extends Model {
  declare id: number;
  declare user_id: number;
  declare post_id: number;
  declare content: string;
}

Comment.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
    content: {
      type: sequelize.STRING,
    },
  },
  {
    sequelize: db,
    tableName: 'comments',
    timestamps: false,
  },
);

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

export default Comment;
