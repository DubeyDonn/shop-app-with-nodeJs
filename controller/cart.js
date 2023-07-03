import Cart from "../model/cart.js";

// ##GET ALL
export const getallCarts = async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
};

// ##GET SINGLE
export const getSingleCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  res.json(cart);
};

// ## CREATE
export const createCart = (req, res) => {
  const cart = new Cart(req.body);
  cart
    .save()
    .then((savedCart) => {
      res.json({ ...req.body, _id: savedCart._id });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

// ## REPLACE
export const replaceCart = async (req, res) => {
  try {
    const doc = await Cart.findOneAndReplace({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ## UPDATE
export const updateCart = async (req, res) => {
  try {
    const doc = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ## DELETE
export const deleteCart = async (req, res) => {
  try {
    if (req.params.id==="all") {
      await Cart.deleteMany({});
      res.json({ message: "all cart items deleted" });
    } else {
      await Cart.deleteOne({ _id: req.params.id });
      res.json({ message: "cart item deleted" });
    }
    // const doc = await Cart.findOneAndDelete({ _id: req.params.id });
    // res.json({ message: "cart item deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// export default carts;
