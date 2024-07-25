/**
 *
 * @param {import("express").Request<{index: string;}, any, any, qs.ParsedQs, Record<string, any>>} req
 * @param {import("express").Response} res
 */
const openDetailsController = (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index >= req.app.messages.length) {
        return res.redirect("/");
    }
    res.render("open", { message: req.app.messages[index] });
};

module.exports = openDetailsController;
