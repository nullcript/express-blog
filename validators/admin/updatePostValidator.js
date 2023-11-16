"use strict";

const { body } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("عنوان نمیتواند خالی باشد"),
  body("slug").notEmpty().withMessage("نامک نمیتواند خالی باشد"),
];
