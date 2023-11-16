"use strict";

const express = require("express");
const router = express.Router();
const { UsersController } = require("@controllers/admin");
const { createUserValidator, updateUserValidator } = require("@validators/admin");


router.get("/users", UsersController.index);

router.get("/users/create", UsersController.create);

router.post("/users/store", createUserValidator, UsersController.store);

router.get("/users/delete/:userID", UsersController.delete);

router.get("/users/edit/:userID", UsersController.edit);

router.post(
  "/users/update/:userID",
  updateUserValidator,
  UsersController.update
);


module.exports = router;
