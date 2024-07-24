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
    // body: { author: 'Eduarte', message: 'Hello from Brazil' }
    console.log(req.body);
    res.redirect("/");
};

module.exports = { newMessageControllerGet, newMessageControllerPost };
