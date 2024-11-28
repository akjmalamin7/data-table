exports.UpdateService = async (req, res, Model) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({ status: "fail", message: "ID is required!" })
        }
        const result = await Model.findByIdAndUpdate(id, updateData, { new: true })
        if (!result) {
            return res.status(400).json({ status: "fail", message: "Document not found!" })
        }
        return res.status(200).json({ status: "success", message: "Document update successfully!", result })
    } catch (error) {
        console.error("Error during update:", error);
        return res.status(500).json({ status: "fail", message: "An error occurred during the update." });
    }
}