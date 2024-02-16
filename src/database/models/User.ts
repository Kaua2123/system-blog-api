import sequelize from 'sequelize';
import db from '.';
import { Model } from 'sequelize';

class User extends Model {
  declare id: number;
  declare username: string;
  declare email: string;
  declare password_hash: string;
  declare created_at: Date;
  declare updated_at: Date;
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
  },
);

export default User;
