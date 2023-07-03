import express from "express";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
dotenv.config();

const server = express();

// ##database connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// ##middleware
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(path.resolve(process.cwd() + "/build")));
server.use("/api/products", productRouter);
server.use("/api/carts", cartRouter);
server.use("/api/users", userRouter);
server.use("/api/orders", orderRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd() + "/build/index.html"));
});

// ##port
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// ## nodeJS server

// const server = http.createServer((req, res) => {
//   console.log("Server is running on port 3000");
//   console.log(req.url);

//   switch (req.url) {
//     case "/":
//       res.writeHead(200, { "Content-type": "text/html" });
//       const modifiedIndex = index
//         .replace("**url**", product.images[0])
//         .replace("**title**", product.title)
//         .replace("**price**", product.price)
//         .replace("**rating**", product.rating);
//       res.end(modifiedIndex);

//       break;
//     case "/about":
//       res.end("Here is our short history");
//       break;
//     case "/products":
//       res.end(JSON.stringify(data));
//       break;
//     default:
//       res.writeHead(404);
//       res.end("Page not found");
//   }
// });
