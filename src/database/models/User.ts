import sequelize from 'sequelize';
import db from '.';
import { Model } from 'sequelize';
import Post from './Post';

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

export default User;
