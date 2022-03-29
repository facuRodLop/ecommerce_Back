const { Category } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const categories = await Category.findAll({ nested: true });
    res.status(202).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const category = await Category.findOne({ where: { slug: req.params.id } });
    res.status(202).json(category);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Show the form for creating a new resource
// async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    await Category.create(req.body);
    res.status(201).json({ message: "The Category was successfully created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Show the form for editing the specified resource.
// async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    await Category.update(req.body, { where: { slug: req.params.id } });
    res.status(206).json({
      message: "The Category was successfully updated",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    await Category.destroy({ where: { slug: req.params.id } });
    res.status(200).json({ message: "The Category was deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  // create,
  store,
  // edit,
  update,
  destroy,
};
