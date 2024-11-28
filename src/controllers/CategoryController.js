const CategoryModel = require("../models/CategoryModel")
const { GetList } = require("../services/GetListService")
const { CreateService } = require("../services/CreateService")

exports.CreateCategory = async (req, res) => {
    CreateService(req, res, CategoryModel)
}
exports.CategoryList = async (req, res) => {
    await GetList(req, res, CategoryModel)
}