const { Product } = require("../models");

async function showHome(req, res) {
  const products = await Product.findAll({ nested: true });
  res.json(products);
}

async function showContact(req, res) {
  res.render("contact");
}

async function showAboutUs(req, res) {
  res.render("aboutUs");
}

// Otros handlers...
// ...

module.exports = {
  showHome,
  showContact,
  showAboutUs,
};
