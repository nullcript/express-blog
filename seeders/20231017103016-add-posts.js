"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          id: "39adc314-d8e9-4dee-a7f6-122d5283e8c2",
          userId: "585b8738-0416-4de1-bd07-46b18fbefb61",
          categoryId: "325078ff-4e4f-4f99-959b-85a88fb1d843",
          title: "آموزش زبان برنامه نویسی جاوااسکریپت",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای مطالب میباشد",
          slug: "how-to-code-with-js",
          status: 1,
          views: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f015d444-9dc9-42c7-a685-0c74819f8d58",
          userId: "585b8738-0416-4de1-bd07-46b18fbefb61",
          categoryId: "325078ff-4e4f-4f99-959b-85a88fb1d843",
          title: "بهترین فریمورک جی اس برای بک اند",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای مطالب میباشد",
          slug: "the-best-js-framework-for-backend",
          status: 1,
          views: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "6f00c165-ecdd-49e6-b3ff-decdc6fea30d",
          userId: "41dff311-976f-4822-8599-98e1a44aa556",
          categoryId: "325078ff-4e4f-4f99-959b-85a88fb1d843",
          title: "چرا باید از سی شارپ استفاده کرد؟",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای مطالب میباشد",
          slug: "why-use-csharp",
          status: 1,
          views: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "1815b303-8411-4091-b22a-01fadaa92438",
          userId: "ab9cfaa2-14c3-4cb9-8d0d-efcd868497bf",
          categoryId: "325078ff-4e4f-4f99-959b-85a88fb1d843",
          title: "بهترین دیزاین پترنها در کاتلین",
          content:
            "این یک متن تست ساخته شده به صورت اتوماتیک برای مطالب میباشد",
          slug: "best-designs-in-kotlin",
          status: 1,
          views: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
