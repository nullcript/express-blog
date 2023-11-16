"use strict";

const { AdminService } = require("@services");
const { validationResult } = require("express-validator");
const defaultSettings = require("@configs/settings");


class SettingsController {
  async index(req, res) {
    try {
      const settings = await AdminService.getAllSettings(); //! getAllSettings Query
      let makeOneSettings = {};

      settings.forEach((setting) => {
        makeOneSettings[setting.name] = setting.value;
      });

      res.adminRender("pages/admin/settings", {
        pageTitle: ["ادمین", "تنظیمات"],
        settings: makeOneSettings,
      });
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }

  async update(req, res) {
    try {
      const result = validationResult(req);
      const updatedSettingData = { ...req.body };

      if (!result.isEmpty()) {
        req.flash("errors", result.array());
        res.redirect("/admin/settings");
      } else {
        try {
          const permittedSettings = {
            ...defaultSettings,
            ...updatedSettingData,
          };
          const results = await AdminService.updateSettings(permittedSettings); //! updateSetting Query

          for (let result of results) {
            if (result[0] !== 1) {
              throw new Error("آپدیت تنظیمات با مشکل روبه رو شده");
            }
          } //! check all queries done

          req.flash("success", "تنظیمات با موفقیت آپدیت شدند");
          res.redirect("/admin/settings");
        } catch (error) {
          req.flash(
            "dbError",
            "فرآیند آپدیت تنظیمات در دیتابیس با مشکل مواجه شده است"
          );
          res.redirect("/admin/settings");
        }
      }
    } catch (error) {
      res.send({ errorMessage: error });
    }
  }
}

module.exports = new SettingsController();
