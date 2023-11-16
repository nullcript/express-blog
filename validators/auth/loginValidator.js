"use strict";

const { body } = require("express-validator");

module.exports = [
  body("email")
    .isEmail()
    .withMessage("ایمیل وارده از فرمت صحیحی پیروی نمیکند"),
  body("password").notEmpty().withMessage("پسورد نمیتواند خالی باشد"),
];
