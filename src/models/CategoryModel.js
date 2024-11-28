const { Schema, model } = require("mongoose")
const CategorySchema = Schema({
    name: { type: String },
    image: { type: String },
}, { versionKey: false, timestamps: true })

const CategoryModel = model('Categories', CategorySchema)
module.exports = CategoryModel