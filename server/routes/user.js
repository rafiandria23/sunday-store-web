"use strict";

const userRouter = require("express").Router();
const UserController = require("../controllers/user");

userRouter.post("/register", UserController.register);
userRouter.post("/login", UserController.login);
// userRouter.post("/login/google", UserController.loginGoogle);
// userRouter.post("/login/github", UserController.loginGithub);
userRouter.get("/check", UserController.check);

module.exports = userRouter;