const { CreateProduct, ProductList } = require("../controllers/ProductsController");

const router = require("express").Router();
router.post("/products/create", CreateProduct)
router.get("/products/list/:pageNo/:perPage/:searchKey", ProductList);
module.exports = router