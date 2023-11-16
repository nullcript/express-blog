"use strict";

const { AuthService } = require("@services");
const { validationResult } = require("express-validator");

class RegisterController {
  async index(req, res) {
    try {
      res.adminRender("pages/auth/register", {
        layout: "layouts/loginLayout",
        pageTitle: ["ثبت نام", "وبلاگ من"],
      });
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }

  async register(req, res) {
    try {
      const result = validationResult(req);
      const registerData = {
        ...req.body,
        roleId: "988feb5e-7cd2-43aa-ad3e-6da144d44657",
      };

      if (!result.isEmpty()) {
        req.flash("errors", result.array());
        res.redirect("/auth/register");
      } else {
        try {
          const userExist = await AuthService.checkUserExist(
            registerData.email
          );

          if (userExist) {
            req.flash(
              "dbError",
              "کاربر مد نظر در دیتابیس موجود میباشد، از طریق فرم ورود اقدام کنید"
            );
            res.redirect("/auth/register");
          } else {
            const result = await AuthService.createUser(registerData);

            req.flash("success", "ثبت نام شما با موفقیت انجام شد");
            res.redirect("/auth/login");
          }
        } catch (error) {
          req.flash("dbError", "خطایی در ثبت نام شما به وجود آمده");
          res.redirect("/auth/register");
        }
      }
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }
}

module.exports = new RegisterController();
