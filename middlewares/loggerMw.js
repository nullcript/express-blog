"use strict";

const { dateUtil } = require("@utils");

module.exports = (req, res, next) => {
  const user = req.session.user?.username ?? "Anonymous";
  const url = req.url;
  const date = dateUtil({ date: new Date() });
  console.log(`user -> ${user}  date -> ${date}  url -> ${url} `);
  next();
};
