"use strict";

class AdminRootController {
  async index(req, res) {
    try {
      res.redirect("/admin/dashboard");
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }
}

module.exports = new AdminRootController();
