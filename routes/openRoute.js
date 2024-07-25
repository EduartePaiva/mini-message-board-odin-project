const { Router } = require("express");
const openDetailsController = require("../controllers/openController");

const openRoute = Router();
openRoute.get("/:index", openDetailsController);

module.exports = openRoute;
