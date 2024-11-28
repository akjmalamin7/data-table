const ProductsModel = require("../models/ProductsModel")
const { CreateService } = require("../services/CreateService")
const { DeleteService } = require("../services/DeleteService")
const { DetailsService } = require("../services/DetailsService")
const { GetList } = require("../services/GetListService")
const { UpdateService } = require("../services/UpdateService")
exports.CreateProduct = async (req, res) => {
    CreateService(req, res, ProductsModel)
}
exports.ProductList = async (req, res) => {
    await GetList(req, res, ProductsModel)
}
exports.ProductDelete = async (req, res) => {
    await DeleteService(req, res, ProductsModel)
}
exports.ProductUpdate = async (req, res) => {
    await UpdateService(req, res, ProductsModel)
}
exports.ProductDetails = async (req, res) => {
    await DetailsService(req, res, ProductsModel)
}