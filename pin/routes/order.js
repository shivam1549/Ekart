const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Order = require("../models/Order");
const CryptoJs = require("crypto-js");


router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: {
                status: req.body.orderstat
            }
        },
            { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})

// // Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted Successfully...")
    } catch (err) {
        res.status(500).json(err);
    }
})

// // Get User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.findById({ userId: req.params.userId });


        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
})


// // Get All User
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err);
    }
})


// Get monthly income

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
   
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },

        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;