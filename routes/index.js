"use strict";

const indexRouter = require("./indexRouter");

module.exports = (app) => {
  app.use(indexRouter);
};
