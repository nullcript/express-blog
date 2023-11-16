"use strict";

const express = require("express");
const router = express.Router();
const { DashboardController } = require("@controllers/admin");

router.get("/dashboard", DashboardController.index);

module.exports = router;
