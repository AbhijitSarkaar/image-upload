const User = require("../models/usermodel");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userData = {
            username,
            password,
        };

        await User.create(userData)
            .then((task) => {
                if (!task) {
                    return res.status(404).json({
                        success: false,
                        message: "user not created",
                    });
                }

                res.status(201).json({
                    sucess: true,
                    message: "user created",
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    error: error.message,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};

const loginPage = (req, res) => {
    res.render("pages/login");
};

const login = (req, res) => {
    console.log(req.body);
    res.json({
        message: "logged in ",
    });
};

const signupPage = (req, res) => {
    res.render("pages/signup");
};

module.exports = {
    loginPage,
    login,
    signupPage,
    register,
};
