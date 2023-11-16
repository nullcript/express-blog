"use strict";

const { body } = require("express-validator");

module.exports = [
  body("blog_title").notEmpty().withMessage("عنوان وبلاگ نمیتواند خالی باشد"),
  body("blog_description")
    .notEmpty()
    .withMessage("توضیحات وبلاگ نمیتواند خالی باشد"),
  body("blog_per_page")
    .notEmpty()
    .withMessage("تعداد مقالات هر صفحه نمیتواند خالی باشد")
    .isNumeric()
    .withMessage("تعداد مقالات هر صفحه میبایست عدد باشد"),
];
