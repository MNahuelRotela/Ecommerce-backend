const express = require("express");
const {
  createUser,
  signIn,
  logOut

} = require("../controllers/user/user");

const { isLoggedIn } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.delete("/auth/logOut", isLoggedIn, logOut);


userRouter.post("/signUp", createUser);
userRouter.post("/signIn", signIn);


module.exports = userRouter;