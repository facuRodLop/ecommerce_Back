const { Order, Product, User } = require("../models");

// Display a listing of the resource.
async function index(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      const orders = await Order.findAll({ nested: true });
      res.status(202).json(orders);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (user && !user.isAdmin) {
    try {
      const orders = await Order.findAll({ where: { userId: req.user.sub } }, { nested: true });
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
  const { id } = req.params;
  const user = await User.findOne({ where: { id: req.user.sub } });
  const order = await Order.findByPk(id, { nested: true });

  if (user.isAdmin || (!user.isAdmin && order.userId === user.id)) {
    try {
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
  let subtotal = 0;
  let shipping = 0;
  const productsInOrder = [];
  for (const item of items) {
    for (const product of products) {
      if (Number(product.id) === Number(item.id)) {
        productsInOrder.push({
          name: item.name,
          unit_price: item.price,
          quantity: product.quantity,
        });
        subtotal = subtotal + Number(product.quantity) * Number(item.price);
      }
    }
  }
  if (subtotal < 200) {
    shipping = subtotal * 0.1;
  }
  const total = shipping + subtotal;

  await Order.create({
    products: productsInOrder,
    paymentType: paymentType,
    subtotal: subtotal,
    shipping: shipping,
    total: total,
    status: status,
    userId: req.user.sub,
    shippingAddress: shippingAddress,
  });
  res.status(201).json({ message: "Your order has been successfully entered" });
}

// Update the specified resource in storage.
async function update(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    await Order.update({ status: req.body.status }, { where: { id: req.params.id } });
    res.status(206).json({
      message: "The order was successfully updated",
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

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
