const express = require("express");

const indexRoute = require("./routes/indexRoute");
const path = require("path");
const newMessageRoute = require("./routes/newMessageRoute");
const openRoute = require("./routes/openRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
app.messages = messages;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRoute);
app.use("/new", newMessageRoute);
app.use("/open", openRoute);

app.listen(PORT, () => console.log("Server is running on port: " + PORT));
