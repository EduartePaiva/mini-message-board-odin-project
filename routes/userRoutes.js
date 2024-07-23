const { Router } = require("express");
const getUserById = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/:id", getUserById);

module.exports = userRouter;
