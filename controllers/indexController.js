"use strict";

class indexController {
  async index(req, res) {
    res.render("index", { layout: false });
  }
}

module.exports = new indexController();
