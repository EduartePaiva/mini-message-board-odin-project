const { Router } = require("express");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

const indexRoute = Router();
indexRoute.get("/");

module.exports = indexRoute;
