const { Category } = require("../models");

// Model:
// {
//   name: "",
//   description: "",
//   picture: "",
//   slug: "",
// },

module.exports = async () => {
  await Category.bulkCreate([
    {
      name: "Carnivorous",
      description:
        "Carnivorous plants are plants that derive some or most of their nutrients from trapping and consuming animals or protozoans, typically insects and other arthropods.",
      picture: "",
      slug: "carnivorous",
    },
    {
      name: "Orchids",
      description:
        "Orchids are a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant.",
      picture: "",
      slug: "orchids",
    },
    {
      name: "Succulents",
      description:
        "Succulents are plants with parts that are thickened, fleshy, and engorged, usually to retain water in arid climates or soil conditions.",
      picture: "",
      slug: "succulents",
    },
  ]);

  console.log("[Database] Se corrió el seeder de Categories.");
};
