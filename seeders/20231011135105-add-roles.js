"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: "d5eb4173-cbd1-4390-8aa6-a5184e1c6911",
          enName: "administrator",
          faName: "مدیر",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "988feb5e-7cd2-43aa-ad3e-6da144d44657",
          enName: "subscriber",
          faName: "کاربر",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
