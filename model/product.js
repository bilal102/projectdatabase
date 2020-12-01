var mongoose=require("mongoose");

var productSchema=mongoose.Schema({

    name:String,
    address:String,
    dresses:String,
    size:String
});

var Product=mongoose.model("product",productSchema);
module.exports=Product;