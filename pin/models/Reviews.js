const mongoose = require("mongoose");
const ReviewsSchema = new mongoose.Schema({
    username:{type:String, required:true},
    productId:{type:String, required:true},
    stars:{type:String, required:true},
   
},
{timestamps:true}
);

module.exports = mongoose.model("Reviews", ReviewsSchema);