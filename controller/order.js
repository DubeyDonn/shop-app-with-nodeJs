import Order from "../model/order.js";

// ##GET ALL
export const getallOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

// ##GET SINGLE
export const getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
};

// ## CREATE
export const createOrder = (req, res) => {
  const order = new Order(req.body);
  order
    .save()
    .then((savedOrder) => {
      res.json({ ...req.body, _id: savedOrder._id });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

// ## REPLACE
export const replaceOrder = async (req, res) => {
  try {
    const doc = await Order.findOneAndReplace(
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

// ## UPDATE
export const updateOrder = async (req, res) => {
  try {
    const doc = await Order.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ## DELETE
export const deleteOrder = async (req, res) => {
  try {
    const doc = await Order.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "order deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// export default orders;
