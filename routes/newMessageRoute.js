const { Router } = require("express");
const {
    newMessageControllerGet,
    newMessageControllerPost,
} = require("../controllers/newMessageController");

const newMessageRoute = Router();
newMessageRoute.get("/", newMessageControllerGet);
newMessageRoute.post("/", newMessageControllerPost);

module.exports = newMessageRoute;
