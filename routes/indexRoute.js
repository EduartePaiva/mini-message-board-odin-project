const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRoute = Router();
indexRoute.get("/", indexController);

module.exports = indexRoute;
