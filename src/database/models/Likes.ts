import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';

class Likes extends Model {
  declare id: number;
  declare user_id: number;
  declare post_id: number;
}

Likes.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize: db,
    tableName: 'likes',
    timestamps: false,
    underscored: true,
  },
);

export default Likes;
