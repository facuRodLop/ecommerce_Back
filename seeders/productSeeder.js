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
      picture:
        "https://www.harvardmagazine.com/sites/default/files/img/article/0217/ma17_page_060_image_0001sm-1.jpg",
      price: "50.99",
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
    {
      name: "Lithops Salicola",
      description:
        "This species can be found in Namibia and South Africa at an altitude of 1,000 metres to 1,350 metres. It is generally found in well-drained soil or in rock crevices. It occurs in an area of summer rainfall.",
      picture: "https://live.staticflickr.com/5700/21523143718_e36aca8160_b.jpg",
      price: "5.99",
      stock: 80,
      slug: "lithops-salicola",
      categoryId: 3,
    },
    {
      name: "Antirrhinum Majus",
      description:
        "Commonly named 'snapdragon' because of the flowers' reaction to having their throats squeezed, which causes the 'mouth' of the flower to snap open like a dragon's mouth.",
      picture:
        "https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Antirrhinum-majus-1--lezumbalaberenjena--CC-BY-NC-ND.jpg",
      price: "2.99",
      stock: 100,
      slug: "antirrhinum-majus",
      categoryId: 2,
    },
    {
      name: "Actaea Pachypoda",
      description:
        "The white baneberry or doll's-eyes, is native to eastern North America, in eastern Canada, and the Midwestern and Eastern United States. It prefers clay to coarse loamy upland soils, and is found in hardwood and mixed forest stands.",
      picture: "https://www.heritageflowerfarm.com/wp-content/uploads/2018/04/actaea-alba2.jpg",
      price: "5.99",
      stock: 20,
      slug: "actaea-pachypoda",
      categoryId: 2,
    },
    {
      name: "Orchis Italica",
      description:
        "The naked man orchid or the Italian orchid, is a species of orchid native to the Mediterranean Basin.  It gets its common name from the lobed lip of each flower which mimics the general shape of a naked man. It prefers partial shade and low nutrient soil, and flowers in April.",
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Orchis_italica_047.JPG/1200px-Orchis_italica_047.JPG",
      price: "19.99",
      stock: 10,
      slug: "orchis-italica",
      categoryId: 2,
    },
  ]);

  console.log("[Database] Se corrió el seeder de Products.");
};
