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
      picture:
        "https://www.harvardmagazine.com/sites/default/files/img/article/0217/ma17_page_060_image_0001sm-1.jpg",
      price: 50.99,
      stock: 10,
      slug: "rafflesia-arnoldii",
      categoryId: 1,
    },
    {
      name: "Dionaea Muscipula",
      description:
        "The Venus flytrap is a carnivorous plant native to subtropical wetlands on the East Coast of the United States. It catches its prey with a trapping structure formed by the terminal portion of each of the plant's leaves, which is triggered by tiny hairs on their inner surfaces.",
      picture:
        "https://www.sciencenews.org/wp-content/uploads/2020/10/100720_cs_venusflytrap_feat-1028x579.jpg",
      price: "16.95",
      stock: 35,
      slug: "dionaea-muscipula",
      categoryId: 1,
    },
    {
      name: "Drosera Aliciae",
      description:
        "The Alice sundew is a carnivorous plant native to the Cape Provinces of South Africa, and is one of the most common sundews in cultivation. The plant is relatively easy to grow and recommended for begginers.",
      picture:
        "https://www.hantsflytrap.com/ekmps/shops/hampshirecarni/images/ds001-drosera-aliciae-sundew-14-p.jpg",
      price: "14.99",
      stock: 15,
      slug: "drosera-aliciae",
      categoryId: 1,
    },
    {
      name: "Nepenthes Albomarginata",
      description:
        "Nepenthes albomarginata is a tropical pitcher plant native to Borneo, Peninsular Malaysia, and Sumatra. In its natural habitat, the plant uses its trichomes as bait to lure termites into the pitchers.",
      picture: "https://upload.wikimedia.org/wikipedia/commons/2/26/Nepenthes_albomarginata.jpg",
      price: "99.99",
      stock: 5,
      slug: "nepenthes-albomarginata",
      categoryId: 1,
    },
  ]);

  console.log("[Database] Se corrió el seeder de Products.");
};
