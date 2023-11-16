"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          id: "9b293c61-c0a9-485d-a647-afb23598fa6e",
          userId: "585b8738-0416-4de1-bd07-46b18fbefb61",
          postId: "39adc314-d8e9-4dee-a7f6-122d5283e8c2",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای کامنت میباشد",
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "4ada1584-2887-4c12-9cee-98113ee5da75",
          userId: "41dff311-976f-4822-8599-98e1a44aa556",
          postId: "39adc314-d8e9-4dee-a7f6-122d5283e8c2",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای کامنت میباشد",
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "7bd271f1-899e-4fa9-a11e-947a9a0ba169",
          userId: "41dff311-976f-4822-8599-98e1a44aa556",
          postId: "6f00c165-ecdd-49e6-b3ff-decdc6fea30d",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای کامنت میباشد",
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1ad1202d-d9d9-4909-99fb-d76e021c6c25",
          userId: "ab9cfaa2-14c3-4cb9-8d0d-efcd868497bf",
          postId: "f015d444-9dc9-42c7-a685-0c74819f8d58",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای کامنت میباشد",
          status: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
