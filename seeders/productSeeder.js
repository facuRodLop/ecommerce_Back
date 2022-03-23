const { Product } = require("../models");

// Model:
// {
//   name: "",
//   description: "",
//   picture: "",
//   price: 1,
//   stock: 2,
//   slug: "",
// },

module.exports = async () => {
  await Product.bulkCreate([
    {
      name: "Rafflesia Arnoldii",
      description:
        "Las flores pueden alcanzar hasta casi un metro de diámetro son unas de las flores mas grandes del mundo y pueden llegar a pesar hasta 11 kilogramos. Se trata de flores carnosas de color rojizo o anaranjado y de cinco lóbulos que permanecen abiertas entre cinco y siete días. Como ocurre con otras plantas con floraciones de gran tamaño, éstas solo se dan cada varios años.",
      picture: "",
      price: 50.99,
      stock: 10,
      slug: "rafflesia-arnoldii",
    },
  ]);

  console.log("[Database] Se corrió el seeder de Products.");
};
