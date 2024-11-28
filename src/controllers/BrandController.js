const BrandModel = require("../models/BrandModel")
const { GetList } = require("../services/GetListService")
const { CreateService } = require("../services/CreateService")

exports.BrandCategory = async (req, res) => {
    CreateService(req, res, BrandModel)
}
exports.BrandList = async (req, res) => {
    await GetList(req, res, BrandModel)
}