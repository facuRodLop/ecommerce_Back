const { User, Product } = require("../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.findAll({ nested: true });
    res.status(202).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Display the specified resource.
async function show(req, res) {
  try {
    const product = await Product.findOne({ where: { slug: req.params.id } });
    res.status(202).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      await Product.create(req.body);
      res.status(201).json({ message: "The Product was successfully created" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
//Store file with formidable.
async function storeFile(req, res) {
  const supabase = createClient(process.env.DB_BASE_URL, process.env.ANON_KEY);
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });
  try {
    form.parse(req, async (err, fields, files) => {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });
      res.status(200).json({ fileName: files.image.newFilename });
    });
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
}
// remove file with formidable
async function removeFile(req, res) {
  console.log("post from remove: ", req.params.image);
  const supabase = createClient(process.env.DB_BASE_URL, process.env.ANON_KEY);
  const imageToRemove = req.params.image;

  const { data, error } = await supabase.storage.from("images").remove([imageToRemove]);
}

// Update the specified resource in storage.
async function update(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      await Product.update(req.body, { where: { slug: req.params.id } });
      res.status(206).json({
        message: "The Product was successfully updated",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

async function sold(req, res) {
  try {
    const { quantitySold } = req.body;
    const { stock } = sdf;
    const remainder = stock - quantitySold;
    await Product.update({ stock: amount }, { where: { slug: req.params.id } });
    res.status(202).json({ message: "The Product was successfully sold" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const user = await User.findOne({ where: { id: req.user.sub } });

  if (user.isAdmin) {
    try {
      await Product.destroy({ where: { slug: req.params.id } });
      res.status(200).json({ message: "The Product was deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = {
  index,
  show,
  store,
  storeFile,
  removeFile,
  update,
  sold,
  destroy,
};
