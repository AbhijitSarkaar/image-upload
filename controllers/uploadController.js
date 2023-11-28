const uploadPage = (req, res) => {
    res.render("pages/upload");
};

const uploadFiles = (req, res) => {
    console.log(req.body.name);
    console.log(req.body.files);
    res.json({
        message: "upload successful",
    });
};

module.exports = {
    uploadPage,
    uploadFiles,
};
