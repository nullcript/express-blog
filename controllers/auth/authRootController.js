"use strict";

class AuthRootController {
  async index(req, res) {
    try {
      res.redirect("/auth/login");
    } catch (error) {
      res.send({
        errorMessage: error,
      });
    }
  }
}

module.exports = new AuthRootController();
