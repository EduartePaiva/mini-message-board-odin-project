const express = require("express");

const indexRoute = require("./routes/indexRoute");
const userRouter = require("./routes/userRoutes");
const path = require("path");
const newMessageRoute = require("./routes/newMessageRoute");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRoute);
app.use("/user", userRouter);
app.use("/new", newMessageRoute);

app.listen(PORT, () => console.log("Server is running on port: " + PORT));
