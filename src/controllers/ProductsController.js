const ProductsModel = require("../models/ProductsModel")
const { CreateService } = require("../services/CreateService")
const { GetList } = require("../services/GetListService")
exports.CreateProduct = async (req, res) => {
    CreateService(req, res, ProductsModel)
}
exports.ProductList = async (req, res) => {
    await GetList(req, res, ProductsModel)
}