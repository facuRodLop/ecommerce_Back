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
      name: "Rainforest",
      description:
        "Rainforest plants live in a warm humid environment that allows an enormous variation rare in more temperate climates.",
      picture: "",
      slug: "rainforest",
    },
  ]);

  console.log("[Database] Se corrió el seeder de Categories.");
};
