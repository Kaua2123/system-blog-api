import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';

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
    userId: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    postId: {
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
    underscored: true,
  },
);

export default Comment;
