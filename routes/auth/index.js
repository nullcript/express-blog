"use strict";

const authRootRouter = require("./authRootRouter");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");

module.exports = (app) => {
  app.use("/auth", authRootRouter);
  app.use("/auth", registerRouter);
  app.use("/auth", loginRouter);
};
