const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const existingCategory = await Category.findOne({ url: req.body.url });

    if (existingCategory) {
        return res.status(400).json({ error: "Category with the same URL already exists" });
    }
    const newCategory = new Category(req.body)

    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err)
    }
})



router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    const categoryId = req.params.id;

    try {

         // Check if the same URL exists for other categories except the current one
         const existingCategory = await Category.findOne({ url: req.body.url, _id: { $ne: categoryId } });

         if (existingCategory) {
             return res.status(400).json({ error: "Category with the same URL already exists" });
         }

        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },
            { new: true }
        );
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
})

// // Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id)
        res.status(200).json("Category Deleted Successfully...")
    } catch (err) {
        res.status(500).json(err);
    }
})



// // Get All User
router.get("/", async (req, res) => {

    try {
       
        const categories = await Category.find()
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;

