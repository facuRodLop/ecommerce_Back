const { Order, Product } = require("../models/Order");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const { products } = req.body;
  for (const product of products) {
    console.log(product.productId);
    // const item = Product.findByPk(product.productId);
  }
  // await Order.create(req.body);
  // res.status(201).json({ message: "The Product was successfully created" });
  res.status(201).json(req.body);
}

// Update the specified resource in storage.
async function update(req, res) {}

async function sold(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

module.exports = {
  index,
  show,
  store,
  update,
  sold,
  destroy,
};
