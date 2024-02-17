import sequelize from 'sequelize';
import { Model } from 'sequelize';

import Comment from './Comment';

import db from '.';

interface ENUM {
  TECNOLOGIA: string;
  CIENCIA: string;
  SAUDE: string;
  CULTURA: string;
  VIAGENS: string;
  ESPORTE: string;
  GEEK: string;
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
    // userId: {
    //   type: sequelize.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
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
        'GEEK',
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

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

Comment.belongsTo(Post);

export default Post;
