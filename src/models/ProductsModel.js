const { Schema, model } = require("mongoose")
const ProductsSchema = Schema({
    name: { type: String },
    price: { type: String },
    specialPrice: { type: String },
    image: { type: String },
    category: { type: String },
    subcategory: { type: String },
    remark: { type: String },
    brand: { type: String },
    shop: { type: String },
    shopName: { type: String },
    star: { type: String },
    productCode: { type: String, unique: true, minlength: 6, maxlength: 6 },
    stock: { type: String }
})

const ProductsModel = model('Products', ProductsSchema)
module.exports = ProductsModel