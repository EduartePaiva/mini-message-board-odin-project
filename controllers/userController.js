const asyncHandler = require("express-async-handler");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await someDbQueryToGetUser(userId);

    if (!user) {
        throw new CustomNotFoundError("user not found");
    }

    res.send(`User found: ${user.name}`);
});

const someDbQueryToGetUser = async () => {
    return { name: "Eduarte" };
};

class CustomNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

module.exports = getUserById;
