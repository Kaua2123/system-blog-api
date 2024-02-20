import sequelize from 'sequelize';
import { Model } from 'sequelize';
import bcrypt from 'bcrypt';

import db from '.';
import Post from './Post';
import Comment from './Comment';
import Likes from './Likes';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password: string;
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
      validate: {
        isEmail: {
          msg: 'Email inválido',
        },
      },
    },
    password_hash: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.VIRTUAL,
      defaultValue: '',
      validate: {
        len: {
          args: [3, 24],
          msg: 'Senha deve ter entre 3 e 24 caracteres',
        },
      },
    },
  },
  {
    sequelize: db,
    tableName: 'users',
    timestamps: false,
  },
);

User.addHook('beforeSave', async (user: User) => {
  user.password_hash = await bcrypt.hash(user.password, 8);
});

User.hasMany(Post, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

User.hasMany(Likes, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Likes.belongsTo(User, {
  foreignKey: 'user_id',
});

export default User;
