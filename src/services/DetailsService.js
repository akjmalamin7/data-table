const mongoose = require('mongoose');

exports.DetailsService = async (req, res, Model) => {
    const { id } = req.params;

    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ status: "fail", message: "Invalid product ID" });
    }

    try {
        // Correctly create an ObjectId using `mongoose.Types.ObjectId`
        const product = await Model.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(id) } },
            {
                $project: {
                    name: 1,
                    price: 1,
                    specialPrice: 1,
                    image: 1,
                    category: 1,
                    subcategory: 1,
                    remark: 1,
                    brand: 1,
                    shop: 1,
                    shopName: 1,
                    star: 1,
                    productCode: 1,
                    stock: 1
                }
            }
        ]);

        // Check if product was found
        if (product.length === 0) {
            return res.status(404).json({ status: "fail", message: "Product not found!" });
        }

        // Return the product data
        return res.status(200).json({ status: "success", data: product[0] });  // Return first (and only) product
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "fail", message: "Server error!" });
    }
}
