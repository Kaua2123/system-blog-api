import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';
import Post from './Post';
import Comment from './Comment';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password_hash: string;
}

User.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'user',
    timestamps: false,
  },
);

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User);

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User);

export default User;
