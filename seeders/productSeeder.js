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
      name: "Echeveria Nodulosa",
      description:
        "Uniquely shaped Echeveria with branching, sprawling stems. Its long, green leaves are heavily lined with deep purple and somewhat keeled. If allowed to sprawl, it can reach about 8.0 ft tall, but it can be kept in a more compact rosette form with regular pruning. It is accustomed to direct sun in its native habitat in the limestone hills of central Mexico. Each spring or summer it can send up a 12.0 ft tall bloom stalk of pink to yellow bell-shaped flowers.",
      picture: "echeveria-nodulosa.jpg",
      price: 5.99,
      stock: 10,
      slug: "echeveria-nodulosa",
      categoryId: 3,
    },
    {
      name: "Caputia Tomentosa",
      description:
        "Woolly Senecio or Cocoon Plant (now Caputia tomentosa): A unique plant with a white, felted covering. This small shrublet has curved, chunky leaves covered with a thick white wool. It rarely blooms but it can produce yellow, pompom-shaped flowers. Over time it can grow tall, leggy stems, but it re-roots readily from stem cuttings.",
      picture: "caputia-tomentosa-alt.jpg",
      price: 6.99,
      stock: 20,
      slug: "caputia-tomentosa",
      categoryId: 3,
    },
  ]);

  console.log("[Database] Se corrió el seeder de Products.");
};
