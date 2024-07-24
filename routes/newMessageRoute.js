const { Router } = require("express");
const newMessageControllerGet = require("../controllers/newMessageController");

const newMessageRoute = Router();
newMessageRoute.get("/", newMessageControllerGet);

module.exports = newMessageRoute;
