const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema({
    name:{type:String, required:true},
    url:{type:String, required:true},
    description:{type:String},
   
},
{timestamps:true}
);

module.exports = mongoose.model("Category", CategorySchema);