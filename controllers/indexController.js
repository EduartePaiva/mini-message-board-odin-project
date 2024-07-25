/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const indexController = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: req.app.messages });
};

module.exports = indexController;
