"use strict";

const express = require("express");
const router = express.Router();
const { SettingsController } = require("@controllers/admin");
const { updateSettingValidator } = require("@validators/admin");


router.get("/settings", SettingsController.index);
router.post(
  "/settings/update",
  updateSettingValidator,
  SettingsController.update
);


module.exports = router;
