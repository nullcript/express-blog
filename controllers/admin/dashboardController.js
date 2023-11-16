"use strict";

const { AdminService } = require("@services");
const { gravatarUtil } = require("@utils");

class DashboardController {
  async index(req, res) {
    try {
      res.adminRender("pages/admin/dashboard", {
        pageTitle: ["ادمین", "داشبورد"],
        usersCount: await AdminService.usersCount(),
        postsCount: await AdminService.postsCount(),
        viewsCount: await AdminService.viewsCount(),
        commentsCount: await AdminService.commentsCount(),
        last5Comments: await AdminService.last5Comments(),
        gravatarUtil,
      });
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }
}

module.exports = new DashboardController();
