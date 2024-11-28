exports.DeleteService = async (req, res, Model) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ status: "fail", message: "ID is required!" });
        }

        const result = await Model.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ status: "fail", message: "Document not found!" });
        }

        return res.status(200).json({ status: "success", message: "Document deleted successfully!", data: result });
    } catch (error) {
        console.error("Error during deletion:", error);
        return res.status(500).json({ status: "fail", message: "An error occurred during deletion." });
    }
};
