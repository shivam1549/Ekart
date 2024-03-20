const express = require("express");
const app = express();
const moongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/product");
const ordersRoute = require("./routes/order");
const cartsRoute = require("./routes/cart");
const stripeRoute  = require("./routes/stripe");
const categoryRoute = require("./routes/category");
const reviewRoute = require("./routes/review");
const cors = require("cors");

dotenv.config();

moongoose.connect(process.env.MONGO_URL
).then(()=> console.log("DB done")).catch((err)=>{
    console.log(err);
});
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/carts", cartsRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/categories",categoryRoute);
app.use("/api/reviews",reviewRoute);


app.listen(5000, ()=>{
    console.log("bacend rudffdjh");
})

