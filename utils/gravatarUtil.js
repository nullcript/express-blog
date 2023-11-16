"use strict";

const gravatar = require("gravatar");

module.exports = (userEmail, options = null) => {
  return gravatar.url(userEmail, options);
};
