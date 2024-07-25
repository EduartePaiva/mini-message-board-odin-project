/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const newMessageControllerGet = (req, res) => {
    res.render("form", {});
};
/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const newMessageControllerPost = (req, res) => {
    req.app.messages.unshift({
        text: req.body.message,
        user: req.body.author,
        added: new Date(),
    });
    res.redirect("/");
};

module.exports = { newMessageControllerGet, newMessageControllerPost };
