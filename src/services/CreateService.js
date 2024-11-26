
exports.CreateService = async (req, res, Model) => {
    try {
        let body = req.body;
        const newData = new Model(body);
        let data = await newData.save();
        res.status(201).json({ status: "success", data: data })
    } catch (error) {
        res.status(400).json({ status: "fail", data: error.toString() });
    }
}