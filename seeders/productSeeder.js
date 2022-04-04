const { Product } = require("../models");

// Model:
// {
//   name: "",
//   description: "",
//   picture: "",
//   price: "",
//   stock: 2,
//   slug: "",
//   categoryId: 1,
// },

module.exports = async () => {
  await Product.bulkCreate([
    {
      name: "Rafflesia Arnoldii",
      description:
        "Also known as the corpse flower, it can reach up to one meter in diameter and weigh up to 11 kilograms, making it one of the largest flowers in the world. It has a reddish or orange color, and it's one of the three national flowers of Indonesia along with the white jasmine and moon orchid.",
      picture: "rafflesia-arnoldii.jpg",
      price: 50.99,
      stock: 10,
      slug: "rafflesia-arnoldii",
      categoryId: 1,
    },
    {
      name: "Dionaea Muscipula",
      description:
        "The Venus flytrap is a carnivorous plant native to subtropical wetlands on the East Coast of the United States. It catches its prey with a trapping structure formed by the terminal portion of each of the plant's leaves, which is triggered by tiny hairs on their inner surfaces.",
      picture: "dionaea-muscipula-alt.jpg",
      price: 16.95,
      stock: 35,
      slug: "dionaea-muscipula",
      categoryId: 1,
    },
    {
      name: "Drosera Aliciae",
      description:
        "The Alice sundew is a carnivorous plant native to the Cape Provinces of South Africa, and is one of the most common sundews in cultivation. The plant is relatively easy to grow and recommended for begginers.",
      picture: "drosera-aliciae.jpg",
      price: 14.99,
      stock: 15,
      slug: "drosera-aliciae",
      categoryId: 1,
    },
    {
      name: "Nepenthes Albomarginata",
      description:
        "Nepenthes albomarginata is a tropical pitcher plant native to Borneo, Peninsular Malaysia, and Sumatra. In its natural habitat, the plant uses its trichomes as bait to lure termites into the pitchers.",
      picture: "nepenthes-albomarginata.jpg",
      price: 99.99,
      stock: 5,
      slug: "nepenthes-albomarginata",
      categoryId: 1,
    },
    {
      name: "Lithops Salicola",
      description:
        "This species can be found in Namibia and South Africa at an altitude of 1,000 metres to 1,350 metres. It is generally found in well-drained soil or in rock crevices. It occurs in an area of summer rainfall.",
      picture: "lithops-salicola.jpg",
      price: 5.99,
      stock: 80,
      slug: "lithops-salicola",
      categoryId: 3,
    },
    {
      name: "Antirrhinum Majus",
      description:
        "Commonly named 'snapdragon' because of the flowers' reaction to having their throats squeezed, which causes the 'mouth' of the flower to snap open like a dragon's mouth.",
      picture: "antirrhinum-majus.jpg",
      price: 2.99,
      stock: 100,
      slug: "antirrhinum-majus",
      categoryId: 2,
    },
    {
      name: "Actaea Pachypoda",
      description:
        "The white baneberry or doll's-eyes, is native to eastern North America, in eastern Canada, and the Midwestern and Eastern United States. It prefers clay to coarse loamy upland soils, and is found in hardwood and mixed forest stands.",
      picture: "actaea-pachypoda.jpg",
      price: 5.99,
      stock: 20,
      slug: "actaea-pachypoda",
      categoryId: 2,
    },
    {
      name: "Orchis Italica",
      description:
        "The naked man orchid or the Italian orchid, is a species of orchid native to the Mediterranean Basin.  It gets its common name from the lobed lip of each flower which mimics the general shape of a naked man. It prefers partial shade and low nutrient soil, and flowers in April.",
      picture: "orchis-italica.jpg",
      price: 19.99,
      stock: 10,
      slug: "orchis-italica",
      categoryId: 2,
    },
  ]);

  console.log("[Database] Se corrió el seeder de Products.");
};
