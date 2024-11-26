
exports.GetList = async (req, res, Model) => {
    try {
        let pageNo = Number(req.params.pageNo);
        let perPage = Number(req.params.perPage);
        let searchValue = req.params.searchKey;
        const skipRow = (pageNo - 1) * perPage

        let rows;
        let total;

        if (searchValue !== "0") {
            let searchRegx = { "$regex": searchValue, "$options": "i" }
            let searchQuery = { $or: [{ name: searchRegx }, { productCode: searchRegx }] }
            total = (await Model.aggregate([{ $match: searchQuery }, { $count: "total" }]))[0]?.total || 0;
            rows = await Model.aggregate([
                { $match: searchQuery }, { $skip: skipRow }, { $limit: perPage }
            ])

        } else {
            total = (await Model.aggregate([{ $count: "total" }]))[0]?.total || 0;
            rows = await Model.aggregate([{ $skip: skipRow }, { $limit: perPage }]);

        }

        res.status(200).json({ status: "success", total: total, data: rows });
    } catch (error) {
        res.status(400).json({ status: "fail", data: "Not found!" });
    }
}