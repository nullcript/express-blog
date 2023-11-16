"use strict";

const { body } = require("express-validator");

module.exports = [
  body("username").notEmpty().withMessage("نام کاربری نمیتواند خالی باشد"),
  body("email")
    .isEmail()
    .withMessage("ایمیل از فرمت صحیحی پیروی نمیکند"),
  body("password")
    .custom((value) => {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
    })
    .withMessage(
      "طول پسورد باید حداقل 8 کارکتر و همچنین شامل حداقل یک حرف کوچک ، حرف بزرگ و یک عدد باشد"
    ),
  body("confirmPassword")
    .notEmpty()
    .withMessage("تاییدیه پسورد نمیتواند خالی باشد")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("تاییدیه پسورد با پسورد وارده مطابقت ندارد"),
];
