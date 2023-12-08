const User = require("../models/usermodel");

const userHomePage = (req, res) => {
    console.log("user id", req.userId);
    res.render("pages/home");
};

const userProfile = async (req, res) => {
    const id = req.userId;
    try {
        await User.findOne({ _id: id })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: "user not found",
                    });
                }

                res.status(200).json({
                    success: true,
                    message: "User found",
                    username: user.username,
                    _id: user._id,
                });
            })
            .catch((err) => {
                res.status(400).json({
                    success: false,
                    message: err.message,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    userHomePage,
    userProfile,
};
