const { Order, Product, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      const orders = await User.findAll({ nested: true });
      res.status(202).json(orders);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Display the specified resource.
async function show(req, res) {
  const { id } = req.body;
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      const order = await User.findByPk(id, { nested: true });
      res.status(202).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { products, paymentType, status, shippingAddress } = req.body;
  const items = await Product.findAll({
    where: {
      id: products.map((product) => product.id),
    },
  });
  let finalPrice = 0;
  const productsInOrder = [];
  for (const item of items) {
    for (const product of products) {
      if (Number(product.id) === Number(item.id)) {
        productsInOrder.push({
          name: item.name,
          unit_price: item.price,
          quantity: product.quantity,
        });
        finalPrice = finalPrice + Number(product.quantity) * Number(item.price);
      }
    }
  }

  await Order.create({
    products: productsInOrder,
    paymentType: paymentType,
    finalPrice: finalPrice,
    status: status,
    userId: req.user.sub,
    shippingAddress: shippingAddress,
  });
  res.status(201).json({ message: "Your order has been successfully entered" });
}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {
  res.status(423).json({ message: "Locked" });
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
