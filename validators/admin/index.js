"use strict";

const createPostValidator = require("./createPostValidator");
const updatePostValidator = require("./updatePostValidator");
const createUserValidator = require("./createUserValidator");
const updateUserValidator = require("./createUserValidator");
const updateSettingValidator = require("./updateSettingValidator");

module.exports = {
  createPostValidator,
  updatePostValidator,
  createUserValidator,
  updateUserValidator,
  updateSettingValidator,
};
