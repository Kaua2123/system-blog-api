import sequelize from 'sequelize';
import { Model } from 'sequelize';

import db from '.';

interface ENUM {
  TECNOLOGIA: string;
  CIENCIA: string;
  SAUDE: string;
  CULTURA: string;
  VIAGENS: string;
  ESPORTE: string;
}

class Post extends Model {
  declare id: number;
  declare user_id: number;
  declare title: string;
  declare content: string;
  declare image: string; // URL
  declare likes: number;
  declare tags: ENUM;
}

Post.init(
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
    post_category_id: {
      type: sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'post_category',
        key: 'id',
      },
    },
    title: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    content: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    image: {
      type: sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    },
    likes: {
      type: sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    tags: {
      type: sequelize.ENUM,
      values: [
        'TECNOLOGIA',
        'CIENCIA',
        'SAUDE',
        'CULTURA',
        'VIAGENS',
        'ESPORTE',
      ],
      allowNull: false,
      defaultValue: 'TECNOLOGIA',
    },
  },
  {
    sequelize: db,
    tableName: 'posts',
    timestamps: false,
    underscored: true,
  },
);

export default Post;
