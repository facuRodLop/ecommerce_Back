const { User } = require("../models");

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

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
