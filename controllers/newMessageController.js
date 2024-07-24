/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const newMessageControllerGet = (req, res) => {
    res.render("form", {});
};

module.exports = newMessageControllerGet;
