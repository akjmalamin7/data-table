const { Schema, model } = require("mongoose")
const BrandSchema = Schema({
    name: { type: String },
    image: { type: String },
}, { versionKey: false, timestamps: true })

const BrandModel = model('Brand', BrandSchema)
module.exports = BrandModel