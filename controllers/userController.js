const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const users = await User.findAll({ nested: true });
  res.status(202).json(users);
}

// Display the specified resource.
async function show(req, res) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.status(202).json(user);
}

// Store a newly created resource in storage.
async function store(req, res) {
  await User.create({ ...req.body, isAdmin: false });
  res.status(201).json({ message: "The User was successfully created" });
}

// Update the specified resource in storage.
async function update(req, res) {
  const { id } = req.params;
  await User.update(req.body, { where: { id: id } });
  res.status(206).json({
    message: "The User was successfully updated",
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const { id } = req.params;
  await User.destroy({ where: { id: id } });
  res.status(200).json({ message: "The User was deleted successfully" });
}

// Login & logout con jsonwebtoken
async function getToken(req, res) {
  try {
    const user = await User.findAll({
      where: { email: req.body.email },
    });
    console.log(user);
    if (user && (await user.validPassword(req.body.password))) {
      const token = jwt.sign({ sub: user.id }, process.env.ACCESS_TOKEN_SECRET);

      await User.update({ token: token }, { where: { id: user.id } });
      res.status(200).json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        token: token,
      });
    } else {
      res.status(401).json({ message: "Something went wrong." });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function deleteToken(req, res) {
  try {
    const tokenBearer = req.headers.authorization.split(" ");
    token = tokenBearer[1];

    await User.update({ token: null }, { where: { id: req.user.sub } });

    res.status(200).json({ message: "logout ok" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  getToken,
  deleteToken,
};
