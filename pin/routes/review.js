const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Reviews = require("../models/Reviews");

router.post("/", verifyToken, async (req, res) => {

    const existingReviews = await Reviews.findOne({ productId: req.body.productid, username:req.body.username });

    if (existingReviews) {
        return res.status(400).json({ error: "Reviews exist" });
    }
    const newReviews = new Reviews(req.body)

    try {
        const savedReviews = await newReviews.save();
        res.status(200).json(savedReviews);
    } catch (err) {
        res.status(500).json(err)
    }
})



// // Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Reviews.findByIdAndDelete(req.params.id)
        res.status(200).json("Reviews Deleted Successfully...")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find/:id",  async (req, res) => {

    try {
        const reviews = await Reviews.find({productId: req.params.id})
       
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
})

// // Get All User
router.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {
       
        const reviews = await Reviews.find()
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;

