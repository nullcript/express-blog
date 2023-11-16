"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "585b8738-0416-4de1-bd07-46b18fbefb61",
          roleId: "d5eb4173-cbd1-4390-8aa6-a5184e1c6911",
          username: "محمد شکری",
          password: "myPss123456!",
          email: "nullcript@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "41dff311-976f-4822-8599-98e1a44aa556",
          roleId: "988feb5e-7cd2-43aa-ad3e-6da144d44657",
          username: "علیرضا شکری",
          password: "Hs7854125!?",
          email: "hsda1994@yahoo.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "ab9cfaa2-14c3-4cb9-8d0d-efcd868497bf",
          roleId: "988feb5e-7cd2-43aa-ad3e-6da144d44657",
          username: "احمد شکری",
          password: "Sbf324dfs88?!4",
          email: "sinaBaghery78@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
