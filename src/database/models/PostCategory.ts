import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';

class PostCategories extends Model {
  declare id: number;
  declare name: string;
}

PostCategories.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'post_categories',
    timestamps: false,
    underscored: true,
  },
);
