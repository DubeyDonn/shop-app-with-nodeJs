import Product from "../model/product.js";

// ##GET ALL
export const getallProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// ##GET SINGLE
export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

// ## CREATE
export const createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save();
  res.json(req.body);
};

// ## REPLACE
export const replaceProduct = async (req, res) => {
  try {
    const doc = await Product.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ## UPDATE
export const updateProduct = async (req, res) => {
  try {
    const doc = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ## DELETE
export const deleteProduct = async (req, res) => {
  try {
    const doc = await Product.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// export default products;
