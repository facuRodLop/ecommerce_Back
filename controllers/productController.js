const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.findAll({ nested: true });
  res.status(202).json(products);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findByPk(req.params.id);
  res.status(202).json(product);
}

// Store a newly created resource in storage.
async function store(req, res) {
  await Product.create(req.body);
  res.status(201).json({ message: "The Product was successfully created" });
}

// Update the specified resource in storage.
async function update(req, res) {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.status(206).json({
    message: "The Product was successfully updated",
  });
}

async function sell(req, res) {
  await Product.update({ stock: req.body.amount }, { where: { id: req.params.id } });
  res.status(202).json({ message: "The Product was successfully sold" });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await User.destroy({ where: { id: req.params.id } });
  res.status(200).json({ message: "The User was deleted successfully" });
}

module.exports = {
  index,
  show,
  store,
  update,
  sell,
  destroy,
};