const { User } = require("../models");
const checkJwt = require("express-jwt");

const tokenValidator = async (req, res, next) => {
  try {
    // const { tokens } = await User.findByPk(req.user.sub, { tokens: 1 });
    const [Bearer, actualToken] = req.headers.authorization.split(" ");
    const exists = tokens.some((token) => token === actualToken);
    if (exists) return next();
    res.json({ message: "Something went wrong" });
  } catch (error) {
    res.json({ message: error });
  }
};
module.exports = tokenValidator;
