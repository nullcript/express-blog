"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Settings",
      [
        {
          id: "291415a7-2dab-41e3-bbad-837aed3c8a35",
          name: "blog_title",
          value: "shokri-blog",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "94fd4a95-755a-4ba6-ba0a-0ed66cce4908",
          name: "blog_description",
          value: "یک وبلاگ نوشته شده با Express.js",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4a7f5abf-c855-4e5c-b80c-fb83be24cf46",
          name: "blog_per_page",
          value: "10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "5af7c68b-151b-400b-b038-05a685de0f64",
          name: "everyone_can_comment",
          value: "off",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Settings", null, {});
  },
};
