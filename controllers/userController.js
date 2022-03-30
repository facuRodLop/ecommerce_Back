const { User } = require("../models");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      const users = await User.findAll({ nested: true });
      res.status(202).json(users);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Display the specified resource.
async function show(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });
  const { id } = req.params;

  if (user.isAdmin || Number(id) === req.user.sub) {
    try {
      const user = await User.findByPk(id);
      res.status(202).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    await User.create({ ...req.body, isAdmin: false });
    res.status(201).json({ message: "The User was successfully created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });
  const { id } = req.params;

  if (user.isAdmin || Number(id) === req.user.sub) {
    try {
      await User.update(req.body, { where: { id: id } });
      res.status(206).json({
        message: "The User was successfully updated",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });
  const { id } = req.params;

  if (user.isAdmin || Number(id) === req.user.sub) {
    try {
      await User.destroy({ where: { id: id } });
      res.status(200).json({ message: "The User was deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Login & logout con jsonwebtoken
async function getToken(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user && (await user.validatePassword(password))) {
      const token = jwt.sign({ sub: user.id }, process.env.ACCESS_TOKEN_SECRET);

      res.status(200).json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        token: token,
      });
    } else {
      res.status(401).json({ message: error.message });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
  getToken,
};
