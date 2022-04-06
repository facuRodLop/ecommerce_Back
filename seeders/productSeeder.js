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
      name: "Sarracenia Purpurea",
      description:
        "Also known as the purple pitcher plant, its range includes the Eastern seaboard, the Great Lakes region, all of Canada (except Nunavut and Yukon), Washington state, and Alaska. It obtains most of its nutrients through prey capture, who fall into the pitcher and drown in the rainwater that collects in the base of each leaf.",
      picture: "sarracenia-purpurea-alt.jpeg",
      price: 20.99,
      stock: 10,
      slug: "sarracenia-purpurea",
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
      picture: "drosera-aliciae-alt.jpg",
      price: 14.99,
      stock: 15,
      slug: "drosera-aliciae",
      categoryId: 1,
    },
    {
      name: "Nepenthes Albomarginata",
      description:
        "Nepenthes albomarginata is a tropical pitcher plant native to Borneo, Peninsular Malaysia, and Sumatra. In its natural habitat, the plant uses its trichomes as bait to lure termites into the pitchers.",
      picture: "nepenthes-albomarginata-alt.jpg",
      price: 99.99,
      stock: 5,
      slug: "nepenthes-albomarginata",
      categoryId: 1,
    },
    {
      name: "Pleiospilos Nelii",
      description:
        "Also called the splitrock or living granite, it is a species of flowering plant native to South Africa. It grows in semi-arid areas with rainfall of between 150mm and 300mm, meaning that in temperate regions it must be grown under glass for protection from excessive rain and hard freezes.",
      picture: "pleiospilos-nelii.jpg",
      price: 9.99,
      stock: 80,
      slug: "pleiospilos-nelii",
      categoryId: 3,
    },
    {
      name: "Antirrhinum Majus",
      description:
        "Commonly named 'snapdragon' because of the flowers' reaction to having their throats squeezed, which causes the 'mouth' of the flower to snap open like a dragon's mouth.",
      picture: "antirrhinum-majus-alt.jpg",
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
