const { Product } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll({ nested: true });
    res.status(202).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({ where: { slug: req.params.id } });
    res.status(202).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    await Product.create(req.body);
    res.status(201).json({ message: "The Product was successfully created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    await Product.update(req.body, { where: { slug: req.params.id } });
    res.status(206).json({
      message: "The Product was successfully updated",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

async function sold(req, res) {
  try {
    const { quantitySold } = req.body;
    const { stock } = sdf;
    const remainder = stock - quantitySold;
    await Product.update({ stock: amount }, { where: { slug: req.params.id } });
    res.status(202).json({ message: "The Product was successfully sold" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Product.destroy({ where: { slug: req.params.id } });
    res.status(200).json({ message: "The Product was deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  index,
  show,
  store,
  update,
  sold,
  destroy,
};
