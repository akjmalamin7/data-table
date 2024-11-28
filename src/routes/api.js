const { CreateProduct, ProductList, ProductDelete, ProductUpdate, ProductDetails } = require("../controllers/ProductsController");
const { CreateCategory, CategoryList } = require("../controllers/CategoryController");
const { BrandCategory, BrandList } = require("../controllers/BrandController");
const { UploadImage } = require("../services/ImageUpload");

const router = require("express").Router();
router.post("/products/create", CreateProduct)
router.get("/products/list/:pageNo/:perPage/:searchKey", ProductList);
router.delete("/products/:id", ProductDelete);
router.patch("/products/update/:id", ProductUpdate);
router.get("/products/details/:id", ProductDetails);
router.post("/upload-image", UploadImage)

/* category */
router.post("/categories/create", CreateCategory)
router.get("/categories/list/:pageNo/:perPage/:searchKey", CategoryList);
/* Brand */
router.post("/brands/create", BrandCategory)
router.get("/brands/list/:pageNo/:perPage/:searchKey", BrandList);


module.exports = router