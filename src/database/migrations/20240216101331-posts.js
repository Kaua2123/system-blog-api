'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      post_category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'post_category',
          key: 'id',
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tags: {
        type: Sequelize.ENUM,
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
    });
  },

  // async down(queryInterface, Sequelize) {},
};
