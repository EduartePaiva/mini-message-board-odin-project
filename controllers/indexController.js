/**
 *
 * @param {{text:string,user:string,data:Date}[]} messages
 */
const indexController = (messages) => {
    /**
     *
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     */
    const indexCallback = (req, res) => {
        res.render("index", { title: "Mini Messageboard", messages: messages });
    };

    return indexCallback;
};

module.exports = indexController;
